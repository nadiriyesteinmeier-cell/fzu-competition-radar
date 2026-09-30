window.PAPER_DATA_UPDATED_AT = "2026-09-30";
window.PAPER_ITEMS = [
  {
    "id": "2609.38180",
    "title": "Point2Part: Unified 3D Partitioning from Point Prompts",
    "authors": [
      "Hao-Tang Tsui",
      "Yu-Rou Tuan",
      "Xiaoxuan Ma",
      "Nicolas Ugrinovic",
      "Takaaki Shiratori",
      "Kris Kitani"
    ],
    "abstract": "Existing 3D part decomposition methods do not necessarily partition the original shape into non-overlapping parts that collectively cover the entire shape, allowing overlaps or gaps that hinder downstream part-level applications. We instead formulate part decomposition as a joint partitioning of the entire shape, where the predicted parts are non-overlapping and jointly recover the entire shape. Our key insight is that part decomposition should consider all desired parts jointly, rather than modeling each part independently. To this end, we develop a promptable model for 3D part decomposition from images or meshes. Users can specify desired parts through 3D point prompts for controllable decomposition. Given one point prompt per desired part, our model produces the corresponding parts as a complete partition of the entire shape. We build on a pretrained 3D generation model and first obtain a shape latent from either an input image or mesh. We then introduce a prompt encoder that maps each 3D point prompt to a part token while attending to the shape latent. To decode the desired parts, we propose a novel part decoder jointly scoring the entire shape against all part tokens in a coarse-to-fine manner, assigning every position within the shape volume to exactly one part. We perform part decomposition in this shared shape latent space, enabling a unified model for image-to-part generation, mesh-to-part generation, and part segmentation. Our method outperforms existing works on all part-quality metrics across all three tasks, and improves compatibility among parts by an order of magnitude over previous SOTA methods. Code and models will be released.",
    "published": "2026-09-29T17:59:58Z",
    "updated": "2026-09-29T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38180"
  },
  {
    "id": "2609.38178",
    "title": "Skill-Space Shooting for Autonomous Robot Policy Improvement",
    "authors": [
      "Zihang Rui",
      "Renhao Wang",
      "Haoxu Huang",
      "Yang Gao"
    ],
    "abstract": "Robots deployed in the physical world must be able to improve beyond their initial training as they encounter new situations and failures. For this improvement to scale across tasks, it must make effective use of experience without requiring human demonstration of each correction. Recent agentic systems offer a way to reduce this reliance on human effort by using foundation models to autonomously compose learned behaviors to complete tasks. Yet completing tasks this way does not itself teach a task policy to overcome its own failures; that requires turning these behaviors into learnable corrections for the policy. Our insight is that many such corrections are familiar short behaviors, or skills: they recur across tasks and describe actions that foundation models can reason about from a scene. We introduce skill-space shooting, which uses foundation model guidance to explore corrections through these reusable skills and turn successful trials into policy improvement. Real-world experiments show repeated improvement in policies acting autonomously, while skills can also be shared to reduce the teaching needed to improve on new tasks. By making reusable skills a source of corrective supervision, skill-space shooting enables scalable and generalizable policy improvement within and across tasks. Additional results and videos at https://skill-space-shooting.github.io.",
    "published": "2026-09-29T17:59:55Z",
    "updated": "2026-09-29T17:59:55Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.38178"
  },
  {
    "id": "2609.38177",
    "title": "Imagine3D-LLM: Teaching MLLMs to Imagine 3D Scenes Before Answering",
    "authors": [
      "Jaewoo Jung",
      "Hyeonseo Yu",
      "Honggyu An",
      "Jisang Han",
      "Mungyeom Kim",
      "Minkyeong Jeon",
      "Heeseong Shin",
      "Wonjun Moon",
      "Federico Tombari",
      "Daniel Barath",
      "Marc Pollefeys",
      "Seungryong Kim",
      "Sunghwan Hong"
    ],
    "abstract": "Reasoning about the 3D world from multi-view images remains a fundamental challenge for Multimodal Large Language Models (MLLMs). While modern MLLMs handle single-image inputs effectively, they struggle to integrate evidence across viewpoints into a coherent 3D understanding. A growing body of work attempts to close this gap by injecting 3D awareness into MLLMs, either by boosting fine-grained pixel-level cross-view correspondence or by fusing features from 3D geometry foundation models, yet a substantial gap to human reasoning persists. In this work, we revisit human spatial reasoning, which suggests that rather than relying on fine-grained geometry cues, humans roughly identify common objects across views, infer the relative geometry between viewpoints, and assemble a coarse 3D layout of the scene. Inspired by this process, we introduce Imagine3D-LLM, an MLLM that learns to assemble a similar compact 3D representation of the scene and conditions its answer on this representation. Concretely, we append a small set of learnable summary tokens after the image tokens, decode them into a compact 3D Gaussian Splatting representation supervised by a photometric reconstruction loss, and train jointly with the standard next-token prediction objective. Notably, although only the summary tokens receive direct reconstruction supervision, this objective also induces stronger cross-frame correspondence within the LLM's underlying image features, suggesting that learning to reconstruct propagates 3D-aware signals throughout the model. As a result, Imagine3D-LLM consistently outperforms prior approaches across multiple spatial reasoning and 3D understanding benchmarks, suggesting that imagining the scene can be more effective than being told its pixel-wise geometry.",
    "published": "2026-09-29T17:59:52Z",
    "updated": "2026-09-29T17:59:52Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.38177"
  },
  {
    "id": "2609.38172",
    "title": "Counterfactual Video Generation Enables Scalable Humanoid Loco-Manipulation",
    "authors": [
      "Zihan Wang",
      "Zhen Wu",
      "Pieter Abbeel",
      "Rocky Duan",
      "Jitendra Malik",
      "Carmelo Sferrazza",
      "C. Karen Liu",
      "Guanya Shi",
      "Angjoo Kanazawa"
    ],
    "abstract": "Teaching humanoids loco-manipulation skills, such as carrying diverse objects, via visual imitation is a promising path toward generalist robots. However, collecting diverse, high-quality interaction videos, such as clips that clearly show a person's full body and unoccluded interactions with objects, poses a practical barrier to scaling this approach. We propose PRISM, a real-to-sim-to-real framework that overcomes this limitation by amplifying a handful of real videos into a large, diverse training set. PRISM first generates hundreds of diverse \"counterfactual\" human-object interaction videos via video-to-video (V2V) generation from a few exemplar real videos. Our contact-anchored real-to-sim pipeline then reconstructs both human and object motions, retargeting this imperfect video data into physically plausible trajectories. The intra-class variability across these counterfactual videos lets us train a single policy that generalizes to unseen objects within each category. We demonstrate the full pipeline by deploying this policy on a real robot without any real-world fine-tuning. Using only onboard depth observations, our humanoid picks up, carries, and drops objects, including boxes, barrels, bins, and balls, across novel instances, sizes, and initial configurations.",
    "published": "2026-09-29T17:59:45Z",
    "updated": "2026-09-29T17:59:45Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.38172"
  },
  {
    "id": "2609.38170",
    "title": "Adversarial Training for Pixel Diffusion",
    "authors": [
      "Xin Lin",
      "Zhifei Zhang",
      "Yuqian Zhou",
      "Haitian Zheng",
      "Zhe Lin",
      "Ming-Hsuan Yang",
      "Truong Nguyen"
    ],
    "abstract": "Pixel diffusion models generate RGB images directly, avoiding the bottleneck of an autoencoder, yet their outputs still systematically underrepresent fine-scale natural-image statistics. We show that adversarial learning provides an effective post-training correction for this deficiency. Starting from a pretrained model, we retain its original diffusion or flow-matching objective and add an adversarial loss to the predicted output at non-high-noise timesteps, leaving the model architecture and sampling procedure unchanged. To our knowledge, this is the first systematic study of adversarial post-training for pixel diffusion. Across two pixel backbones, the method jointly improves distribution fidelity, coverage, prompt alignment, and perceptual quality. We further investigate why it works. Frequency-band and power-law analyses show that the original models systematically underproduce natural-image high-frequency content, while adversarial post-training restores this missing spectral power. In contrast, perceptual loss also increases high-frequency content but sacrifices distribution fidelity and prompt alignment. Nearest-neighbor, recall, and matched no-GAN SFT controls further rule out memorization, mode dropping, and additional optimization as simple explanations. Finally, we examine the boundary of this effect. Under the tested latent diffusion configurations, the same procedure does not produce comparable joint gains and adds almost no decoded high-frequency power. These results identify direct output access to the image statistics being corrected as a key factor governing when adversarial post-training succeeds.",
    "published": "2026-09-29T17:59:41Z",
    "updated": "2026-09-29T17:59:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38170"
  },
  {
    "id": "2609.38169",
    "title": "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization",
    "authors": [
      "Bingchen Yao",
      "Haobo Xu",
      "Haokun Lin",
      "Yichen Wu",
      "Ziyu Guo",
      "Renrui Zhang",
      "Zhichao Lu",
      "Zhenan Sun",
      "Ying Wei"
    ],
    "abstract": "Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding steps; spatially, errors in different key rows affect model outputs differently, while state magnitudes vary substantially along both rows and columns. Motivated by these observations, we propose STEPQuant, a spatial-temporal post-training quantization framework for Delta-rule recurrent states. STEPQuant allocates precision according to error magnitude and memory lifetime, and jointly fits key-row and value-column scales based on state distributions and key-row impact on output error. Experiments on Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct across both long- and short-generation benchmarks show that STEPQuant closely matches FP32-state accuracy under a nominal 6-bit budget and outperforms uniform INT8 in its 4-bit configuration. Integrated into SGLang with optimized GPU kernels, 6-bit STEPQuant achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%. Our code is available at https://github.com/Dreamer-Toby/STEPQuant.",
    "published": "2026-09-29T17:59:40Z",
    "updated": "2026-09-29T17:59:40Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.38169"
  },
  {
    "id": "2609.38166",
    "title": "LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization",
    "authors": [
      "Yi Pan",
      "Haocheng Xi",
      "Kan Zhu",
      "Xingyang Li",
      "Yibo Wu",
      "Mayank Mishra",
      "Hongtao Zhang",
      "William X. Zheng",
      "Baris Kasikci",
      "Song Han",
      "Kurt Keutzer",
      "Rishabh Iyer",
      "Ion Stoica"
    ],
    "abstract": "Recent LLMs increasingly adopt hybrid designs that replace standard attention with linear attention, such as Gated DeltaNet (GDN) and Kimi Delta Attention (KDA). Although they compress the context into a fixed-size recurrent state and substantially reduce the cost of long-context processing, repeatedly reading and updating that state remains a major inference bottleneck. Quantization offers a natural way to reduce this cost, but can significantly degrade model quality, due to the accumulation of rounding errors and the presence of outlier rows and columns in the state. To address these challenges, we propose LeapQuant, a training-free method that achieves near-lossless performance under 8-bit recurrent-state quantization. First, to mitigate error accumulation, we propose per-window quantization, which leaps over a window of tokens and quantizes the state only once at its end. Within a window, outputs are computed from the fixed low-bit state together with high-precision buffered updates. Second, to reduce the error introduced by each quantization, LeapQuant retains the state's largest outliers as a few high-precision Compensator Tokens, which share the update path of real tokens. We then smooth the remaining residual before quantization to further reduce the error. Comprehensive experiments across the Qwen, Kimi, and GLM model families show that LeapQuant substantially reduces memory and compute costs during inference. With accuracy comparable to the FP32 baseline, it achieves average speedups of 2.05--3.70$\\times$ at the kernel level and 1.47$\\times$ for end-to-end inference on NVIDIA B200, RTX PRO 6000, and RTX 5090 GPUs.",
    "published": "2026-09-29T17:59:34Z",
    "updated": "2026-09-29T17:59:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.38166"
  },
  {
    "id": "2609.38165",
    "title": "Cropland PAtteRNS: Parallel Dimensional Attention Networks and Attention to Dataset Disparity for Crop Segmentation in Satellite Imagery Time Series Data",
    "authors": [
      "Joseph Metcalfe",
      "Sara Sharifzadeh",
      "Fabio Caraffini"
    ],
    "abstract": "The landscape of satellite imagery time series datasets and boundary-pushing architectures for cropland segmentation has never been richer. However, in this gold rush, important truths are being missed on both fronts, as a drive for the most novel concepts or the largest datasets pushes finer details to the side. In this paper, we present our hybrid transformer-convolutional model, Cropland Parallel Attention and Refinement Network for Segmentation (PAtteRNS), the first model to use self-attention mechanisms separately for each of the temporal, spectral, and spatial aspects of Sentinel-2 multispectral SITS data. To achieve fully-factorised attention in our proposed model, we introduce a novel parallel transformer architecture which significantly reduces the computational complexity of triple-factorised self-attention. We validate our architecture with an in-depth ablation study, and analyse the performance of our model against state-of-the-art crop segmentation models on multiple tile-size variants of the popular PASTIS and MTLCC datasets. Our findings show our model to outperform all others in the task of crop class segmentation, verified across multiple important segmentation metrics, with especially strong performance against compared models seen in the often under-reported parcel delineation quality, for which we use the Boundary IoU metric. We also find that flawed class groupings within datasets can have a significant negative impact on model performance, and report that alternate tile-size variants of crop segmentation datasets produce results incomparable to one-another, invalidating fair comparison between model performance when trained on different tile-sizes. Based on these findings, we suggest further work is required to standardise best practices when constructing SITS crop segmentation datasets, and to enable future dynamic-tile-sizing for ideal model performance.",
    "published": "2026-09-29T17:59:29Z",
    "updated": "2026-09-29T17:59:29Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.38165"
  },
  {
    "id": "2609.38163",
    "title": "Rethinking Representations for World-Action Modeling",
    "authors": [
      "Haoyi Jiang",
      "Liu Liu",
      "Xinjiang Wang",
      "Zhihao Sun",
      "Zequn Chen",
      "Sen Wang",
      "Xinjie Wang",
      "Xia Chen",
      "Jingfeng Yao",
      "Weiheng Zhao",
      "Shanglin Yuan",
      "Zhizhong Su",
      "Wei Sui",
      "Wenyu Liu",
      "Xinggang Wang"
    ],
    "abstract": "World-action models jointly learn robot policies and predict future observations, making the representation space an interface between control and prediction. We study the design of this space through controlled comparisons, finding that neither reconstruction fidelity nor pre-trained perceptual features alone ensure effective policy learning. These findings motivate ReWAM, a representation-centric world-action model built on pre-trained DINO features. Feature Calibration and a Temporal Representation Bottleneck organize these features into compact world states suited to dynamics modeling. Action-Grounded Representation Shaping routes only action-loss gradients to the bottleneck, thereby letting the policy shape what the representation encodes while the world model learns how it evolves. Without generative video pre-training, ReWAM achieves 93.6% success on RoboTwin 2.0. On RoboDojo, it achieves an average score of 12.29 and a success rate of 8.28% using approximately 600 hours of embodied pre-training data.",
    "published": "2026-09-29T17:59:22Z",
    "updated": "2026-09-29T17:59:22Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.38163"
  },
  {
    "id": "2609.38156",
    "title": "DMA$^2$: Pixel-space Distribution Matching with Adversarial and Anchor Losses",
    "authors": [
      "Xin Lin",
      "Zhifei Zhang",
      "Yuqian Zhou",
      "Haitian Zheng",
      "Shaoteng Liu",
      "Lehan Yang",
      "Zhe Lin",
      "Ming-Hsuan Yang",
      "Truong Nguyen"
    ],
    "abstract": "Distribution matching distillation (DMD) provides a general framework for few-step diffusion generation, but its modern text-to-image instantiations have been developed primarily around latent diffusion. It therefore overlooks key properties and design opportunities of native RGB. We revisit two DMD interfaces for pixel-space teachers. On the teacher-matching side, diagnostics show low-noise RGB matching is dominated by a local-texture cue, motivating a fixed high-noise matching band. On the real-data side, native clean-RGB outputs allow guidance from an external visual representation without traversing a decoder or sharing the heavy fake-score critic. DINO-Adv removes this critic from the adversarial gradient path and supplies local parametric patch guidance. For distribution-level guidance, we introduce AF-Loss, a parameter-free auxiliary semantic distribution-field objective designed for text-to-image DMD. It operates on detached rolling real and generated supports in the shared DINOv2 space while preserving prompt-conditioned teacher supervision. AF-Loss adds no learnable parameters or inference-time computation. Together these designs form DMA$^2$. Across DPG-Bench, GenEval, VQAScore, and COCO30K, the four-step DMA$^2$ student performs better than the 25-step teacher and evaluated few-step distillers.",
    "published": "2026-09-29T17:59:03Z",
    "updated": "2026-09-29T17:59:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38156"
  },
  {
    "id": "2609.38155",
    "title": "Beyond the Timeline: Augmenting Long-Video Memory with Grounded Entity Biographies",
    "authors": [
      "Hui Ren",
      "Lei Fan",
      "Henry Pao",
      "Han Guo",
      "Zeeshan Zia",
      "Ying Chen",
      "Alexander Schwing",
      "Gang Hua"
    ],
    "abstract": "Answering questions about long videos often requires connecting events involving the same objects across hours or days. Chronological descriptions and text-derived entities can leave physical identity unresolved: different objects may share a description, while observations of the same object remain disconnected across events. Retrieving relevant events therefore does not necessarily recover the \"biography\" of the particular entity a question concerns. To address this, we introduce Grounded Entity Biographies (GEB), a long-video memory framework that groups visually grounded observations of the same physical instance across clips into retrievable biographies while preserving the context of each moment. During question answering, the biography is retrieved alongside episodic evidence, allowing the model to follow an entity through events using identity links established during memory construction. Evaluations across four benchmarks, including day-long and week-long recordings, demonstrate improvements over prior memory frameworks in both multiple-choice and open-ended question answering. On EgoLifeQA, GEB achieves 72.0% accuracy, 4.4 percentage points above the best published result. Ablations show that grounded identity association and biography reading both contribute to the gains, which additional descriptions alone do not fully recover.",
    "published": "2026-09-29T17:59:01Z",
    "updated": "2026-09-29T17:59:01Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.38155"
  },
  {
    "id": "2609.38154",
    "title": "LongLive-Plug: Once-for-All Distillation for Video Generation",
    "authors": [
      "Shuai Yang",
      "Luozhou Wang",
      "Wei Huang",
      "ZhiFei Chen",
      "Bohan Zhang",
      "Xiao Fu",
      "Qianli Ma",
      "Chen-Hsuan Lin",
      "Weian Mao",
      "Bryan Chu",
      "Song Han",
      "Yukang Chen"
    ],
    "abstract": "Video diffusion models are increasingly developed into specialized models for diverse downstream tasks, and this development often includes a distillation stage, for example to accelerate sampling or to improve long-video generation. This stage is typically repeated for every specialized model. We introduce LongLive-Plug, a once-for-all distillation framework that learns reusable capabilities as LoRAs on a base model for training-free, plug-and-play deployment to compatible downstream models. These capabilities include single-pass classifier-free guidance, few-step sampling, and long-context error correction for autoregressive generation. The adapters remain reusable even when downstream models add conditioning branches, expand output channels. Despite training at a fixed guidance scale, our dedicated CFG LoRA provides text guidance control through its inference weight. Combining it with a few-step LoRA simultaneously preserves few-step generation and CFG controllability on downstream tasks. We verify training-free deployment on 54 downstream models across three backbone families and eight task categories, including world modeling, robotics, editing, and multimodal generation. The approach may support additional compatible models. Each capability can thus be distilled once per backbone family and reused without per-target retraining.",
    "published": "2026-09-29T17:58:49Z",
    "updated": "2026-09-29T17:58:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38154"
  },
  {
    "id": "2609.37096",
    "title": "Why MLLMs Struggle to Count: Overcoming Individuation and Aggregation Bottlenecks with ConvStack",
    "authors": [
      "Liwei Che",
      "Yihao Quan",
      "Sen Fang",
      "Hongyi Wang",
      "Ranjay Krishna",
      "Ruixiang Tang",
      "Vladimir Pavlovic"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) consistently struggle with fine-grained visual counting, yet the underlying causes remain poorly understood. In this work, we present a mechanistic analysis of this failure mode, identifying two critical bottlenecks inherent to the global attention pipeline of MLLMs. First, we reveal an individuation bottleneck stemming from image patchification: because Vision Transformers process patches independently, they struggle to group fragmented geometric features across boundaries into distinct object representations. Second, we identify a collapse in the subsequent counting aggregation process, where representation separation rapidly diminishes as numerosity increases due to attention compression. Identifying and formalizing these twin bottlenecks constitutes our first major contribution. To overcome them, we propose ConvStack, a lightweight architecture that operates directly in the visual token space to explicitly aggregate and inject local spatial structures via zero-initialized residual connections. By explicitly addressing the individuation bottleneck, ConvStack provides unambiguous geometric evidence for downstream aggregation. Remarkably, by fine-tuning exclusively on counting tasks, the model achieves substantial improvements in dense object counting and broader spatial understanding benchmarks, without compromising on general visual capabilities.",
    "published": "2026-09-29T09:19:51Z",
    "updated": "2026-09-29T09:19:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37096"
  },
  {
    "id": "2609.37090",
    "title": "Task-Oriented Visual Feature Compression via Residual Vector Quantization for Device-Edge Multimodal Inference",
    "authors": [
      "Luning Pang",
      "Cheng Yuan",
      "Jiawei Shao",
      "Mingtao Huang",
      "Yuan Shen"
    ],
    "abstract": "Large multimodal models (LMMs) support diverse visual understanding and reasoning tasks but are often impractical to run entirely on resource-constrained devices. Device-edge co-inference reduces device computation, yet transmitting visual data over bandwidth-limited uplinks can introduce substantial delay. Task-oriented feature compression (TOFC) reduces the payload through feature aggregation and entropy coding. However, continuous-feature coding remains costly, and query-agnostic aggregation may discard task-relevant local evidence. We propose query-guided task-oriented feature compression (Q-TOFC) for device-edge multimodal inference. Q-TOFC employs residual vector quantization (RVQ) to encode each merged feature as a compact sequence of codebook indices, reducing its representation cost and allowing more features to be transmitted. It further incorporates query relevance into feature aggregation and uses a quantization error compensation adapter to mitigate the distortion introduced by discrete quantization. Experiments on seven multimodal benchmarks show that Q-TOFC reduces the visual payload by 53.6% relative to TOFC while maintaining comparable average normalized task performance. End-to-end latency evaluations further demonstrate lower latency under bandwidth-constrained uplinks.",
    "published": "2026-09-29T09:17:05Z",
    "updated": "2026-09-29T09:17:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37090"
  },
  {
    "id": "2609.37089",
    "title": "Real2Gym: Building Gyms from Videos, Bringing Skills to Robots",
    "authors": [
      "Kerui Ren",
      "Yingxiang Xu",
      "Kaiwen Song",
      "Linning Xu",
      "Bo Dai",
      "Mulin Yu",
      "Tao Lu"
    ],
    "abstract": "Real-world videos provide rich demonstrations of manipulation, but turning them into reusable robot skills requires visually aligned environments, executable physical interactions, and mechanisms for learning from experience. We introduce Real2Gym, an agentic Real2Sim2Real framework that turns human and robot demonstrations into interactive simulation gyms and brings skills acquired in simulation to physical robots. The Real2Sim module reconstructs editable scenes, aligns objects and cameras with the input, validates demonstrated or retargeted actions through native physics execution, and generates task-conditioned variations with action-feasibility checks. Within these environments, the agent generates executable code for manipulation stages, observes their outcomes, and distills successful attempts and failures into reusable task procedures, object-relative motions, and recovery strategies. Through a shared perception-and-control interface, these skills guide subsequent execution in simulation and on real robots, with motions adapted to current observations and no updates to the underlying model weights. Extensive evaluations demonstrate that Real2Gym enables high-fidelity simulation environment reconstruction, outperforming GPT-6 Astra Direct Mode by 16.7% in success rate with approximately 74.9% fewer policy-execution tokens across these environments, while exceeding it by 33.3% in physical robot execution success rate across four tasks on a real Franka robot.",
    "published": "2026-09-29T09:16:49Z",
    "updated": "2026-09-29T09:16:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37089"
  },
  {
    "id": "2609.37085",
    "title": "ARGOS: Reinforcement Learning-Driven Multidimensional Elasticity for Service Orchestration in the Computing Continuum",
    "authors": [
      "Javier Mateos-Bravo",
      "Sergio Laso",
      "Juan Luis Herrera",
      "Ilir Murturi",
      "Pantelis Frangoudis",
      "Schahram Dustdar"
    ],
    "abstract": "Data-intensive services in the Computing Continuum must balance analytics quality, resource usage, and cost across heterogeneous nodes with limited and uneven capacity. This balance becomes especially difficult when resource scaling reaches capacity limits, because changes in demand and cluster pressure must then be absorbed without violating client-defined quality ranges. Existing orchestrators mainly adapt resources, placements, or replicas, while analytics requirements such as coverage, sample, and freshness remain fixed. This article presents ARGOS, the Adaptive Reinforcement Learning-Driven Governance for Orchestrated Services, an end-to-end controller that formulates multidimensional elasticity as a per-request Markov decision process over analytics quality and cluster pressure, supported by capacity-aware admission. ARGOS is evaluated under controlled workloads and time-varying multi-tenant arrivals on a heterogeneous cluster. Across the controlled scenarios, the deep reinforcement learning policies consistently outperform the non-learning baselines and approach the independently tuned best-fixed reference. A separate live evaluation reports improvements over the static midpoint under realistic and saturated arrivals, with no recorded CPU or memory violations but remaining coverage violations. These results support deep reinforcement learning as an adaptive mechanism for multidimensional elasticity when resource scaling alone is insufficient.",
    "published": "2026-09-29T09:14:36Z",
    "updated": "2026-09-29T09:14:36Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37085"
  },
  {
    "id": "2609.37083",
    "title": "Identifying ODEs from Unstructured Data with Causal Representation Learning",
    "authors": [
      "Alessandro Trenta",
      "Riccardo Massidda",
      "Davide Bacciu",
      "Sara Magliacane"
    ],
    "abstract": "We study the problem of recovering the governing ODE of a dynamical system from unstructured, high-dimensional observations such as images. Existing methods for ODE discovery typically assume direct measurements of the variables, or do not provide theoretical guarantees on the learned variables and equations. While Causal Representation Learning (CRL) methods provide guarantees on identifying variables from high-dimensional observations up to component-wise diffeomorphisms, we show that in general these variables cannot be used directly as input to equation discovery methods, which typically assume that the variables will lead to sparse equations. So we introduce SParse Equivalent Equation Discovery AutoEncoder (SPEED-AE), a framework that combines a pretrained CRL method with a component-wise autoencoder that learns transformations of variables that are amenable to sparse ODE discovery. We show that for polynomial ODEs, this additional step allows us to restrict the identifiability of each variable from polynomial to monomial diffeomorphisms. Experiments on Lotka-Volterra, Lorenz, and a two-pendulum system show that SPEED-AE improves on the disentanglement of the CRL methods and that it recovers ODEs that are closest to the ground truth, while achieving state-of-the-art forecasting performance.",
    "published": "2026-09-29T09:14:12Z",
    "updated": "2026-09-29T09:14:12Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.37083"
  },
  {
    "id": "2609.37080",
    "title": "LDM-is-AE: Latent Diffusion Model is an Auto-Encoder for End-to-End Image Generation",
    "authors": [
      "Zhengqiang Zhang",
      "Lingchen Sun",
      "Rongyuan Wu",
      "Qiaosi Yi",
      "Xiangtao Kong",
      "Chaodong Xiao",
      "Lei Zhang"
    ],
    "abstract": "Latent Diffusion Models (LDMs) typically adopt a two-stage pipeline: an auto-encoder (AE) is first pre-trained to define a latent space, then a diffusion model is trained to perform denoising within it. Such a two-stage design introduces a representation mismatch, as the latent space is optimized for reconstruction rather than adapting the denoising dynamics. We reveal that the LDM itself is an AE, and consequently present LDM-is-AE, an end-to-end one-stage LDM training framework that eliminates the need for a separately trained tokenizer. Our key observation is that the LDM backbone actually performs a latent-to-feature-to-latent transformation at each denoising step, which can be interpreted as an internal decoding--encoding process. Leveraging this structure, we split the DiT backbone into two reciprocal components, DiT-E (i.e., DiT Encoding) and DiT-D (i.e., DiT Decoding), and impose image-space supervision on the intermediate features across all timesteps. Our model encourages the internal representation to align with the image domain throughout denoising, thereby establishing an explicit latent-to-image-to-latent path. At the zero-noise timestep, our model further performs an image-to-latent-to-image mapping, corresponding to an auto-encoding process. As a result, LDM-is-AE jointly learns latent representations and denoising dynamics in an end-to-end manner, yielding a diffusion-native latent space tailored to the generation process. Experiments demonstrate that LDM-is-AE exhibits highly competitive generation performance, achieving an FID of 1.80 and 1.90 on 256x256 and 512x512 class-conditional image generation, respectively.",
    "published": "2026-09-29T09:13:20Z",
    "updated": "2026-09-29T09:13:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37080"
  },
  {
    "id": "2609.37071",
    "title": "Context without Commitment: Robust Dense Correspondence under Non-Rigid Deformation",
    "authors": [
      "Yuzhen He",
      "Sara Homscheid"
    ],
    "abstract": "Non-rigid point-cloud registration aims to find the corresponding target point for each point on a deforming source surface. Point-level matching keeps the full target cloud available, but correspondence becomes ambiguous when different regions have similar local geometry. Regional or coarse-to-fine methods provide broader spatial context, but an incorrect regional match can exclude the correct correspondence before dense matching. We propose CoCo-Reg, which uses regional patches to enrich dense point features without allowing patch predictions to restrict the final point-level search. CoCo-Reg constructs farthest-point-sampled patches, exchanges geometric information within and between source and target, supervises patch similarity using identity-corrected point overlap, and projects the resulting regional information back to dense point features. The final registration stage still scores the full target cloud before global point-level candidate selection. On 726 held-out ModelNet10 objects across nine deformation levels, two established learning-based baselines obtain mean correspondence errors of 0.1993 and 0.1921, whereas CoCo-Reg obtains 0.0547. Relative to its point-level baseline, this is a 72.6\\% reduction. CoCo-Reg achieves lower correspondence error on 92.3\\% of paired test objects and reduces the mean fraction of points with error above 0.1 from 47.3\\% to 17.3\\%. Chamfer distance and HD95 decrease in the same direction, and CoCo-Reg remains lower across all tested deformation levels. These results support using regional context for dense non-rigid correspondence without imposing a hard patch-level restriction on the final search. Because evaluation uses one checkpoint per method, the reported gains characterize the complete systems rather than the isolated causal contribution of an individual component. Code will be made publicly available.",
    "published": "2026-09-29T09:06:31Z",
    "updated": "2026-09-29T09:06:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37071"
  },
  {
    "id": "2609.37070",
    "title": "Predictive Safety Curricula for Robust Legged Locomotion",
    "authors": [
      "Ivan Ovinnikov",
      "Pascal Sutter",
      "Christian Gehring",
      "Jordis Herrmann"
    ],
    "abstract": "Rare but consequential failures can persist in learned locomotion policies for legged robots even when average task performance is high, in part because standard curricula primarily adapt task difficulty rather than the distribution of safety-critical experience. We introduce Predictive Safety Curricula (PSC), a framework for allocating locomotion training experience using learned predictions of future safety cost. PSC trains a distributional safety critic from policy rollouts and uses its predictions to prioritize both terrain contexts and previously encountered randomized events. The resulting curriculum modifies the training distribution while leaving the task reward and policy-optimization loss unchanged. We evaluate PSC in controlled rough-terrain locomotion and in production locomotion systems. PSC improves reliability relative to standard terrain progression, advantage-based replay, and learning-progress curricula, with the largest gains on difficult terrain and under degraded observations. The same allocation principle transfers to two production locomotion stacks. On ANYmal-D hardware, PSC reduces shank-collision incidence by $63\\%$ relative to the learning-progress curriculum across three matched training seeds, with a reduction in every seed. On a production stair-climbing platform, PSC eliminates observed shank collisions in the evaluated hardware trials. These results show that learned predictions of future safety cost can provide an effective signal for allocating training experience toward rare failure modes and improving locomotion reliability.",
    "published": "2026-09-29T09:06:17Z",
    "updated": "2026-09-29T09:06:17Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37070"
  },
  {
    "id": "2609.37067",
    "title": "FACT: Fidelity-Aware Construction of Articulated Twins",
    "authors": [
      "Kuixiang Shao",
      "Chuansen Nie",
      "Yinuo Bai",
      "Jiayuan Gu",
      "Jingyi Yu"
    ],
    "abstract": "Visually plausible articulated assets may still fail during contact interactions or exhibit inaccurate motion. We present FACT (Fidelity-Aware Construction of Articulated Twins), an agentic framework that progressively constructs articulated twins to improve geometry, contact, and dynamic fidelity. The agent drives an evidence--diagnosis--revision loop on a shared editable representation, selecting measurements and model edits using quantitative feedback, while numerical tools execute and validate the updates. It reconstructs editable articulated geometry from images through feature planning, targeted measurements, and diagnostic refinement. On this reference, it repairs collision proxies through task-aware local repartitioning before fidelity-constrained compression. Finally, it constructs response models from passive-response videos, using simulation residuals to guide model revision and constrained physical parameter fitting. Experiments show that FACT improves geometric reconstruction over baselines, enables more reliable interaction with simpler collision proxies, and better reproduces held-out physical responses than direct parameter inference.",
    "published": "2026-09-29T09:04:34Z",
    "updated": "2026-09-29T09:04:34Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37067"
  },
  {
    "id": "2609.37066",
    "title": "Beyond Compression: Diagnosing How Post-Training Changes Mathematical Reasoning",
    "authors": [
      "Hongyang Li",
      "Yiming Zhu",
      "Xiao Li",
      "Caesar Wu",
      "Said Mammar",
      "Pascal Bouvry"
    ],
    "abstract": "Post-training is central to mathematical reasoning in modern large language models (LLMs), but endpoint pass@1 alone underidentifies what has changed. Gains may reflect newly reachable solutions, cheaper sampling of latent solutions, surface robustness, or memorisation. We compare three post-training paths under a common diagnostic readout: our sufficiently trained off-policy distillation trajectories, released Qwen3 off-policy-plus-on-policy distillation endpoints, and a released DeepSeek-Math endpoint trained with Group Relative Policy Optimisation (GRPO). Our probe uses cross-surface pass@K over verbatim prompts, paraphrases, numerical isomorphisms, and translations, plus consistency, distribution-shape, and verified supervised-fine-tuning (SFT) membership analyses. We find two regimes. On easier AMC problems, large-K ceilings are near saturation, so post-training mainly compresses sample cost. On harder AIME problems, post-training expands the large-K ceiling over the base model: sufficient off-policy distillation already raises this ceiling, Qwen3 released endpoints raise it further, and DeepSeek-Math GRPO does not dominate sufficient off-policy distillation at large K. English-dominant distillation improves non-English reasoning but preserves language-tier gaps. A controlled-overfit audit finds limited sensitivity in current SFT-membership probes. Compression is one regime of post-training, not a universal explanation.",
    "published": "2026-09-29T09:04:00Z",
    "updated": "2026-09-29T09:04:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37066"
  },
  {
    "id": "2609.37061",
    "title": "A Comprehensive View of Fairness through Distributional Stability",
    "authors": [
      "Gayane Taturyan",
      "Charlotte Laclau",
      "Stephan Clémencon"
    ],
    "abstract": "We view fairness as a property of distributional stability. Rather than assessing a predictor under a fixed data distribution, we study how its predictions change under perturbations that modify the composition of protected groups. A predictor is fair if it remains stable under such shifts. Under this perspective, several classical notions of fairness arise as stability with respect to specific perturbations, with the associated unfairness gap given by a Lipschitz constant of a prediction-rate functional. This formulation also yields guarantees that hold uniformly over a range of demographic compositions at test time, without requiring knowledge of the deployment distribution. It leads to a learning procedure based on convex combinations of reweighted predictors, formulated as a second-order cone program, for which we establish generalization bounds. Experiments on standard benchmarks illustrate the approach.",
    "published": "2026-09-29T09:00:49Z",
    "updated": "2026-09-29T09:00:49Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37061"
  },
  {
    "id": "2609.37056",
    "title": "Evolving Towards Better Codes: LLM-Guided Search for High-Distance Binary Linear Codes",
    "authors": [
      "Amal Seddas",
      "Vladyslav Shashkov",
      "Maryna Viazovska",
      "Emmanuel Abbe"
    ],
    "abstract": "Evolutionary program search driven by large language models (LLMs) has produced record-breaking constructions for open problems in combinatorics and beyond. We apply this approach to the longstanding problem of improving the best-known bounds for binary linear codes. Building on the EvoTune evolutionary framework and the ShinkaEvolve codebase, we introduce LinCodeEvolve, which evolves code-construction programs against an exact minimum-distance evaluator. A strategy loop combines diversity-driven search and expert supervision: when progress plateaus, new strategies are used to redirect the search. LinCodeEvolve discovers seven record-breaking codes, $[172,21,66]$, $[173,20,68]$, $[176,21,68]$, $[181,21,70]$, $[184,21,72]$, $[189,22,72]$ and $[200,21,77]$, six of which have concise quasi-cyclic descriptions. With standard code modification techniques, they improve $22$ entries of the tables. Every code is verified by exhaustive enumeration. These results suggest that LLM-guided search can help find improved codes and complement existing methods in coding theory.",
    "published": "2026-09-29T08:59:06Z",
    "updated": "2026-09-29T08:59:06Z",
    "categories": [
      "cs.IT",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.37056"
  },
  {
    "id": "2609.34978",
    "title": "One Sensor, Whole Body - 3D Body Pose from a Single Consumer Earbud IMU",
    "authors": [
      "Zhilin Guo",
      "Boqiao Zhang",
      "Oszkár Urbán",
      "Josef Bengtson",
      "Hakan Aktas",
      "Wenzhao Li",
      "Siyu Hong",
      "Kyle Fogarty",
      "Chenliang Zhou",
      "Ali Senguel",
      "Cengiz Oztireli"
    ],
    "abstract": "Consumer earbuds already stream inertial motion data from the head, one of the most widely worn sensor locations on the body. We ask how much of the 3D body pose a single such head IMU can recover, and whether adding more consumer sensors actually helps. We build a multimodal capture pipeline that records four-view RGB-D video together with an AirPods head IMU and two Striv insole IMUs, synchronize the streams post-hoc, and generate pseudo-ground-truth with SAM 3D Body, yielding a 35-take single-subject benchmark spanning gait, turning, vertical, everyday, and clinically inspired motions. Adapting two recurrent model families (IMUPoser and MobilePoser), we show that one head IMU recovers lower-body pose at 79.0 mm rigid-MPJPE and per-foot ground contact at 0.809 macro-F1, and that a causal variant retains most of this accuracy at streaming latency. In paired per-take significance tests across both families, adding the consumer foot IMUs never significantly improves pose and significantly degrades it in two of four model-split combinations; a mounting-bias probe and feet-only ablation identify insole orientation quality, not foot placement, as the mechanism. Extending the output to a 20-joint full-body skeleton maps the boundary: gross distal-arm motion is partially recoverable from the head alone, proximal upper-body pose is not, and staged fine-tuning recovers the leg accuracy that naive joint training sacrifices to multi-task dilution. For learned pose from consumer wearables, sensor reliability, not sensor count, is the binding constraint here. For the devices tested, the earbud is its sweet spot. Code is available at https://github.com/ZhilinGuo/one-sensor-whole-body.",
    "published": "2026-09-28T11:55:29Z",
    "updated": "2026-09-28T11:55:29Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.34978"
  },
  {
    "id": "2609.34977",
    "title": "SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models",
    "authors": [
      "Tianxiang Chen",
      "Zhentao Tan",
      "Zi Ye",
      "Yue Wu",
      "Xiaobing Tu",
      "Jinkui Ren",
      "Xiantao Zhang",
      "Tao Gong",
      "Qi Chu",
      "Nenghai Yu",
      "Xipeng Qiu",
      "Jieping Ye"
    ],
    "abstract": "Multimodal Large Language Models face significant efficiency challenges that stem from two distinct yet coupled sources: data redundancy and computational redundancy. While most methods focus on data redundancy by pruning visual tokens from the output of the visual encoder or computing redundancy in LLM decoders using blockwise importance, the finer-grained inter-layer representation shifts and the distribution differences within the layers themselves have not been fully explored. In this work, we comprehensively investigate this dual-level inefficiency. We posit that intermediate layer tokens from vision encoders should be considered for effective visual token pruning, as semantic focus shifts across layers, with middle-layer tokens capturing more detailed object-centric information that deeper layers may abstract away. Furthermore, we reveal the differential contributions of Attention and FFNs across distinct LLM decoder layers. Building upon these discoveries, we propose \\textbf{SPIDER}, a training-free framework that integrates multi-layer \\underline{\\textbf{S}}emantic visual token \\underline{\\textbf{P}}run\\underline{\\textbf{I}}ng with an a\\underline{\\textbf{D}}aptive sub-lay\\underline{\\textbf{ER}} skipping mechanism. Experimental evaluations demonstrate that SPIDER consistently maintains strong performance across various MLLM architectures and reduction ratios. For instance, on LLaVA-NeXT-7B, SPIDER reduces FLOPs by $79\\%$ while maintaining 96$\\%$ of the baseline performance.",
    "published": "2026-09-28T11:54:41Z",
    "updated": "2026-09-28T11:54:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34977"
  },
  {
    "id": "2609.34976",
    "title": "Inspector: Conversational and Lightweight Analyzer of Analog Circuit Layouts Using LLM and CNNs",
    "authors": [
      "Abril Cano Castro",
      "Giuseppe Chiari",
      "Michele Piccoli",
      "Federico Viola",
      "Davide Zoni"
    ],
    "abstract": "The integration of artificial intelligence into computer-aided design frameworks has sparked a shift in the design of analog integrated circuits (ICs), transitioning the field from using manual and algorithmic-based solutions to adopting automated and intelligent paradigms. In this scenario, the GDSII file represents the industry-standard database containing the ultimate and most accurate source of information of the analog circuit, encapsulating the complex physical geometries and parasitic realities that define tape out performance. This paper proposes a novel framework that combines fine-tuned LLMs and CNNs to analyze GDSII files of analog circuits, enabling a conversational interface between the tool and the designers. Experimental results using thousands of analog designs across four realistic tasks demonstrate that the proposed solution outperforms state-of-the-art general-purpose massive VLMs by a significant margin (up to 81%), thus providing a lightweight solution to the problem of GDSII analysis.",
    "published": "2026-09-28T11:54:13Z",
    "updated": "2026-09-28T11:54:13Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34976"
  },
  {
    "id": "2609.34974",
    "title": "Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces",
    "authors": [
      "Ruozhao Yang",
      "Mingfei Cheng",
      "Xiaofei Xie"
    ],
    "abstract": "LLM-based Web agents can autonomously complete user tasks, yet deceptive interfaces can steer them toward outcomes that conflict with users' interests. Existing defenses primarily intervene on agent behavior through blocking, guidance, or replanning. We identify a distinct failure mode: a task-valid action can still realize an unauthorized consequence because of the current Web state. This motivates treating task-relevant Web state itself as a runtime control target. We introduce Veer, an agent-side runtime defense that leaves task planning to the base agent and intervenes on Web state when a proposed action would produce an unauthorized consequence. Before modifying the live environment, Veer constructs a prospective intervention trajectory toward a safe task-relevant state and executes it with runtime grounding and verification. Across TrickyArena and WebDecept, Veer achieves the highest safe task completion in all three evaluation settings, exceeding the next-best defense by 15.9 and 25.0 percentage points on TrickyArena-Single and TrickyArena-Multi, respectively, while reducing dark-pattern success on WebDecept to 0.3%. These gains persist across dark-pattern types and all 12 agent, model, and benchmark configurations. Ablations show that active state intervention provides the largest gain, while prospective rollout and temporal evidence contribute additional improvements. These results establish task-relevant Web state as an effective runtime control target for protecting Web agents from deceptive outcomes.",
    "published": "2026-09-28T11:53:24Z",
    "updated": "2026-09-28T11:53:24Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.34974"
  },
  {
    "id": "2609.34973",
    "title": "APEX-Voice: Can Voice Agents Complete Professional Workflows Through Full-Duplex Interaction",
    "authors": [
      "Puneet Mathur",
      "Dinesh Manocha"
    ],
    "abstract": "Full-duplex voice agents can now listen, speak, use tools, and act during spoken interactions, but fluent dialogue does not guarantee correct completion of delegated professional workflows. We introduce APEX-Voice, a benchmark of 120 interactive professional workflows spanning ten work archetypes such as form completion, corporate negotiation, coordination, consulting, and interviewing. Each workflow executes in a stateful Voice Workbench environment with task-specific knowledge, typed tools, gold-annotated final work artifact, authorization constraints, and a user simulation policy backed by validated, pre-compiled speech realizations. We evaluate both artifact field accuracy and end-to-end workflow success, which requires the correct terminal state, valid process, completed actions, and a valid final artifact. Across five frontier real-time voice agents-GPT-Live-1, Gemini-3.8-Live, Grok-Voice-Think-2.0, Step-Audio3, and GPT-realtime-2.1, none exceeds 25% Pass@1, and the best Reliable@3 is only 10.8%. Moreover, stateful coordination is the dominant failure point across systems, while success decreases further on workflows requiring greater knowledge retrieval and mid-speech corrections. Overall, APEX-Voice is the first benchmark for evaluating whether voice agents can translate conversational competence into dependable professional work.",
    "published": "2026-09-28T11:53:07Z",
    "updated": "2026-09-28T11:53:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34973"
  },
  {
    "id": "2609.34972",
    "title": "Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models",
    "authors": [
      "Jingdi lei",
      "Junxian Li",
      "Di Zhang",
      "Zhanqiu Zhang",
      "Yiwen Guo",
      "Soujanya Poria"
    ],
    "abstract": "Long visual token sequences often account for a substantial fraction of the computational overhead in multimodal large language models~(MLLMs). Existing approaches reduce this cost by pruning redundant visual tokens, but permanently discard visual evidence that may become useful in subsequent layers. We instead ask whether all visual tokens can be preserved while reducing the cost of repeatedly evolving the representations through the Transformer. To answer this question, we perform low-rank interventions on visual-to-text information flow. We find that, after visual-to-text attention is blocked, restoring only a few directions recovers most of the lost accuracy, suggesting the relevant visual influence is concentrated in a low-dimensional subspace. We further observe strong predictability in layer-specific visual states: lightweight MLPs approximate them with high cosine similarity and low reconstruction error. Motivated by these findings, we propose $δ$-Vision, which replaces repeated Transformer evolution of visual tokens with lightweight low-rank adapters that construct layer-wise visual memories while preserving all visual tokens for text retrieval. Across image and video benchmarks, $δ$-Vision achieves higher accuracy than visual token pruning baselines at comparable or lower computation, while delivering competitive inference efficiency without discarding visual tokens.",
    "published": "2026-09-28T11:52:45Z",
    "updated": "2026-09-28T11:52:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34972"
  },
  {
    "id": "2609.34971",
    "title": "Action-Space Shaping for LLM Agents: Measuring and Mitigating Tool-Schema Bias",
    "authors": [
      "Yinhong Liu",
      "Zhili Tan",
      "Zilin Wang",
      "Zhijiang Guo"
    ],
    "abstract": "Large Language Models (LLMs) have shown strong performance on tool-use agentic tasks when given a fixed tool schema. Yet a tool schema is not the action space of an agent; it is merely one interface representation of it. The same executable action can be exposed through many different, functionally equivalent tool definitions, and an agent that has truly learned a task should behave consistently across them. We show that current agents often do not, a phenomenon we term schema bias. To study this systematically, we introduce an executable transformation framework that rewrites a native tool schema using nine operators, including merging and splitting tools, altering how a single tool is expressed, and distributing one action across several dependent calls. The tasks, executable actions, and reachable states remain fixed, so any change in success is attributable to the interface alone. Evaluating eleven LLMs, including two closed models, on up to 32 schema variants, we ask how large schema bias is, how it manifests, whether the difficulty of a schema variant can be predicted without a full evaluation, and whether training removes it. We find that schema bias is substantial even for the newest models: success rates range from complete failure to 97% depending solely on the schema. To reliably estimate schema difficulty, it requires running a small sample of the target queries. Training repairs a schema variant only when that variant appears in the training data.",
    "published": "2026-09-28T11:52:43Z",
    "updated": "2026-09-28T11:52:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34971"
  },
  {
    "id": "2609.35924",
    "title": "Grab a Coffee: Future-Aware Guidance for Discrete Diffusion with Compiled Objectives",
    "authors": [
      "Hua",
      "Xu",
      "Dongxin Li",
      "Gwen Yidou-Weng",
      "Guy Van den Broeck",
      "Wei Wang",
      "Anji Liu"
    ],
    "abstract": "Discrete diffusion models generate sequences by iteratively resolving multiple tokens in parallel, offering a flexible alternative to left-to-right generation. However, guiding this process with a sequence-level objective is difficult because the value of one unresolved token depends on the other tokens with which it can form a high-reward sequence. Enumerating all such completions makes the whole guidance computation grow exponentially with the number of unresolved positions. We introduce COFFEE, a plug-and-play framework that avoids this enumeration by separating sequence dependence from the objective. At each diffusion step, a target-free carrier absorbs the marginal token distributions predicted by the denoiser to construct a joint model over the unresolved tokens, while a compiled finite-state model records how their combinations affect the sequence-level preference. Pairing their states allows COFFEE to transfer global preferences to unresolved positions and sample a clean reconstruction without retraining the diffusion model. The same framework supports explicit hard constraints and learned soft objectives. We evaluate COFFEE across multiple symbolic, language, and biological benchmarks, where it achieves strong control results with task-dependent quality and diversity trade-offs. By making objectives available to inference rather than only evaluation, COFFEE brings joint conditioning, completion-weighted guidance, and optimization-based constraints into pretrained neural generation, showing the potential of neural-symbolic methods in diffusion guidance.",
    "published": "2026-09-28T11:51:38Z",
    "updated": "2026-09-28T11:51:38Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35924"
  },
  {
    "id": "2609.34968",
    "title": "RoboFL: Federated Expert Assembly for World Action Models",
    "authors": [
      "Rongyu Zhang",
      "Ruizhi Fan",
      "Yunfan Lou",
      "Hengyu Fang",
      "Shenli Zheng",
      "Chenrui Wu",
      "Yili Jin",
      "Li Du",
      "Dan Wang",
      "Yuan Du",
      "Shanghang Zhang"
    ],
    "abstract": "Vision-language-action and world-action models are increasingly popular, yet remain bottlenecked by physical interaction data that is scarce, institutionally siloed, and task-heterogeneous. A natural federated solution is to let each client adapt a shared foundation model through parameter-efficient fine-tuning, avoiding the exchange of full-model updates. However, federating these adapters is nontrivial, as naive aggregation can entangle incompatible updates, while incorporating MoE-style routing into federated aggregation may dilute specialization and destabilize expert selection. We present RoboFL, which instantiates MoSAIC (Mixture of Slotted Adapters) for federated world-action learning. MoSAIC directly installs locally trained LoRA adapters as the expert branches of a server MoE. Server-side routers learn token assignments over these prior-informed branches while jointly refining routing and expert parameters. Foresight-to-Action Routing Distillation (FARD) aligns routing across the model's three paths, while Path-Consensus Expert Aggregation (PCEA) converts complete expert updates into a compact global adapter for personalized redistribution. Experiments on RoboTwin 2.0, RLBench, and a real-world Franka robot arm show the superiority of RoboFL with structured expert assembly, as it outperforms centralized PEFT InternVLA-A1 by 12.23% on the Franka arm, while reducing per-round client communication by up to 86.81% relative to MoE-based federated VLA baselines.",
    "published": "2026-09-28T11:49:57Z",
    "updated": "2026-09-28T11:49:57Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34968"
  },
  {
    "id": "2609.34967",
    "title": "Semantic Uncertainty Quantification Needs Factual Equivalence",
    "authors": [
      "Joseph Hoche",
      "Quentin Guimard",
      "Gianni Franchi"
    ],
    "abstract": "Semantic uncertainty quantification for large language models rests on a common template: sample several answers, measure how much they agree, and treat disagreement as uncertainty. We first formalize this template as two separate roles: an operator that compares two answers, and an aggregator that combines all pairwise comparisons into a scalar. Existing methods differ almost entirely in how they aggregate, while taking the operator off the shelf, typically an NLI model or a generic sentence encoder. We show that this reliance on off-the-shelf operators is the primary bottleneck of semantic UQ: they do not accurately measure factual equivalence of multiple answers to the same question. We resolve this with a deliberately simple recipe: a single encoder trained contrastively to isolate the targeted fact, utilizing synthetic data generated by an LLM and dataset both disjoint from all evaluation settings. Integrating the resulting operator into existing methods improves performance on 120 of 126 evaluation settings (95%) spanning 18 model dataset combinations across language and vision-language models. The best variant reaches 0.76 mean AUROC against 0.68 for the strongest baseline, while replacing the quadratic cross-encoder comparisons of entailment-based operators with one encoder pass per answer. The uniformity of the improvement supports the view that the operator, not the aggregator, is the limiting factor. The same operator also improves single generation token-level estimators: the norm it assigns to each token measures how much that token bears on the answer, and reweighting token log-likelihoods accordingly sharpens the estimate.",
    "published": "2026-09-28T11:48:35Z",
    "updated": "2026-09-28T11:48:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34967"
  },
  {
    "id": "2609.34966",
    "title": "Safe Greenhouse Climate Control Using Lagrangian-Constrained PPO with Kolmogorov-Arnold Networks",
    "authors": [
      "Hangzun Liu",
      "Yuling Fan",
      "Fang Tian",
      "Zhilong Bie",
      "Zaiwen Feng",
      "Yongliang Qiao"
    ],
    "abstract": "Greenhouse climate control balances economic return with maintaining temperature, humidity and CO2 within crop-adapted growth ranges. Conventional reinforcement learning (RL) greenhouse controllers use fixed reward penalties to limit climate constraint violations, yet such heuristic penalties cannot explicitly constrain long-term cumulative violations. Poorly tuned weights either lead to overly conservative policies and lower yields, or fail to suppress persistent climate deviations that harm photosynthesis and induce crop diseases. To address this issue, we formulate greenhouse climate regulation as a Constrained Markov Decision Process (CMDP) and use a Lagrangian safe RL framework RCPO-PPO to separate economic optimization and cumulative safety constraints, enabling adaptive penalty adjustment without manual tuning. To handle strong nonlinear, time-varying coupling between greenhouse microclimate and crop growth, Kolmogorov-Arnold Networks (KANs) replace Multi-Layer Perceptrons (MLPs) as policy and value approximators for improved nonlinear representation. Sinusoidal cyclic time features are embedded in observations to capture diurnal environmental periodicity. Simulations use a classic winter lettuce greenhouse model driven by 40-day real weather disturbances. Compared with vanilla penalty-based PPO, our method cuts cumulative climate violations by 18.65% and raises lettuce economic profit by 2.91%, keeping violations stable near the safety threshold. This decoupled CMDP optimization with KAN-based policy representation mitigates long-term climate risks and boosts planting profits, offering a constraint-aware control strategy for precision greenhouse cultivation.",
    "published": "2026-09-28T11:48:25Z",
    "updated": "2026-09-28T11:48:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34966"
  },
  {
    "id": "2609.34965",
    "title": "Cyclostationary Phase Conditioning for Medical Time Series Diffusion",
    "authors": [
      "Samuel Ruiperez-Campillo",
      "Michele Copetti",
      "Jorge da Silva Goncalves",
      "Sonia Laguna",
      "Thomas Hofmann",
      "Julia E. Vogt"
    ],
    "abstract": "Many physiological time series, such as cardiac and brain recordings, exhibit cyclostationarity: their statistics vary periodically with an underlying cycle phase. Corruption from motion, poor contact, and physiological interference obscures morphology needed for diagnosis, making signal restoration essential. Existing diffusion approaches condition on corrupted observations alone and must learn cyclic structure implicitly. We instead propose two inductive biases which encode cyclostationarity: a shift-covariant wavelet representation and dense per-sample phase conditioning inferred from the corrupted input. We further introduce a training-free cyclostationarity index that quantifies phase structure and predicts when phase conditioning will help. Finally, we propose antithetic coupling of reverse trajectories to reduce sampling variance while achieving comparable performance with fivefold fewer network evaluations. Across modalities, our results show that explicitly encoding measurable cyclic structure improves physiological time-series restoration.",
    "published": "2026-09-28T11:48:11Z",
    "updated": "2026-09-29T07:12:03Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2609.34965"
  },
  {
    "id": "2609.33311",
    "title": "SocialHumanoid: Towards Expressive Humanoid Behavior via One-Step Co-Speech Motion Generation",
    "authors": [
      "Chengqun Yang",
      "Tengjie Zhu",
      "Liang Xu",
      "Fulong Liu",
      "Guanzhu Ren",
      "Yitong Xing",
      "Xuefeng Lu",
      "Fei Shi",
      "Siyuan Fan",
      "Weijie Dong",
      "Yao Mu",
      "Xiaokang Yang",
      "Yichao Yan"
    ],
    "abstract": "Humanoid robots are increasingly expected to serve as embodied social agents that communicate naturally with humans through face-to-face interaction. During such communication, humanoid robots require body behaviors that are synchronized with speech, affectively expressive, and suitable for real-time execution. However, existing co-speech methods are primarily developed for digital humans and lack joint support for affective control and low-latency continuous generation on physical embodiments. To bridge this gap, we present SocialHumanoid, a system for expressive humanoid behavior via one-step co-speech motion generation. Given response speech and a specified affective condition, SocialHumanoid generates each full-body motion window in a single forward pass and connects successive windows through motion-history conditioning. The generated human motion is further converted online into embodiment-compatible robot references and tracked by a whole-body controller for physical execution. To provide explicit supervision for affective body expression, we further introduce AffectMoCap, a 4-hour dataset captured from two professional actors, containing synchronized speech, body motion, fine-grained hand motion, and emotion annotations. On BEAT2, SocialHumanoid achieves the best FGD among the compared generation methods, competitive speech-motion synchrony, and approximately $6\\times$ faster inference than GestureLSM under the same protocol. Perceptual evaluations further show that training with AffectMoCap improves affect recognition from generated body motion, while real-robot experiments demonstrate continuous affect-conditioned behavior and stable long-horizon execution. Our project page is https://rex0191.github.io/SocialHumanoid/.",
    "published": "2026-09-27T07:24:33Z",
    "updated": "2026-09-27T07:24:33Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33311"
  },
  {
    "id": "2609.33306",
    "title": "LoopTrack: A Simple Baseline for Parameter-Efficient Transformer Tracking",
    "authors": [
      "Liang Peng",
      "Chenxiao Li",
      "Libo Zhang",
      "Xingping Dong",
      "Heng Fan"
    ],
    "abstract": "Current Transformer-based tracking methods typically stack multiple Transformer blocks with separate parameters to model interactions between the target template and the search region for target localization. These trackers often incur substantial parameter overhead from stacked blocks, making their deployment on resource-limited devices difficult. To address this, we propose a parameter-efficient Transformer tracking framework, dubbed LoopTrack, which repeatedly applies a set of Transformer blocks with shared parameters to interact features in a looped architecture for tracking, significantly reducing the number of parameters. To further exploit target cues, we present two lightweight designs, including target-aware looping (TAL) and gated target memory (GTM). The former applies intermediate target information generated by one loop to guide feature interaction in the subsequent loop, enabling progressive feature refinement, while the latter maintains a compact memory across frames, which is incorporated into the loop process to provide long-term information to the tracker, mitigating temporal drift in tracking. Compared to existing Transformer trackers, LoopTrack enables multiple rounds of feature interaction with fewer model parameters, making it resource-friendly for deployment. In extensive experiments on multiple datasets, LoopTrack shows a favorable accuracy-parameter trade-off. In particular, our LoopTrack$_{\\rm One}$, with a single shared Transformer block, achieves 66.2\\% SUC score on LaSOT with only 3.4M parameters, while LoopTrack$_{\\rm Three}$, using three shared blocks, achieves 69.3\\% SUC score with 6.4M parameters, surpassing existing parameter-efficient tracking methods with comparable or larger model size. With LoopTrack, we aim to establish a simple yet strong baseline for parameter-efficient Transformer tracking. Our code and models will be released.",
    "published": "2026-09-27T07:17:44Z",
    "updated": "2026-09-27T07:17:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33306"
  },
  {
    "id": "2609.33304",
    "title": "Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents",
    "authors": [
      "Fuyao Zhang",
      "Xuan Wang",
      "Zherui Li",
      "Jiaming Zhang",
      "Longtao Huang",
      "Wei Yang Bryan Lim"
    ],
    "abstract": "Personal Graphical User Interface (GUI) agents rely on interaction history to infer what a user wants from ambiguous instructions and to anticipate recurring routines. Existing approaches retrieve task-relevant history and append it to the policy's context, implicitly assuming that experience relevant to a task remains useful for each decision within it. We find that this help is largely spent at the first decision: retrieved history strongly improves the opening step of an episode, yet provides little sustained benefit over the remaining 90\\% of steps, and offers weak guidance on whether a proactive suggestion is warranted. A relevant record may tell the agent where to begin, but not which past action applies to the current screen or whether a routine is due now. The underlying issue is that relevance does not imply applicability}: relevance is determined at the task level, whereas applicability depends on the situation at decision time. We therefore recast personalization as experience activation and introduce ExpActivator, a training-free framework that activates only the experience applicable to the current situation. During execution, ExpActivator matches each new screen to historical states in the frozen GUI backbone's latent space and supplies the corresponding action as a reference. Before execution, it activates a recurring intent only when the current time and scenario provide sufficient support, and otherwise abstains. Across four GUI backbones, ExpActivator improves within-trajectory step success by 28\\% on average, achieves the best personalized execution on every backbone while using about one-fifth as many history tokens, and reaches approximately 2.3$\\times$ the Matthews correlation coefficient of the strongest proactive baseline. Experience pays where it is activated, not where it is appended.",
    "published": "2026-09-27T07:15:57Z",
    "updated": "2026-09-27T07:15:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33304"
  },
  {
    "id": "2609.33303",
    "title": "BITS: Rethinking Fair and Comprehensive Evaluation for Irregular Time Series Forecasting",
    "authors": [
      "Kangjia Yan",
      "Linfeng Wang",
      "Tianen Shen",
      "Xiangfei Qiu",
      "Ruitong Zhang",
      "Hao Miao",
      "Jilin Hu",
      "Chenjuan Guo",
      "Bin Yang",
      "Christian S. Jensen"
    ],
    "abstract": "Despite recent progress in irregular time series forecasting, the field still lacks a unified benchmark for fair and comprehensive evaluation. Existing evaluations are often conducted on a limited set of datasets with inconsistent experimental protocols and predominantly error-based metrics, rendering it difficult to compare and assess methods fairly and comprehensively across diverse settings. To eliminate these limitations and accelerate progress, we propose BITS, a standardized, reproducible, and extensible benchmark for advancing research on irregular time series forecasting. BITS covers eleven datasets from nine domains with diverse irregularity characteristics, and it characterizes the datasets according to their missing rate, missing pattern complexity, sampling irregularity, and skewness. Further, it offers a unified pipeline for data preprocessing, model integration and evaluation, and reporting. It accommodates regular and irregular time series forecasting methods, including time series foundation models, under consistent settings, incorporating both error-based and non-error-based evaluation metrics. Findings include that method performance varies substantially across irregularity characteristics, with no single modeling strategy consistently dominating. We also find that using error-based or non-error-based metrics can yield different model rankings, highlighting the need for multi-dimensional evaluation. The code can be found at https://anonymous.4open.science/r/BITS-8F2E/.",
    "published": "2026-09-27T07:11:29Z",
    "updated": "2026-09-27T07:11:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33303"
  },
  {
    "id": "2609.33301",
    "title": "Hesitation-Aware On-Policy Distillation for Diffusion Language Models",
    "authors": [
      "Jianguo Huang",
      "Lipeng Wan",
      "Yanchen Deng",
      "Bo An"
    ],
    "abstract": "Diffusion large language models (dLLMs) generate text by iterative unmasking. At each denoising step, a dLLM proposes a token at every masked position, but the decoder commits only a confident subset of these proposals. Trace-based on-policy distillation (TOPD) builds on this process by matching the student to a stronger teacher, yet only at the committed positions. We argue that this discards much of the useful signal, which resides in the uncommitted proposals, where the student has made a prediction but is not yet confident enough to commit it. We call these proposals hesitations. In our pilot study on an SDAR-4B student, hesitations make up only 24% of supervisable state-position pairs but carry 66% of the teacher-student divergence. To exploit this signal, we propose Hesitation-Aware On-Policy Distillation (HOPD), which extends teacher distribution matching to every masked position of each denoising step. Because hesitations are not equally informative, we further allocate supervision using hindsight from the completed trajectory, placing more weight on positions whose proposal was later disagreed with the final token and on blocks where first-step proposals rarely survive. Since both models already produce distributions at all masked positions, HOPD requires no additional forward passes over TOPD. The only extra cost is evaluating the loss at more positions. With SDAR-1.7B and SDAR-4B students distilled from TraDo-8B-Instruct, HOPD achieves the best average score among the evaluated methods on five math and coding benchmarks, under both static and dynamic decoding and at both scales. It also speeds up decoding. On SDAR-4B, the HOPD student hesitates less and commits 11% more tokens per denoising step than TOPD, while reaching higher accuracy.",
    "published": "2026-09-27T07:09:59Z",
    "updated": "2026-09-27T07:09:59Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33301"
  },
  {
    "id": "2609.33299",
    "title": "AquaWAM: A Dynamics-aware World Action Model for Underwater Embodied Agents",
    "authors": [
      "Cunhao Zhu",
      "Yifeng Wang",
      "Dongliang Xu",
      "Yunzhong Hou",
      "Yue Yao",
      "Chi Harold Liu"
    ],
    "abstract": "World Action Models (WAMs) are becoming increasingly important and useful for embodied intelligence, as they enable robots to anticipate the consequences of candidate actions before interacting with the physical environment. However, underwater robots are usually subject to passive dynamics, such as inertia, buoyancy, hydrodynamic drag, and persistent drift, which can continue to affect the vehicle even after an action is completed. Existing WAMs, which primarily predict action-conditioned visual observations, are not explicitly designed to capture such passive motion dynamics. In this paper, we present AquaWAM, the first World Action Model designed for underwater embodied agents. Instead of predicting future images, AquaWAM models both action-conditioned and passive physical dynamics, including the thruster dead band, the inertial glide that outlasts each command, and ambient currents. Specifically, it senses through the DVL, IMU, pressure sensor and joint encoders, while cameras supply only semantics for understanding goals and target pose. By modeling compact navigation states rather than high-dimensional visual observations, AquaWAM substantially reduces the model size and computational cost compared with conventional WAMs. Experimentally, AquaWAM achieves a 72.6% task success rate across 20 underwater tasks on the USIM benchmark, outperforming existing methods while making action decisions 2.7x faster than U0 on an NVIDIA Jetson AGX Orin. Our model also remains effective when some onboard sensor measurements are unavailable. For example, without DVL velocity measurements, our method still achieves a 61.6% success rate, compared with 39.4% for U0.",
    "published": "2026-09-27T07:09:26Z",
    "updated": "2026-09-29T04:32:33Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33299"
  },
  {
    "id": "2609.33297",
    "title": "The Error You See Is Not the Error You Made: Progression-aware Reasoning Origin for Reasoning Error Localization",
    "authors": [
      "Yiguo Wang",
      "Ziyuan Yang",
      "Yi Zou",
      "Dan Lin",
      "Rongsheng Li",
      "Yi Zhang"
    ],
    "abstract": "Verifying multi-step LLM reasoning requires more than determining whether a trace is correct: a useful verifier should identify where the reasoning first goes wrong. However, existing holistic methods provide little positional evidence, while forward sequential verification often treats the first rejected step as the error source. Under error propagation, this assumption can fail, since an earlier mistake may remain locally plausible and become observable only through its downstream consequences. We therefore rethink reasoning verification as a progression-aware error-source localization problem: rather than asking only where a reasoning trace first appears inconsistent, we ask which earlier step best explains how that inconsistency emerges along the trajectory. Based on this view, we propose Progression-aware Reasoning Origin (PRO), a training-free framework for first-error localization. PRO jointly models incoming support from the preceding context and outgoing compatibility with subsequent reasoning, selectively refines regions where these signals disagree, and finally performs detector-conditioned source attribution with intervention-based evidence to distinguish the true error origin from its propagated manifestations. We further formalize the gap between forward rejection and structural exposure, showing why incoming-side evidence alone is insufficient for reliable localization under error propagation. Experiments across open-form, medical, and structured reasoning tasks demonstrate consistent improvements over strong verification baselines, supporting progression-aware source attribution as a more faithful formulation of reasoning verification.",
    "published": "2026-09-27T07:03:59Z",
    "updated": "2026-09-27T07:03:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33297"
  },
  {
    "id": "2609.33295",
    "title": "TraceDance: An Automated System for Building Agent Behavior Benchmarks from Real-World Agent Deployment Traces",
    "authors": [
      "Dehai Min",
      "Daoan Zhang",
      "Yiming Zeng",
      "Huayi Zhang",
      "Ziyi Chen",
      "Yan Zhang",
      "Qinbo Bai",
      "Mengyuan Chao",
      "Jing Ning",
      "Qiyue Hua",
      "Huiyi Chen",
      "Hanrong Zhang",
      "Henry Peng Zou",
      "Jie Yang",
      "Wei Xu",
      "Philip S. Yu"
    ],
    "abstract": "An agent can complete a task while exhibiting undesirable behavior during execution. Developers need tests for the specific behaviors encountered in deployment, beyond fixed benchmark suites. We present TraceDance, an agent system that constructs targeted benchmarks from deployment traces for user-specified undesirable behaviors. For efficient construction, Anchor-and-Confirm combines programmable retrieval with candidate-level confirmation by a Flash large language model (LLM), while the Anchor Synthesis Loop generates and revises specifications for custom behaviors. The benchmarks use decision-point continuation to evaluate an LLM's next turn at a recorded decision point with a behavior-specific rubric, without a reference answer or environment replay. Experiments in coding and general tool use draw on 252,557 sessions and produce 107 benchmarks with 4,125 instances, fulfilling 95.3% of build-target requests. Both human annotators confirm the requested behavior in 84% of sampled instances, and the automated grader's agreement with human pass/fail judgments is comparable to that between the annotators. Nine frontier LLMs achieve a mean pass rate of only 26.7%, showing that they still struggle to respond appropriately at the evaluated decision points. Analysis across behavior-specific benchmarks further reveals weaknesses in how current LLMs behave as agents. By turning deployment problems into targeted benchmarks, TraceDance could serve as a key component of the recursive self-improvement (RSI) loop.",
    "published": "2026-09-27T06:58:39Z",
    "updated": "2026-09-27T06:58:39Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.33295"
  },
  {
    "id": "2609.33289",
    "title": "Learning to Sell: Reinforcement Learning for Strategic Large Language Model Agents in Multi-Product Markets",
    "authors": [
      "Shuze Daniel Liu",
      "Claire Chen",
      "Jiuqi Wang",
      "Thorsten Joachims"
    ],
    "abstract": "Autonomous large language model (LLM) agents operating in multi-product markets must make sequential decisions under information asymmetry and resource constraints. We develop a machine learning approach for training such agents to act effectively as sellers in a multi-item bargaining environment, where a seller concurrently negotiates a catalog of substitutable assets across a pool of independent buyers. Buyers hold private, heterogeneous valuations across products, and each can purchase at most one item. Facing limits on total communication turns, the seller must dynamically match buyers with the most profitable products considering their private valuations, while strategically allocating its limited interaction budget toward combinations of greater potential value. We formalize this problem as a Partially Observable Markov Decision Process using a structured, four-part message protocol that maps natural language into a parsable and regulated decision space. Using this formalization, we design a post-training method using Reinforcement Learning from Verifiable Rewards (RLVR). To evaluate this framework, we construct a multidimensional metric suite that quantifies constraint adherence, seller surplus extraction, and allocation quality. Our trained seller agent learns to match limited inventory to buyers more effectively, matching or outperforming trillion-parameter frontier models in both seller surplus extraction and buyer-product allocation quality. Finally, these learned strategies generalize robustly to unseen market structures, correlated valuation distributions, and price ranges not encountered during training.",
    "published": "2026-09-27T06:51:56Z",
    "updated": "2026-09-27T06:51:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33289"
  },
  {
    "id": "2609.33288",
    "title": "Informative Viewpoint Selection for Episodic-Memory Embodied Question Answering using Omnidirectional Images",
    "authors": [
      "Kaname Kitamura",
      "Asako Kanezaki"
    ],
    "abstract": "Embodied Question Answering (EQA) requires agents to answer natural language questions about surrounding environments from visual observations. In this work, we focus on open-vocabulary episodic-memory EQA (EM-EQA), where an agent answers free-form questions using recorded observation histories. Omnidirectional images are promising for this task, as they provide wide field-of-view observations that can capture surrounding context without requiring explicit camera rotations. However, omnidirectional images introduce two challenges for EQA: (i) equirectangular projection causes severe geometric distortion that degrades vision-language model (VLM) recognition accuracy, and (ii) feeding equirectangular images directly into VLMs introduces excessive irrelevant background information, reducing answer accuracy and increasing the visual-token burden. To address these challenges, we propose a viewpoint selection method for EM-EQA using omnidirectional images. Our method converts equirectangular observations into perspective views via cubemap projection, estimates question-conditioned relevance with fine-tuned BLIP-2, and selects informative and diverse viewpoints through diversity-aware greedy selection. Experiments on the Habitat-Matterport 3D (HM3D) subset of OpenEQA show that our method achieves state-of-the-art model performance among the reported model results with equirectangular observations. Moreover, after removing rotation views, which reduces observation frames by 65.5%, our method largely maintains its answer accuracy.",
    "published": "2026-09-27T06:50:25Z",
    "updated": "2026-09-27T06:50:25Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.33288"
  },
  {
    "id": "2609.33287",
    "title": "Feedback Makes Perfect: A Closed-Loop Framework for NL-to-STL Translation",
    "authors": [
      "Bowen Ye",
      "Xiang Yin"
    ],
    "abstract": "Signal Temporal Logic (STL) enables rigorous verification and control of cyber-physical systems, but writing correct specifications requires expertise that most requirement holders lack. Large language models can translate natural-language (NL) requirements into STL, yet stronger translators alone approach an accuracy ceiling. We argue that this ceiling stems from how the task is posed: one-shot, open-loop translation is somewhat ill-defined. Natural language is ambiguous, and, more fundamentally, what a person writes may not always be what they intend, so the target specification is not fully contained in the input text. We therefore reformulate NL-to-STL translation as a closed-loop feedback process. Each generated formula is translated back into natural language for the user to check, and natural-language corrections drive revision until the user accepts the specification. Users never read or write formal syntax. This framework rests on an asymmetry familiar from feedback control theory. The forward path, from ambiguous language to formal logic, is hard and error-prone. The feedback path, from structured STL back to language, can be made highly precise, and a precise feedback path lets an imprecise forward path achieve precise closed-loop behavior. Experiments on 500 expert-authored requirements and seven LLMs support this view. Back-translated explanations agree with expert judgments in 99.5\\% of cases. Closed-loop refinement raises strong models from about 89\\% open-loop accuracy to 98.0--99.2\\%, and yields gains of over 30 percentage points for weaker models (e.g., 17.6\\%$\\rightarrow$48.0\\%). Ablations show these gains come from the semantic content of the feedback rather than from repeated attempts. An expert audit and a 280-session user study further confirm the reliability of the loop. We also identify a capability threshold above which feedback no longer helps.",
    "published": "2026-09-27T06:46:39Z",
    "updated": "2026-09-27T06:46:39Z",
    "categories": [
      "cs.AI",
      "cs.RO",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.33287"
  },
  {
    "id": "2609.33286",
    "title": "InfoEdit: Probing Global Layout Reasoning in Infographic Editing",
    "authors": [
      "Cheng Yang",
      "Chufan Shi",
      "Huijuan Wang",
      "Bo Shui",
      "Yaokang Wu",
      "Muzi Tao",
      "Yibo Yan",
      "Xuezhe Ma",
      "Taylor Berg-Kirkpatrick"
    ],
    "abstract": "Multimodal foundation models edit natural photographs at production quality, yet the same models struggle with structured visual content such as infographics. Unlike photographs, infographics encode information through logical relations; editing one element often requires surrounding elements to be adapted. We refer to this global layout reasoning capability as reflow. Existing image-editing benchmarks neither provide a dedicated setting for structured visual content nor evaluate the reflow capability. We introduce InfoEdit, a novel benchmark of 1,000 infographics across eight logical-relation families, paired with 4,000 editing instructions across four editing tasks, and a reflow-aware evaluation protocol. Across eight frontier editors, only GPT-Image-2 clears 60% average success rate; most models fall below 7%, and no editor exceeds 36% on the Swap-Block task even with perfect target localization. We further show that code-level editing can match the strongest pixel-level editor, revealing complementary strengths across tasks. InfoEdit identifies reflow as a central challenge in structured visual content editing and provides a diagnostic benchmark to facilitate future progress.",
    "published": "2026-09-27T06:45:45Z",
    "updated": "2026-09-27T06:45:45Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.33286"
  },
  {
    "id": "2609.32255",
    "title": "Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents",
    "authors": [
      "Zhaofeng Li",
      "Xuan Zhang",
      "Xiaokui Xiao",
      "Yang Deng"
    ],
    "abstract": "Tool-using LLM agents must decide not only whether additional information is needed, but also which source can resolve the uncertainty. Existing proactive approaches often specialize in either user clarification or environment verification, without explicitly determining the appropriate information source for each decision. We formulate this problem as uncertainty routing among ACT, CLARIFY, and VERIFY, and propose PROUR, a proactive uncertainty routing framework. PROUR decomposes action uncertainty into disagreement across plausible user-goal interpretations, which signals user-side ambiguity, and the entropy remaining within each interpretation, which signals missing world-side evidence. To acquire information from the routed source, a query generator is trained with a mode-conditioned information-gain reward, targeting user-goal identification under CLARIFY and next-action identification under VERIFY. On $τ$-bench, PROUR achieves 28.17% average success rate across retail and airline, outperforming the strongest prior method by 4.57% while using 2.17 fewer interaction steps. The learned policy further generalizes to stronger task agents and transactional domains of $τ^3$-bench without retraining, demonstrating the benefit of source-aligned uncertainty resolution for proactive agents.",
    "published": "2026-09-26T05:25:50Z",
    "updated": "2026-09-26T05:25:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32255"
  },
  {
    "id": "2609.32254",
    "title": "Why Directly Learning Periodic Trajectories Can Fail",
    "authors": [
      "Kaixin Zheng",
      "Anita Layton"
    ],
    "abstract": "Operator learning of periodic solutions requires deciding how simulation data should be recorded and represented. A natural choice is to integrate long enough for transients to decay and record a window wide enough to contain at least one full period of all trajectories. We find that these conservative choices can make the resulting trajectories difficult to learn, even when the underlying periodic orbits vary regularly with system parameters. Unaligned trajectories generalize poorly even within the training distribution. Phase alignment substantially improves in-distribution generalization, but models trained on a fixed physical-time window still have large errors on trajectories with periods outside the training range. We explain both failures through a common mechanism: frequency differences accumulate over time, so the target phase varies rapidly with the parameters. Predictors that cannot track this variation incur a population MSE floor in both settings; for fixed window prediction, we also derive a per-sample lower bound. We then study one of the simplest representations that escape these floors: learning an aligned, normalized waveform and its period separately. We establish regularity of the decoupled targets under ODE assumptions and show experimentally that this approach avoids both failures in ODE systems and a PDE case study.",
    "published": "2026-09-26T05:19:56Z",
    "updated": "2026-09-26T05:19:56Z",
    "categories": [
      "cs.AI",
      "math.CA",
      "math.NA"
    ],
    "url": "https://arxiv.org/abs/2609.32254"
  },
  {
    "id": "2609.32253",
    "title": "DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control",
    "authors": [
      "Yaxing Lyu",
      "Jingyi Li",
      "Mingkun Xu",
      "Yujie Wu"
    ],
    "abstract": "Vision-language-action (VLA) models have achieved strong performance in language-conditioned manipulation, yet success under nominal evaluation does not necessarily translate into robust closed-loop behavior when executed actions are transiently corrupted. We introduce DS-VLA, a dendritic-inspired action architecture that incorporates dendritic spiking dynamics into VLA control to address this limitation. Specifically, to enable modularized feature processing and temporal information integration, DS-VLA equips action neurons with multiple sparsely connected dendritic branches, each featuring heterogeneous, learned decay factors. Furthermore, to suppress unreliable state updates while preserving task-relevant historical information, we introduce a neuron-wise inhibitory gate that adaptively regulates the admission of new multimodal evidence into dendritic states prior to somatic dynamics. We evaluate DS-VLA on all four LIBERO suites under both nominal rollouts and a unified closed-loop action-perturbation protocol. DS-VLA achieves a 91.6\\% average nominal success rate and an 87.35\\% average perturbed success rate, retaining 95.4\\% of its nominal performance. Under the same reported perturbation setting, OpenVLA-OFT, FAST, $π_0$, and GR00T achieve 39.45\\%, 23.90\\%, 28.55\\%, and 30.75\\%, respectively. A controlled ablation isolates the contribution of neuron-wise shared inhibition, while analyses of neural dynamics and post-perturbation trajectories associate robust performance with selective evidence suppression and effective behavioral recovery. Together, these results demonstrate that integrating brain-inspired computational mechanisms offers a promising architectural prior for robust embodied intelligence beyond merely scaling vision-language backbones or generative action decoders.",
    "published": "2026-09-26T05:17:16Z",
    "updated": "2026-09-26T05:17:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.32253"
  },
  {
    "id": "2609.32250",
    "title": "RoboSTAR: Next-Scale Autoregressive Sign Language Translation for Humanoid Robots",
    "authors": [
      "Yujia Zeng",
      "Chensheng Peng",
      "Yuxin Chen",
      "Alex Shao",
      "Nathan Jew",
      "Masayoshi Tomizuka"
    ],
    "abstract": "Sign-language interpretation in public communication relies on qualified professional interpreters and can be difficult to scale, motivating robotic signing as a complementary accessibility interface. We present RoBoSTAR, a text-conditioned sign language production (SLP) framework for generating human-centric sign motion that can be retargeted for robotic execution, with speech supported optionally through an external ASR front end. Conventional autoregressive approaches flatten motion into a single full-resolution token sequence, forcing long-range and local dependencies to be modeled at a uniform temporal granularity. RoBoSTAR instead combines part-wise Finite Scalar Quantization with next-scale autoregression, generating motion over progressively finer temporal resolutions while predicting synchronized body and hand tokens in parallel within each step. This coarse-to-fine formulation provides compact long-range context before progressively refining motion details, while self-conditioning and context corruption improve robustness to cross-scale prediction errors. The generated motion is subsequently retargeted for physical humanoid execution. Extensive qualitative and quantitative evaluations are conducted to demonstrate the effectiveness of RoBoSTAR.",
    "published": "2026-09-26T05:12:00Z",
    "updated": "2026-09-26T05:12:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32250"
  },
  {
    "id": "2609.32247",
    "title": "Certifying Interventional Agreement Among Observationally Equivalent Causal Models",
    "authors": [
      "Sourena Khanzadeh",
      "Daniel Platnick",
      "Marjan Alirezaie",
      "Hossein Rahnama"
    ],
    "abstract": "Observationally equivalent causal models can still disagree about what happens under intervention, because interventions create inputs that never occur in observational data. We introduce Interventional Separation Selection (ISS), which repeatedly queries the true system with an admissible intervention on which the surviving candidate models disagree, discards the candidates the outcome contradicts, and stops once no intervention within a cost bound separates the survivors. If the true system is among the candidates, this stopping condition certifies that every survivor agrees with it on every admissible intervention within the bound, a guarantee that no observational learner can give, however much data it sees. The stopping condition depends only on the survivors, so it can be checked without knowing the truth. For continuous variables the candidates form an infinite version space, and mixed-integer linear programs decide the stopping condition exactly over all of it, with agreement holding up to a tolerance. On a three-digit colored MNIST causal abstraction task in which ink hue tracks digit size, plain convolutional networks trained on examples reach zero held-out error, yet disagree with shape-based labels on 26% of single-digit edits, as often as hue-based labels do. Auditing the causal abstractions of networks observed only on such images, ISS certifies what each network perceives with 13.6 interventions per image on average, and each certificate, checked against every admissible intervention, holds whenever the network's true abstraction is among the candidates. When a network bypasses a unit that every candidate abstraction relies on, certificates covering interventions on that unit can be silently void, and twenty random validation interventions refute 69% of them.",
    "published": "2026-09-26T05:07:57Z",
    "updated": "2026-09-26T05:07:57Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32247"
  },
  {
    "id": "2609.32245",
    "title": "AutoPDEBench: Benchmarking LLM Auto-Research for Neural PDE Solver Design",
    "authors": [
      "Ruoyan Li",
      "Wei Wang",
      "Yizhou Sun"
    ],
    "abstract": "Partial differential equations (PDEs) are essential for modeling complex physical systems, and neural solvers have recently emerged as powerful data-driven tools for numerically solving them. However, existing neural solvers struggle with domain-specific challenges, such as varying parameters and high-speed flows, necessitating specialized architectures. Manually designing these specialized solver architectures is a highly iterative, time-consuming process requiring deep expertise, creating a significant bottleneck in scientific discovery. We propose leveraging autonomous AI research agents to automate the synthesis of specialized solvers. To support this, we introduce AutoPDEBench, a benchmark dedicated to LLM-driven automated research for PDE solver design. The benchmark includes 25 challenging datasets featuring both novel and actively studied physical scenarios. We evaluate a suite of general-purpose models (transformer, ROM, and graph-based) alongside a multi-agent instantiation of the iterative automated research pipeline, which serves as an agentic baseline. Empirical results show that the iterative automated research system significantly outperforms the general-purpose neural solver baselines. Our findings demonstrate the viability of using AI agents to automatically design neural solvers for complex physical systems. AutoPDEBench provides a foundational testbed to accelerate agent-driven scientific discovery in physics and engineering.",
    "published": "2026-09-26T05:02:34Z",
    "updated": "2026-09-26T05:02:34Z",
    "categories": [
      "cs.CE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32245"
  },
  {
    "id": "2609.32244",
    "title": "Two-Stage Multi-View Gait Recognition with a Re-Embedding Network",
    "authors": [
      "Long Hoang Le",
      "Trung Thanh Ngo"
    ],
    "abstract": "Gait recognition always remains challenging due to severe overfitting and the rigid view constraints common in single-stage approaches. We propose a two-stage framework, termed Translate-First-Then-Reason (TFTR), to address these issues. In the first stage, a shallow Siamese convolutional network with triplet loss maps Gait Energy Images (GEIs) into a 128-dimensional view-specific embedding space. In the second stage, these per-view embeddings are treated as tokens and processed by a 12-layer Transformer encoder, which re-projects them into a new space with improved cosine separability. This design enables flexible fusion of an arbitrary number of views at inference, overcoming the fixed-input limitations of prior methods. Trained on the OU-MVLP dataset (6,000 subjects) and evaluated on unseen CASIA-B across normal, bag-carrying, and coat-wearing conditions, our pipeline achieves 96.91\\% single-view and 99.49\\% three-view accuracy on OU-MVLP, and attains 100\\% accuracy on CASIA-B with three views.",
    "published": "2026-09-26T05:02:13Z",
    "updated": "2026-09-26T05:02:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32244"
  },
  {
    "id": "2609.32241",
    "title": "Residual Transferability in Neural Image Watermarking",
    "authors": [
      "Ziping Dong",
      "Qi Li",
      "Xinchao Wang"
    ],
    "abstract": "Neural image watermarks can be forged by extracting watermark-bearing residuals from released images and transferring them to unrelated content. While prior work has demonstrated this vulnerability, what makes these residuals transferable remains poorly understood. We formalize this vulnerability with \\textbf{residual transferability (RT)}, a metric that quantifies how well watermark evidence remains decodable after transfer across unrelated images. Through comparative analyses and controlled interventions, we find that common training-side variations do not account for the large RT differences across watermarking systems; instead, architectural design plays a central role. By contrasting high- and low-RT systems and validating their architectural differences through controlled interventions, we identify two mechanisms that strengthen the dependence of watermark evidence on the cover image, thereby suppressing the residual transferability. These findings provide concrete design guidance for developing more forgery-resistant watermarking architectures. Complementarily, for existing watermarking systems where architectural redesign is impractical, we introduce \\textbf{CoverLock}, a plug-and-play strategy for existing watermarking systems that strengthens such image dependence without architectural redesign. Across representative watermarking systems exhibiting high residual transferability, CoverLock achieves a more favorable security--robustness trade-off than both traditional handcrafted defenses and learned classifier-based defenses.",
    "published": "2026-09-26T04:59:33Z",
    "updated": "2026-09-26T04:59:33Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32241"
  },
  {
    "id": "2609.32239",
    "title": "Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation",
    "authors": [
      "Biprodip Pal",
      "Kaushik Roy",
      "Yanming Zhu",
      "Brendan Tidd",
      "Alan Wee-Chung Liew",
      "Peyman Moghadam"
    ],
    "abstract": "Federated learning offers a natural way for multiple robots to jointly improve manipulation policies without requiring centralized access to training demonstrations. However, non-IID task and environment distributions can induce representation drift and mutually incompatible robot-policy updates, making naive parameter aggregation destructive. We present FedDRMan, a federated subspace-guided distillation framework for heterogeneous robot manipulation. At each communication round, the server model provides a frozen teacher for local behavior cloning, while low-rank multimodal subspace and action-distribution distillation preserve globally useful representation geometry and policy behavior. To address heterogeneous aggregation, FedDRMan groups clients by update compatibility and maintains a persistent model for each cluster. The server then spectrally rebalances each compatible aggregate to mitigate attenuation of weaker task-relevant robot-policy update directions. Extensive experiments on LIBERO across diverse non-IID settings, heterogeneity levels, client participation variation, together with ablations and aggregation analyses, show that FedDRMan substantially improves knowledge transfer and consistently outperforms strong federated baselines achieving a peak mean success rate of 80.7%, 11.6 percentage points above the strongest evaluated federated baseline.",
    "published": "2026-09-26T04:56:49Z",
    "updated": "2026-09-26T04:56:49Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32239"
  },
  {
    "id": "2609.32231",
    "title": "Skeletons in Flow: Graph Structured Flow Matching for Human Motion Prediction",
    "authors": [
      "Yixuan Wang",
      "Brandon C. Fallin",
      "Warren E. Dixon"
    ],
    "abstract": "Human motion prediction requires diverse future trajectories that remain consistent with observed motion and the articulated physical structure of the body. Skeletal constraints restrict individual poses, while coordinated motion depends on spatial interactions (between connected joints) and temporal interactions (between time instants). To facilitate human motion prediction in light of these constraints and interactions, we introduce Graph Structured Flow Matching (GSFM), which transports the complete future skeletal trajectory through a single conditional velocity field. The trajectory produces a spatiotemporal skeleton graph, and spatial and temporal attention couple its evolution according to skeletal relations and physical time offsets. Bone directions lie on unit spheres relative to a root joint, and tangent evolution preserves input bone lengths throughout generation. We train a learned velocity field through conditional flow matching along geodesic paths connecting random trajectories centered on the last-observed pose to recorded future trajectories. Experiments on the Archive of Motion capture As Surface Shapes (AMASS) dataset evaluate prediction accuracy, diversity calibration, and motion statistics. We demonstrate the contributions of spatial and temporal message passing in the developed architecture through an ablation study. GSFM models trained on AMASS also perform competitively on the Human3.6M skeleton without parameter updates or retraining, demonstrating applicability to an unseen skeletal structure.",
    "published": "2026-09-26T04:45:53Z",
    "updated": "2026-09-26T04:45:53Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.32231"
  },
  {
    "id": "2609.32226",
    "title": "Toward Agentic Optical Networks: A Vision of LLM Agent-Driven Autonomous Lifecycle Management",
    "authors": [
      "Yao Zhang",
      "Shengnan Li",
      "Yuchen Song",
      "Yidi Wang",
      "Yue Pang",
      "Wenbin Chen",
      "Xiaotian Jiang",
      "Xiao Luo",
      "Meixia Fu",
      "Min Zhang",
      "Yongli Zhao",
      "Shanguo Huang",
      "Alan Pak Tao Lau",
      "Danshi Wang"
    ],
    "abstract": "As optical networks continue to expand in scale, complexity, and service diversity, the implementation of automation has become essential for ensuring agility, efficiency, and reliability in lifecycle management (LCM) of optical networks. Large language model (LLM) Agent, distinguished by its progressively sophisticated capabilities in logical reasoning, adaptive decision-making, complex problem solving, and multi-task orchestration, presents great opportunities to advance network automation beyond traditional AI techniques. Nevertheless, the application of LLM Agent in optical networks remains in its early exploratory stage, challenged by the lack of multi-task coordination, high computational demands, data dependence, and reliability concerns. In this paper, we envision a conceptual roadmap toward Agentic Optical Networks (AONs) by integrating LLM Agents throughout the LCM with high-level autonomy. First, we trace the evolution from manual operations to AI-empowered frameworks and distill key technologies in Agent, providing actionable insights into leveraging its strengths for addressing practical network automation challenges. A core contribution of this paper is the proposal of a hierarchical multi-Agent framework, which is specifically developed to manage every phase in LCM of AONs, including planning, deployment, operation, maintenance, upgrade, and decommission, thereby enabling more cohesive and comprehensive automation throughout the entire lifecycle. In addition, future directions and underlying challenges are also discussed at the intersection of LLM and optical networks. By aligning the LLM Agent with the specialized requirements of AONs, this work aims to explore the potential for the evolution of optical networks moving from task-level semi-automatic execution toward lifecycle-level full autonomy.",
    "published": "2026-09-26T04:41:31Z",
    "updated": "2026-09-26T04:41:31Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32226"
  },
  {
    "id": "2609.32225",
    "title": "LaMET-Agent: An Agent Framework for Large-Momentum Effective Theory Analysis",
    "authors": [
      "Jinchen He",
      "Xiangyu Jiang",
      "Fei Yao",
      "Dian-Jun Zhao"
    ],
    "abstract": "Large-momentum effective theory (LaMET) provides a first-principles framework for computing the $x$ dependence of light-cone parton distributions from lattice QCD. Over the past decade, theoretical and numerical advances have established a mature multi-stage workflow for systematic calculation of parton physics, although its implementation still requires expert judgment and substantial repeated effort. We present lamet-agent, an open-source large language model (LLM) agent framework that organizes this workflow into an executable, reproducible, and inspectable analysis pipeline. The present release supports collinear quark distributions and implements correlator analysis, renormalization, Fourier transformation, perturbative matching, continuum, physical pion mass and infinite-momentum extrapolations, and automated result review. We validate it on four end-to-end analyses: pion parton distribution functions in the gauge-invariant and Coulomb-gauge formulations, and pion and kaon distribution amplitudes, obtaining results consistent with the published calculations. Extensions to transverse-momentum-dependent distributions, generalized transverse-momentum-dependent distributions, and gluonic distribution functions are planned for subsequent releases.",
    "published": "2026-09-26T04:35:11Z",
    "updated": "2026-09-26T04:35:11Z",
    "categories": [
      "hep-lat",
      "cs.AI",
      "hep-ph"
    ],
    "url": "https://arxiv.org/abs/2609.32225"
  },
  {
    "id": "2609.30855",
    "title": "MDSkin-Net: Multi-Task Skin Lesion Analysis Driven by Pattern Analysis Priors and Spatial Alignment Regularization",
    "authors": [
      "Yijian Li",
      "Saad Bedros",
      "Paul Bigliardi",
      "Mei Bigliardi Qi",
      "Vassilios Morellas",
      "Nikolaos Papanikolopoulos"
    ],
    "abstract": "Reliable skin lesion segmentation and classification are central to dermoscopic computer-aided diagnosis. Existing multi-task frameworks couple the two tasks architecturally without clinical knowledge, while knowledge-injecting approaches rely on the macroscopic ABCD rule, which was not designed for dermoscopy. Dermoscopic diagnosis is grounded in Pattern Analysis, a microscopic framework structured around dermoscopic features. We propose MDSkin-Net, which incorporates cue-level Pattern Analysis priors into a hybrid CNN-Transformer architecture. At its core is a Pattern Analysis-Guided Attention Module (PAGAM) comprising three priors motivated by distinct dermoscopic cues: an improved Efficient Channel Attention (iECA), a Multi-Scale Spatial Attention (MSSA), and a Biased Asymmetry Attention (BAA). We further introduce a multi-scale spatial alignment regularization (MSAR) that uses the segmentation ground-truth mask as hierarchical soft supervision, confining the classification head to lesion-localized evidence and coupling both task pathways through a shared spatial prior. Trained exclusively on the ISIC 2017 training split without external dermoscopy data, the MDSkin-Net ensemble transfers robustly under zero-shot evaluation, reaching a Dice Similarity Coefficient (DSC) of 92.38% and a melanoma AUC of 97.84%on PH2, and a DSC of 88.92% on the ISIC 2018 Task 1 test set. On the in-domain ISIC 2017 benchmark, the ensemble attains a mean Area Under the Curve (AUC) of 91.60% across the two classification tasks (melanoma and seborrheic keratosis vs. rest), and a DSC of 84.72% for segmentation. Classification remains competitive with baselines; in-domain segmentation trails single-task specialists, yet the proposed priors and alignment regularization yield representations that generalize consistently across cohorts of different scales.",
    "published": "2026-09-25T06:02:34Z",
    "updated": "2026-09-25T06:02:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30855"
  },
  {
    "id": "2609.30841",
    "title": "Why Jailbreaks Succeed in Diffusion Language Models: An Energy Landscape Analysis",
    "authors": [
      "Thong Bach",
      "Dung Nguyen",
      "Thao Minh Le",
      "Truyen Tran"
    ],
    "abstract": "Existing attacks and defenses for diffusion-based large language models (dLLMs) target specific vulnerabilities but lack a shared framework explaining why attacks succeed. We propose one by interpreting safety alignment as shaping the denoising energy landscape: a well-aligned model routes harmful queries toward safe outputs through an energy barrier that separates the two regions. Current jailbreak attacks reduce to two strategies for circumventing this barrier: obscuring the query's safety disposition at initialisation, or intervening mid-trajectory to force the denoising path across the energy barrier. From this perspective and the result that masked diffusion models minimise kinetic energy during denoising, we derive three complementary, training-free detection signals: a step-0 ratio that reads the initial safety disposition from the logit distribution before generation begins, and two trajectory-velocity signals that track kinetic energy in complementary subspaces of the logit space. An attack must either reveal its intent at initialisation or expend kinetic energy to cross the barrier in at least one monitored subspace, so the three signals cover each other's blind spots in the energy budget by construction. Evaluation across three dense dLLMs (LLaDA-8B, LLaDA-1.5, Dream-7B) and a sparse mixture-of-experts dLLM (LLaDA-MoE-7B) confirms this complementarity. In stress tests of known attacks, every configuration that evades detection also fails to produce harmful content, suggesting that the detection and barrier-crossing thresholds are hard to separate.",
    "published": "2026-09-25T05:35:36Z",
    "updated": "2026-09-25T05:35:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30841"
  },
  {
    "id": "2609.30840",
    "title": "Aligning One-Step Generative Models with Reward-Weighted Transport Distillation",
    "authors": [
      "Austin Wang",
      "Ziheng Cheng",
      "Lexing Ying"
    ],
    "abstract": "One-step generators enable high-quality visual generation with a single network evaluation, but their post-training is difficult: general implicit generators provide neither tractable likelihoods nor denoising trajectories, and many rewards are non-differentiable. We introduce Reward-Weighted Transport Distillation (RWTD), a post-training method that requires only generated samples and scalar reward evaluations. Rather than aligning solely to the conventional reward-tilted reference distribution, RWTD constructs an adaptive target that mixes separately tilted current and reference distributions. The current component incorporates improvements discovered during training, while the reference component anchors the target to the pretrained generator. RWTD realizes this target through feature-space optimal transport and fixed-point regression. Theoretical analysis shows that the fixed-point distributions of RWTD interpolate between off-policy reward tilting of the reference and on-policy tilting of the current model, providing a principled approach to balancing reward adaptation with retention of prior knowledge. Empirically, RWTD substantially improves the GenEval score of the one-step SANA Sprint 1.6B backbone from 0.73 to 0.80, while separate preference alignment experiments demonstrate strong cross-reward generalization that yields balanced improvements and preservation of compositional capabilities.",
    "published": "2026-09-25T05:35:32Z",
    "updated": "2026-09-25T05:35:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30840"
  },
  {
    "id": "2609.30837",
    "title": "MOPD-Router: Rethinking Teacher Routing in Multi-Teacher On-Policy Distillation",
    "authors": [
      "Tianze Xu",
      "Yanzhao Zheng",
      "Zhentao Zhang",
      "Yuanqiang Yu",
      "Chao Ma",
      "Jihuai Zhu",
      "Lelun Wu",
      "Lyumanshan Ye",
      "Pengfei Liu",
      "Baohua Dong",
      "Hangcheng Zhu",
      "Ruohui Huang",
      "Gang Yu"
    ],
    "abstract": "Multi-teacher on-policy distillation (MOPD) integrates specialized capabilities into a single student, but existing practice typically hard-routes each prompt to a domain-matched teacher for the entire rollout. This dependence on prompt-level domain labels restricts using unlabeled training mixtures and leaves complementary signals from other teachers unused. We introduce MOPD-Router, a framework that routes supervision over the full teacher pool at each token, without domain labels or training a separate routing model. Its plug-in interface supports different metrics for selecting and weighting teacher-specific OPD signals. Within this interface, we propose ExpertAlign, which scores each teacher by whether its correction to the student at the current token expresses the specialization that teacher acquired during post-training, and compare it against two reference metrics built on teacher confidence (Entropy) and teacher-student discrepancy (Novelty). Experiments on unlabeled and domain-labeled training mixtures under strong-to-weak and same-size distillation scenarios show that ExpertAlign achieves the strongest overall performance in all four settings. On unlabeled data, it improves the overall score by 5.88 (+12.3%) points over Mean aggregation; on domain-labeled data, it outperforms standard MOPD by 3.95 (+7.8%) points without using available domain labels. These results demonstrate token-level routing can exploit cross-domain complementary supervision, and reduce exclusive reliance on prompt-level domain assignment. Code is available at: https://github.com/TURLEing/MOPD-Router.",
    "published": "2026-09-25T05:32:03Z",
    "updated": "2026-09-28T12:07:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30837"
  },
  {
    "id": "2609.30836",
    "title": "PTC-Decoder: Towards Intelligent SLMs on Offline Resource-Constrained Edge Devices",
    "authors": [
      "Minghui Yu",
      "Ke Mu",
      "Gang Wu"
    ],
    "abstract": "Deploying small language models (SLMs) on offline, resource-constrained edge devices such as remote sensing satellites presents a fundamental challenge: their limited reasoning capacity hinders reliable execution of multi-step agent tasks requiring complex tool orchestration. Existing plan-solve paradigms rely on prompt-based enforcement, which our experiments show SLMs almost entirely disregard: weak models fail to invoke the plan. We propose PTC-Decoder (Plan-Tool Constrained Decoder), a training-free, plug-and-play decoder framework that combines (1) a Plan-to-Act paradigm, which elevates planning to an atomic tool and forces its invocation at the first inference step, and (2) TC-Decoder, a deterministic finite automaton that imposes token-level hard constraints on tool names while preserving freedom over parameter generation, thereby retaining SLM reasoning capability. Evaluated on 200 real remote-sensing satellite tasks across 7 SLMs, PTC-Decoder yields a statistically significant mean overall score gain of +1.21 (p<0.01), 95% CI [+1.13, +1.29]), with consistent improvements across models and other datasets. An ablation study that removes TC-Decoder causes substantial performance degradation across all quality metrics without reducing computational cost, confirming TC-Decoder as the primary driver. PTC-Decoder thus offers a lightweight yet effective solution for improving step-level reliability, with final-answer accuracy remaining an open challenge. In essence, we enforce plan adherence by constraining the permissible output vocabulary during inference, without requiring retraining.",
    "published": "2026-09-25T05:30:35Z",
    "updated": "2026-09-25T05:30:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30836"
  },
  {
    "id": "2609.30832",
    "title": "Subject-Invariant Cross-Modal Decoding of Perceived Speech from Brain Recordings",
    "authors": [
      "Aoke Zhang",
      "Jing Chen"
    ],
    "abstract": "Perceived speech decoding based on non-invasive brain-computer interface (BCI) signals has been extensively studied in recent years. Research in this field primarily faces two challenges: extracting neural representations with rich spatiotemporal information and achieving cross-subject generalization. Although separate studies have proposed methods to cope with these issues, a unified approach that simultaneously tackles both challenges remains lacking. To fill this gap, we propose the Subject-Invariant Cross-Modal Perceived Speech Decoding (SICMD) method, which integrates functional magnetic resonance imaging (fMRI) and magnetoencephalography (MEG). We conduct comprehensive analyses of the fusion method, fusion position, encoder architecture, and model inputs. Our results demonstrate that the proposed method improves Top-1, Top-10, and Rankacc by more than 10.6%, 10.1%, and 1.7%, respectively, compared to baseline methods in cross-subject perceived speech decoding tasks, while reducing training costs by 88.8% and 60.5% compared to multi-subject and intra-subject decoding settings. Further visualization experiments also confirm the effectiveness of our approach.",
    "published": "2026-09-25T05:22:13Z",
    "updated": "2026-09-25T05:22:13Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2609.30832"
  },
  {
    "id": "2609.30831",
    "title": "CDBG: Causally Motivated Dual-Invariance Learning against Topological and Predictive Shifts in EEG Workload Recognition",
    "authors": [
      "Yuzhe Zhang",
      "Wenmin Zhou",
      "Chengxi Xie",
      "Kai He",
      "Jihong Wang",
      "Huan Liu",
      "Man Yao",
      "Daoqiang Zhang"
    ],
    "abstract": "Generalizing Electroencephalography (EEG)-based mental workload recognition to unseen subjects remains a formidable challenge due to severe inter-subject variability. While functional brain graphs effectively model distributed cognitive dynamics, their inherent subject-specificity induces two coupled distribution shifts: a class-conditional topological shift in the underlying functional connectivity, and a predictive mechanism shift in the learned representation-to-label mapping. Motivated by the subject-induced distribution shifts, we propose CDBG, a Causally motivated Dual-invariance learning framework for Brain Graphs. CDBG disentangles and mitigates these shifts via a two-stage rationale learning pipeline. First, it employs stochastic edge masking to extract sparse, workload-predictive graph rationales, regularized by workload-conditional Laplacian spectral alignment to enforce topological invariance across subjects. Second, it applies subject-wise Invariant Risk Minimization (IRM) to the graph representations, ensuring environment-wise risk stationarity. Extensive experiments on a self-built air traffic controller EEG cognitive workload dataset and multiple public datasets under a strict leave-one-subject-out protocol demonstrate that CDBG significantly outperforms state-of-the-art cross-subject and graph-based baselines, improving the Macro-F1 score by up to 4.23%, while simultaneously providing neurophysiologically interpretable functional rationales.",
    "published": "2026-09-25T05:22:06Z",
    "updated": "2026-09-25T05:22:06Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.30831"
  },
  {
    "id": "2609.30818",
    "title": "Evaluation Is All You Need for Multi-Modal Autonomous Driving",
    "authors": [
      "Zeyu He",
      "Shiqi Liu",
      "Ke Chen",
      "Yun Yan",
      "Jinzi Wu",
      "Dianqiao Lei",
      "Sirui Wang",
      "ShuRui Peng",
      "Tao Chen",
      "Zhuo Huang",
      "Yu Wu",
      "Yadong Shao",
      "Zhichao Li",
      "Ke Sun",
      "Yang Guan",
      "Keqiang Li",
      "Shengbo Eben Li"
    ],
    "abstract": "Multi-modal planning is promising for autonomous driving by representing multiple plausible behaviors in ambiguous and long-tail scenarios. Existing methods mainly focus on improving trajectory multi-modality, enhancing trajectory representations, or reshaping the candidate distribution. Nevertheless, we identify a pronounced generation-evaluation asymmetry in multi-modal planning: despite strong oracle performance, existing planners often fail to reliably select the best available candidate, leaving substantial planning potential unrealized. To address this challenge, we propose iDriveVLA, a multi-modal planning framework that improves the candidate trajectory space while enabling more reliable and context-aware trajectory evaluation. Specifically, iDriveVLA introduces a unified trajectory evaluator comprising a Safety-aware Scorer for quality and risk estimation, together with a VLM-guided Modulator for scene-adaptive criterion weighting. We further develop an oracle-aligned progressive training strategy consisting of candidate imitation pretraining, candidate space refinement, and semantic ranking alignment. On the public NAVSIM v1 leaderboard, iDriveVLA achieves a new state-of-the-art performance of 94.95 PDMS, surpassing the human-expert reference.",
    "published": "2026-09-25T04:56:15Z",
    "updated": "2026-09-25T04:56:15Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30818"
  },
  {
    "id": "2609.30813",
    "title": "A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory",
    "authors": [
      "Xiaoyang Li",
      "Yiqi Wang",
      "Chencheng Zhu",
      "KE XU",
      "Wencheng Yang",
      "Zequn Sun",
      "Pingan Song",
      "Yiqun Duan",
      "Taotao Cai"
    ],
    "abstract": "Evaluating claim admission in shared agent memory is challenging because repeated claims may be mistaken for independent evidence. An agent may copy or paraphrase a retrieved belief, while admitting a false claim exposes subsequent agents to it. To study this problem, we introduce the Correlated Promotion Benchmark (CPB), which evaluates whether candidate claims should be admitted to shared memory.CPB-Static constructs a frozen test split from publicly annotated sources with fixed gold actions. CPB-Live runs multi-agent teams over a shared store, records all writes and retrievals, and tracks source lineage defined by each scenario. A separate consumer answers from the store alone. We evaluate eight admission policies across four agent families. Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies. Once an uncontested false belief enters memory, the consumer asserts it in 0.97--0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative. These findings reveal the limitations of admission policies without access to source lineage.",
    "published": "2026-09-25T04:48:31Z",
    "updated": "2026-09-25T04:48:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30813"
  },
  {
    "id": "2609.30805",
    "title": "XPhysICS: Cross-Physical-Domain Threat Grounding for Industrial Control Systems Security",
    "authors": [
      "Sangshin Park",
      "Jainta Paul",
      "Lawrence Ponce",
      "Md Raihan Ahmed",
      "Mu Zhang",
      "Luis Garcia"
    ],
    "abstract": "Industrial control system (ICS) threats documented for one plant can express cyber-physical effects relevant to another, but semantic similarity alone does not establish whether those effects are structurally admissible or evaluable on a target. We present XPhysICS, a provenance-aware, target-conditioned method that separates analyst-guided source abstraction from deterministic grounding into target-specific validation slices. Given a fixed source abstraction, vocabulary and schema, and machine-validated target contract, XPhysICS evaluates candidate mappings using five eligibility criteria: role compatibility, implemented type compatibility, stage coherence, slice viability, and rule-surface applicability. Grounding acceptance, slice adequacy, dynamic realizability, consumer applicability, and consumer outcome remain distinct evidence layers. We evaluate 83 structured source-threat abstractions across water treatment, water distribution, hydro/water-energy, and chemical-process targets. Controlled target-side studies of SWaT-to-water-treatment and WADI-to-water-distribution groundings produce clean, nominal-confounded, and near-threshold consumer outcomes; nine Hydro/GRFICS cases extend bounded validation-slice execution. We also evaluate bounded predictive, state-aware, and phase-aware consumer lanes, the unmodified upstream GeCo implementation, and a paper-derived reproduction of a physics-guided search method over three frozen groundings. Results show that cross-domain ICS threat reuse requires traceable source semantics, explicit target-conditioned grounding criteria, and careful separation of subsequent target-side evidence.",
    "published": "2026-09-25T04:33:17Z",
    "updated": "2026-09-25T04:33:17Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30805"
  },
  {
    "id": "2609.30798",
    "title": "Evaluating Real-Time Voice Agents: From Component Quality to Grounded Outcomes",
    "authors": [
      "Shivam Negi",
      "Arpit Rawat",
      "Rashi Jain"
    ],
    "abstract": "Real-time voice agents have moved from research prototypes to production deployments, yet the literature describing them is fragmented across three communities that rarely cite one another: speech foundation modelling, turn-taking psycholinguistics, and agentic evaluation. Architecture papers report latency, turn-taking papers report prediction accuracy, and agentic benchmarks report task success, so no single number describes whether a deployed agent is actually good. We address that gap with three evidence-based claims, each traceable to a corpus of 38 primary sources organised into an application-centric taxonomy of six categories. First, architecture choice is a deployment constraint rather than a settled verdict: a 2026 enterprise tutorial reports that no fully self-hostable end-to-end system yet meets production constraints, while a chunked cascade independently reaches state-of-the-art duplex behaviour, showing duplex behaviour is separable from duplex architecture. Second, evaluation has shifted decisively from component quality toward grounded outcomes, with recent benchmarks verifying backend state rather than trusting what the agent claims to have done. Third, the dyadic assumption in most models and benchmarks is breaking down: multiparty turn-taking and multi-speaker reasoning benchmarks show that deciding when not to speak, and reasoning about who may be told what, are first-class capabilities two-participant framings cannot measure. For each source we state the problem it targets, its mechanism, and its reported evidence, alongside the search strategy, inclusion criteria, and a verification step that caught a misattributed arXiv identifier in circulation. We propose TRG (Timing-Recovery-Grounded), a reporting standard characterising an agent by timing, post-disruption recovery, and state-verified outcome together, with a conditional fourth axis for multiparty deployments.",
    "published": "2026-09-25T04:22:20Z",
    "updated": "2026-09-25T04:22:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30798"
  },
  {
    "id": "2609.30797",
    "title": "HasMem: Hard-Origin Adaptively Softened Memory for Long-Term LLM Agents",
    "authors": [
      "Zihong He",
      "Junxiao Shen",
      "Chen Liang",
      "Hai-Ning Liang"
    ],
    "abstract": "Text-based memory and context compression support reuse of past interactions. Resizing continuous memory changes the input to a frozen LLM, coupling capacity allocation with readout. We propose Hard-Origin Adaptively Softened Memory (HasMem). Frozen hard-prompt embeddings provide a verifiable initial state. A controller adjusts memory widths, a Writer re-encodes resized entries, and Reader and Global provide readout adaptation and cross-turn state. On all $535$ questions in a reconstruction probe derived from the Multi-Session Chat (MSC) development split, the main configuration achieves lexical F1 of $95.3$ ($+4.4$ percentage points) at $93.6\\%$ of the hard reference's framed memory positions. With approximately matched per-question target body budgets, six configurations at mean per-entry retention around $0.83$--$0.91$ exceed rule-based re-encoding by $8.0$--$23.6$ exact-match (EM) percentage points. With fixed model parameters and rule target width ratio $0.75$, Global's EM gain passes a user-level exact paired test with Bonferroni correction over eight comparisons. On all $500$ LongMemEval-S questions, local lexical F1 rises from the hard reference's $3.4$ to $8.9$, and answer negative log-likelihood (NLL) falls from $12.257$ to $5.274$. F1 gains accompany lower EM on both evaluations.",
    "published": "2026-09-25T04:22:05Z",
    "updated": "2026-09-25T04:22:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30797"
  },
  {
    "id": "2609.17527",
    "title": "Agentic Societies Need a Social Harness",
    "authors": [
      "Tapan Chugh",
      "Vidushi Singh",
      "Krish Jain",
      "Arvind Krishnamurthy",
      "Ratul Mahajan"
    ],
    "abstract": "An agentic society is a collection of AI agents that coordinate autonomously across trust boundaries, on behalf of different principals whose objectives may only partially align. We show experimentally that in agentic societies even honest, competent agents often fail to reach satisfactory outcomes with existing harnesses and messaging primitives, and that faulty or malicious agents can stall collaboration, influence outcomes, and pursue other harmful goals by exploiting vulnerabilities in communication (``speech''). We argue that agentic societies need a \\emph{social harness} for inter-agent interactions, in addition to each agent's \\emph{personal harness}, which manages its private context and communication with its principal. We propose a layered architecture for social harnesses which (i) prevents classes of failures outright, (ii) enables agents to detect invalid messages at runtime, and (iii) supports post-facto investigation and consequences, and highlight directions for future research to realize these capabilities.",
    "published": "2026-09-15T17:57:27Z",
    "updated": "2026-09-15T17:57:27Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2609.17527"
  },
  {
    "id": "2609.17523",
    "title": "ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents",
    "authors": [
      "Shuhan Xue",
      "Jianyuan Zhong",
      "Ziyuan Nan",
      "Wenbin Li",
      "Zhaochen Yu",
      "Jinchao Ding",
      "Qiang Gao",
      "Pengyu Zhan",
      "Yuntong Zhang",
      "Tian Cheng",
      "Zhenfei Yin",
      "Yingcheng Wu",
      "Ling Yang"
    ],
    "abstract": "We introduce and release ScienceBuddy, an interactive scientific research workspace that brings continually improving scientific agents into researchers' everyday workflows. ScienceBuddy supports researchers in carrying out scientific tasks while transforming their requests, feedback, and execution evidence into tasks and evaluation rubrics for continual learning. At its core is recursive-in-recursive self-improvement, a paradigm that couples harness evolution with model reinforcement learning: the inner recursion improves the harness with the model fixed, while the outer recursion trains the model under the improved harness. Harness evolution shapes training experience, and model learning creates new opportunities for harness adaptation. We present case studies of researcher interaction, harness refinement, and model learning, with the benchmark cases spanning four scientific task families. By releasing ScienceBuddy as a research product, we make this paradigm available to the scientific community and take a step toward discovery intelligence: scientific AI that advances through sustained collaboration with researchers and evolves alongside the research it supports. Website: http://science-buddy.io",
    "published": "2026-09-15T17:55:28Z",
    "updated": "2026-09-15T17:55:28Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17523"
  },
  {
    "id": "2609.17521",
    "title": "PhysStream: Streaming Physics-Grounded Video Generation with Structured Scene Memory and Fine-Grained Motion Control",
    "authors": [
      "Chuhao Chen",
      "Peter Wonka",
      "Chaoyang Wang",
      "Chen Wang",
      "Qiao Feng",
      "Sergey Tulyakov",
      "Lingjie Liu"
    ],
    "abstract": "Interactive control for video generation is moving from coarse prompts toward fine-grained, physically meaningful manipulation of dynamic scenes. Yet existing controllable methods either require the full control schedule before generation starts, or use pixel-space signals that dictate object positions rather than physical dynamics. To address these limitations, we propose PhysStream, an autoregressive model for physics-grounded image-to-video synthesis that incorporates structured scene memory---positional maps and object tracking maps derived online from previously generated frames---and supports fine-grained motion control via sparse velocity-increment signals that encode physical quantities, letting the model learn the underlying dynamics. We train our model in two stages: a bidirectional model is first finetuned with motion-control conditioning, then a causal autoregressive model is trained with additional structured scene memory, further improving physical consistency. PhysStream enables interactive, mid-generation control over multi-object tabletop rigid-body scenes---a capability not supported by prior methods---reducing motion distribution distance (FVMD) by 33% and trajectory error by 12% over the strongest baselines on synthetic benchmarks, and is preferred by human evaluators in over 85% of in-the-wild comparisons. Please check our website for more details: https://czzzzh.github.io/PhysStream",
    "published": "2026-09-15T17:55:13Z",
    "updated": "2026-09-15T17:55:13Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.17521"
  },
  {
    "id": "2609.17516",
    "title": "When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control",
    "authors": [
      "Ali Şenol"
    ],
    "abstract": "Large language models can produce fluent answers when their factual support is weak. This paper introduces Chain-of-Self-Questioning (CoSQ), a prompt-only framework that makes answer commitment conditional on an explicit assessment of the information required to answer a question. We evaluate three CoSQ variants under seventeen conditions on the 817-item TruthfulQA multiple-choice validation set using eleven open-weight and hosted model families. In the final balanced-option protocol, Grounded-CoSQ at τ=0.90 reduces the mean unconditional wrong-commitment rate from 13.1% under chain-of-thought prompting to 8.9%, a 32.1% relative reduction, while increasing answered accuracy from 86.9% to 89.7% and answering 87.6% of questions. Both improvements hold for all eleven models and at every evaluated threshold. Critical-CoSQ and Adaptive-CoSQ provide neighboring operating points with 88.6% and 86.5% coverage, respectively, while remaining more reliable than the baseline. A secondary Natural Questions Short-Answer evaluation provides convergent open-form evidence. These findings show that self-assessment can support explicit, tunable answer-or-abstain decisions when an unsupported commitment is more costly than referral or review.",
    "published": "2026-09-15T17:52:24Z",
    "updated": "2026-09-15T17:52:24Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17516"
  },
  {
    "id": "2609.17509",
    "title": "LACE: Layer-Wise Compression for Dynamic Frame Rate Codecs",
    "authors": [
      "Thanapat Trachu",
      "Samuele Cornell",
      "William Chen",
      "Shinji Watanabe"
    ],
    "abstract": "Neural audio codecs are a key component in speech language modeling. However, their high frame rates lead to long sequence lengths, increasing computational costs. Dynamic frame rate codecs mitigate this by reducing the effective frame rate using a compression step to merge multiple frames together. However, most prior methods either operate on single-codebook codecs or apply a single compression step before multi-layer quantization. This forces all quantization layers to share the same segmentation boundaries, despite the residual embeddings at different quantization layers exhibiting different rates of change over time. We propose LACE (Layer-Adaptive Codec Encoding), a dynamic frame rate codec that applies an independent compression step at each quantization layer, enabling layer-specific segmentation boundaries. To use LACE tokens in downstream text-to-speech (TTS), we further introduce union alignment and boundary anchor mechanisms to make durations consistent across layers while preserving compression benefits. Experiments on LibriTTS show that LACE offers a better rate-quality tradeoff than prior dynamic frame rate methods on the reconstruction task and improves TTS inference efficiency while maintaining competitive synthesis quality. Our code is released as part of the ESPnet3 codec recipe.",
    "published": "2026-09-15T17:46:51Z",
    "updated": "2026-09-15T17:46:51Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17509"
  },
  {
    "id": "2609.17499",
    "title": "ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation",
    "authors": [
      "Vicky Feliren",
      "A. Taufiq Asyhari",
      "Muhamad Risqi U. Saputra"
    ],
    "abstract": "Uncertainty estimation for Vision-Language-Navigation (VLN) models is a critical task since it can help identify ambiguous and unreliable predictions, enabling agents to make safer navigation decisions. As one of the most advanced uncertainty estimation frameworks, conformal prediction (CP) offers a promising approach for uncertainty estimation in VLN. However, given that VLN agent requires a sequence of steps, standard calibration in conformal prediction fails to provide coverage guarantee it promises over a dependent, variable-length VLN episode. To this end, we propose Episode-Normalized Conformal Prediction (ENCP), which rescales a nonconformity score by the policy's residual confidence and calibrates one maximum score per episode. Under exchangeable calibration and test episodes, this construction covers the ground truth at every step with probability at least $1 - α$, while allowing dependence among steps within an episode. Across four VLN policies and three nonconformity scores on R2R and REVERIE dataset, ENCP meets all reported empirical step-coverage targets on the seen-to-unseen evaluation. These results demonstrate that ENCP can provide model-agnostic uncertainty estimates, which might be useful for determining when a VLN agent should defer to a more capable predictor, including human assistance.",
    "published": "2026-09-15T17:42:15Z",
    "updated": "2026-09-15T17:42:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.17499"
  },
  {
    "id": "2609.17496",
    "title": "Verifiable Social Reasoning for LLM Assistants",
    "authors": [
      "Amir Taubenfeld",
      "Zorik Gekhman",
      "Avigail Grinstein-Dabush",
      "Itay Laish",
      "Ariel Goldstein",
      "Marian Croak",
      "Avinatan Hassidim",
      "Yossi Matias",
      "Amir Feder"
    ],
    "abstract": "LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii) social properties, such as others' intentions, typically lack verifiable ground truth. To address these challenges, we introduce Fuse, a multi-agent simulation framework for studying user-mediated social reasoning. In Fuse, a target agent with a hidden motive interacts with other agents including one representing the user, who then consults the evaluated assistant to infer the target's motive, providing verifiable ground truth by construction. Simulation faithfulness is validated through a human study with 24k annotations. We apply Fuse to 12 LLMs and demonstrate its analytical utility by systematically isolating key factors, showing that (i) user mediation compounds the inherent difficulty of social reasoning; (ii) LLMs exhibit systematic sensitivity to biased user framing; (iii) models can require more details than humans need to reach a correct prediction; and (iv) longer conversations do not always improve performance despite providing opportunities for clarifying questions. We open-source Fuse and a dataset with 21k examples.",
    "published": "2026-09-15T17:37:29Z",
    "updated": "2026-09-15T17:37:29Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17496"
  },
  {
    "id": "2609.17488",
    "title": "LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence",
    "authors": [
      "Xingxuan Zhang",
      "Gang Ren",
      "Hao Yuan",
      "Hao Zou",
      "Hongze Tan",
      "Hui Wang",
      "Jianhao Song",
      "Jiansheng Li",
      "Jiayao Zhang",
      "Jinghan Zhang",
      "Kaifang Li",
      "Lang Mo",
      "Li Mao",
      "Mingchao Hao",
      "Nuo Xu",
      "Rui Ding",
      "Ruiji Zhang",
      "Shuyang Li",
      "Siyu Mei",
      "Tianyang Zhang",
      "Weiyang Mu",
      "Yancheng Dong",
      "Yongxian Wei",
      "Yuan Xue",
      "Yuanrui Wang",
      "Yue He",
      "Zijia Yang",
      "Ziyun Li",
      "Dongzhe Li",
      "Fuqiang Wang",
      "Jiandong Liu",
      "Jiawei Chen",
      "Jiaxin Du",
      "Kaijie Cheng",
      "Kehan Li",
      "Lei Sun",
      "Linjun Zhou",
      "Ningbo Dai",
      "Qi Wang",
      "Renzhe Xu",
      "Shaoxing Du",
      "Shumeng Yang",
      "Wang Lu",
      "Wenjing Chu",
      "Xiannan Huang",
      "Xiaoyu Lin",
      "Xing Ai",
      "Xinyan Han",
      "Xuanyue Li",
      "Xuanyue Su",
      "Xukun Zhang",
      "Yan Lu",
      "Yaxin Zhang",
      "Yi Qin",
      "Yifei Huang",
      "Yihan Xu",
      "Yongle Lv",
      "Yuanyuan Jiang",
      "Yushan Han",
      "Peng Cui"
    ],
    "abstract": "We introduce LimiX-2, a new model in the LimiX family, developed through model and data scaling guided by our previously established scaling laws. LimiX-2 adopts the Contextual Mechanism Networks (CMNs) paradigm and is pretrained with Context-Conditional Masked Modeling (CCMM). CMNs shifts the organizing principle of in-context learning from target-centric prediction to mechanism-oriented joint modeling. Rather than centering the network on the $p(y \\mid x, D_{\\mathrm{context}})$ objective of conventional tabular PFNs, it is designed around learning $p(x, y \\mid D_{\\mathrm{context}})$, a context-dependent representation of the joint structure underlying data generation. Pretraining uses synthetic datasets generated by structural causal models (SCMs) spanning diverse graph structures, functional mechanisms, and observation processes. Evaluations on TabArena, TALENT, and BCCO show that LimiX-2 outperforms current dataset-specific models and tabular foundation models. Beyond predictive performance, the CMN paradigm also promotes causal awareness in LimiX-2: its feature attention encodes direct causal relationships, enabling accurate causal skeleton recovery.",
    "published": "2026-09-15T17:30:02Z",
    "updated": "2026-09-15T17:30:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17488"
  },
  {
    "id": "2609.17485",
    "title": "Quick-View Takeaways: How Does Title Framing Influences Pattern Identification in Line Charts?",
    "authors": [
      "Jasmine Lim",
      "Tapendra Pandey",
      "Arran Zeyu Wang",
      "Ghulam Jilani Quadri"
    ],
    "abstract": "Visual data communication in digital media is increasingly characterized by short attention spans and snapshot-based viewing, often employing line charts to convey trends and patterns. Among all visual elements, titles are crucial ones that can shape how viewers interpret visual information and form chart takeaways. In this study, we examine how title characteristics, particularly title word count and intended message, influence people's pattern identification in single-class line charts. Participants viewed 50 line charts collected from online news media and identified the pattern they perceived. Our results demonstrate that both title word count and intended message significantly influence viewers' pattern identification. Our findings highlight the importance of title design in shaping chart takeaways and effective visualization communication.",
    "published": "2026-09-15T17:26:12Z",
    "updated": "2026-09-15T17:26:12Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17485"
  },
  {
    "id": "2609.17479",
    "title": "Det-LIME: Detector-Aware, Multi-Instance Local Interpretable Model-Agnostic Explanations for Automated Marine Mammal Detection",
    "authors": [
      "Jiayi Zhou",
      "David W. Johnston",
      "Brinnae Bent"
    ],
    "abstract": "Despite the rapid uptake of black-box object detectors in marine mammal research and monitoring, explainability techniques are rarely integrated into conservation workflows. Furthermore, most classification-oriented explainability tools are ill-suited to detection tasks involving imagery of social organisms or those with colonial life histories, as they ignore multiple detections within a scene and produce single-instance outputs that blur evidence across individuals. These methods also generate low-resolution, often biologically irrelevant visuals, limiting their utility for debugging, targeted data augmentation, and refined data collection. We proposed Det-LIME, a detector-aware, multi-instance adaptation of Local Interpretable Model-Agnostic Explanations (LIME) that produced instance-specific, box-aligned explanations by combining per-detection weighting, a proximity kernel that emphasizes regions near each box, and Intersection-over-Union-based matching to track the same instance across perturbations. We evaluated Det-LIME on aerial drone imagery for harbor seal detection, with an additional seabird case study to assess generality, and compared it with vanilla LIME, Stabilized LIME, Deterministic LIME, and gradient-based attribution methods. Using the Attribution Ratio and Max Saliency Hit Rate metrics, we showed that Det-LIME consistently improved multi-instance attribution. In practice, these higher-resolution, instance-aware explanations provide insight into model outputs and support post-processing, debugging, and actionable improvements in modeling and data collection or augmentation.",
    "published": "2026-09-15T17:20:16Z",
    "updated": "2026-09-15T17:20:16Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17479"
  },
  {
    "id": "2609.17475",
    "title": "JustFit: 200K-Token LLM Serving on a 24 GiB Laptop with Just-in-Time State Management",
    "authors": [
      "Yuhua Chen"
    ],
    "abstract": "Capable open-weight models make local coding and reasoning attractive, but their context and execution state strain laptop memory. We present JustFit, an MLX-based inference runtime that combines KVExec for compressed KV execution, PhaseSwap for component residency, and StateTrans for state-preserving serving transitions. These mechanisms fuse reconstruction and coordinate just-in-time materialization and release, independently of model-weight quantization. In full-execution capacity tests on a 24 GiB M4 Pro MacBook running Qwen3.8-27B MXFP4, three independent runs complete 196,608 input and 16,384 output tokens, increasing completed single-request context from the mlx-vlm baseline's 30,720 positions to 212,992 (6.93x); a separate two-request run retains 229,376 positions in aggregate. In separate performance tests, a 32K-input, 64-output probe reaches 19.11 tokens/s, and a repeated 32K+6K workload has a median peak process footprint of 16,374 MiB. The integrated runtime answers 29 of 30 AIME 2026 problems correctly, showing how compact state and lifetime-aware execution expand local serving capacity while supporting extended generated reasoning.",
    "published": "2026-09-15T17:15:48Z",
    "updated": "2026-09-15T17:15:48Z",
    "categories": [
      "cs.AI",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2609.17475"
  },
  {
    "id": "2609.17474",
    "title": "Coupled Calibration and Learning: Mitigating Teacher Bias in LLM Distillation without Target-Domain Reward Feedback",
    "authors": [
      "Haichen Hu",
      "Yuheng Zhang",
      "David Simchi-Levi"
    ],
    "abstract": "Large language model (LLM) distillation aims to transfer the capabilities of a powerful teacher to a smaller student. Direct imitation, however, can also transfer the teacher's systematic bias and errors. This challenge is particularly pronounced under covariate shift, when the teacher's reliability on target questions is uncertain and target-domain reward feedback is unavailable. We propose Coupled Calibration and Learning (CCL), an LLM distillation algorithm that couples teacher calibration with student updates through token-level branching, using reward feedback only on source questions. Each iteration calibrates the teacher using source feedback and then uses the calibrated teacher to train the student on target questions. The updated student, in turn, informs subsequent calibration. In an autoregressive policy framework, we prove that the output student's expected average Kullback-Leibler divergence to the oracle student converges to zero at a polynomial rate in the number of iterations. The oracle maximizes the true reference-regularized target reward within the student class, which need not represent the unrestricted optimal policy. Our analysis quantifies the progress of projected student gradient updates while controlling the error in teacher calibration. We further establish a separation from regularized direct matching: its error relative to the oracle student can remain bounded away from zero even when the teacher achieves higher regularized target reward than every student policy. These results demonstrate that LLM distillation can overcome persistent teacher bias and recover the optimal student through coupled calibration and learning, without target-domain reward feedback.",
    "published": "2026-09-15T17:15:40Z",
    "updated": "2026-09-15T17:15:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.ST",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.17474"
  },
  {
    "id": "2609.17355",
    "title": "Evaluating Ambient Clinical Scribes in India: The Need for Multilingual Real-World Clinical Conversation Data",
    "authors": [
      "Siddharth D Jaiswal",
      "Krithi S",
      "Ashish Makani",
      "Suvrankar Datta",
      "Sunayana Sitaram",
      "Mohit Jain"
    ],
    "abstract": "Ambient clinical scribes (ACS) are being rapidly deployed at scale across Global South healthcare settings, aiming to reduce clinician documentation time, especially in overburdened environments like India. These ACS are primarily developed or distilled from models built and validated on Global North speech, languages and consultation styles. Indian clinical encounters are brief, triadic, multilingual, code-mixed with low-resource languages, and conducted in highly resource-constrained, noisy settings -- increasing the likelihood of ASR and note-generation errors manyfold. We posit an urgent need to develop a standardized evaluation infrastructure to assess whether these systems are safe, reliable, and well-suited to the Indian healthcare setting. We substantiate our claims through a mixed-methods study -- a systematic survey of publicly available patient-clinician conversational datasets, a quantitative comparison of these datasets against conversational and cultural markers drawn from the Indian clinical-communication literature, and semi-structured interviews with five organizations building and deploying ACS in India and Africa. Our survey shows that there are no publicly available, large-scale, real-world benchmarks for ACS in India, with existing datasets being overwhelmingly synthetic. We note that the available Global North datasets diverge significantly from the expected conversational and cultural structures of Indian encounters. Finally, our interviews reveal that deploying organizations have each built proprietary, incomparable evaluation pipelines, creating a fragmented ecosystem with no independent and reliable basis for procurement. We call for the development of a publicly shared, real-world, multilingual benchmark for ACS evaluation and outline the properties and policies such a benchmark would require.",
    "published": "2026-09-15T15:52:15Z",
    "updated": "2026-09-15T15:52:15Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17355"
  },
  {
    "id": "2609.17346",
    "title": "Where Should a Document Live: Context, Representations, or Parameters?",
    "authors": [
      "Nathanaël Carraz Rakotonirina",
      "Momchil Hardalov",
      "Gonzalo Iglesias",
      "Adrià de Gispert"
    ],
    "abstract": "To answer questions outside of their pre-training data, large language models (LLMs) need access to new information, which can be presented in the context window as documents, encoded into the model's parameters, or injected as latent representations. However, each of these methods comes with different efficiency, cost, and performance trade-offs, with no single winner. We present a controlled comparison of representation-based (KV-cache based) and parametric (fine-tuning-based) adaptation methods on five knowledge-intensive benchmarks. We show that in the oracle setting, Cartridges (KV) are the most accurate injection method at nearly every storage budget, outperforming parametric methods by 10 points. Compaction (KV) matches Cartridges only at low compression rates, lagging behind the parametric methods by 10 points at rates higher than $50\\times$. In the more realistic multi-document retrieval scenario, Cartridges are the only method that matches in-context learning (ICL), leading the parametric methods by 29 points and Compaction by 15 points. Nonetheless, Cartridges are also the only method, besides full fine-tuning and large MLP adapters, that suffers from catastrophic forgetting, i.e., a 6% performance degradation on control benchmarks, with 13% in coding.",
    "published": "2026-09-15T15:47:02Z",
    "updated": "2026-09-15T15:47:02Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17346"
  },
  {
    "id": "2609.17335",
    "title": "LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education",
    "authors": [
      "Danxuan Liang",
      "Chun Yin Li",
      "Zheng Wei",
      "Xian Xu",
      "Meng Xia",
      "Huamin Qu",
      "Wai Tong"
    ],
    "abstract": "Stage lighting education requires instructors to bridge abstract concepts, technical operations, and learner-understandable representations. While Virtual Reality (VR) removes physical constraints, existing systems provide limited support for live instruction. We present LumiNote, an LLM-assisted VR system that transforms spoken pedagogical intent into instructor-reviewable spatial annotations, executable demonstrations, and linguistic support. In an exploratory study with 3 instructors and 24 students, we examined how instructors incorporated LumiNote into familiar lighting topics and how students received the resulting representations. We found LLM assistance most valuable for expressive, under-specified goals, but requiring greater expert intervention for fixture-specific or spatial configuration requests. Instructors engaged with generated suggestions as a controllable refinement process, shifting effort from manual setup toward pedagogical expression. However, representations that externalized expert reasoning did not always align with novice comprehension. These findings characterize LLM-assisted VR instruction as a domain-grounded mediation process among expert expression, executable operations, and learner-facing representations.",
    "published": "2026-09-15T15:38:49Z",
    "updated": "2026-09-15T15:38:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17335"
  },
  {
    "id": "2609.15855",
    "title": "K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations",
    "authors": [
      "Laura M. Vowels",
      "Matthew J. Vowels",
      "Shivali Sharma",
      "Apoorv Jha",
      "Rehnuma Choudhury",
      "Wasseem El Sarraj",
      "Rachel Francois-Walcott",
      "Aruba Hussain",
      "Sarah Ingram",
      "Angela Loulopoulou",
      "Adva Segal",
      "Elena Volkova"
    ],
    "abstract": "People increasingly use large language models (LLMs) for mental health support, yet their safety in evolving, high-risk conversations remains poorly characterised. We developed K-Bench, a clinician-calibrated, protected benchmark evaluating 125 model configurations representing 33 base models from 14 providers across a fixed cohort of 200 multi-turn vignettes involving suicide, self-harm, domestic violence, substance misuse, and no-risk presentations. Synthetic patient conversations showed substantial distributional overlap with real human-AI conversations. A frozen GPT-4o judge achieved 94.2% exact agreement with clinician consensus across 6,751 eligible item comparisons from 151 clinician-rated transcripts. Leading models combined strong supportive conversation with combined-risk scores above 95, whereas risk exploration exposed substantial variation among lower-performing configurations. Therapeutic prompting produced configuration-specific gains concentrated among weaker models, while elevated reasoning produced no average improvement. K-Bench combines broader clinical coverage and configuration-scale comparison with a continuously updated public leaderboard whose operational test materials are protected from direct optimisation. The leaderboard is available at www.k-bench.ai.",
    "published": "2026-09-14T16:49:23Z",
    "updated": "2026-09-15T07:30:50Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15855"
  },
  {
    "id": "2609.15849",
    "title": "Before You Poll with LLMs: A Deliberative Diagnostic Framework",
    "authors": [
      "Ahmed Wali",
      "Hassaan Tayyab"
    ],
    "abstract": "Can LLMs reason through new information like humans, or do they merely retrieve cached opinions? This is critical for silicon sampling, where LLM personas simulate public opinion at scale. Current evaluations test only whether personas hold the right opinions -- a static snapshot. But opinion research increasingly depends on dynamic fidelity: whether personas update beliefs in response to new arguments, as humans do during deliberation. No existing benchmark tests this. We introduce the Deliberative Polling Diagnostic Framework, which compares human and LLM belief shifts after identical informational interventions. Grounded in deliberative polling, it surfaces failures invisible to static evaluation: models that produce plausible partisan opinions can still misrepresent how those opinions change. Applying the framework to five frontier models using data from America in One Room (526 personas, 72 questions), we find that every model fails, each in a unique manner. GPT-5.1 exhibits reversal: its personas become more hostile toward the opposing party after balanced information, while humans become less so. This reversal is selective (80% on outgroup vs. 26% on policy questions) and symmetric across partisan identities. Gemini 2.0 Flash, Claude Sonnet 4.5, and Llama 3.3 70B exhibit overshoot, shifting correctly but at 5-7x human magnitude. DeepSeek V3 exhibits rigidity with near-zero change. Targeted ablations reveal that policy content triggers these failures and that they are identity-specific: GPT-5.1 reverses on outgroup questions but overshoots on ingroup; Gemini shows the inverse. We term this signature self-sycophancy: conformity to the model's internal stereotype of the persona rather than reasoning from the information provided. Our framework offers a concrete protocol: run the deliberative diagnostic before trusting LLM personas to mimic revised beliefs.",
    "published": "2026-09-14T16:41:48Z",
    "updated": "2026-09-14T16:41:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.15849"
  },
  {
    "id": "2609.15847",
    "title": "Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence",
    "authors": [
      "Thai T. Vu",
      "John Le",
      "Tu N. Nguyen",
      "Jun Shen",
      "Quang Vinh Duong",
      "Ha Nguyen"
    ],
    "abstract": "This paper proposes FREDI (Fair Resource Allocation for Edge Dual-Threshold Inference), a secure wireless edge-intelligence framework for event-triggered inference in a cooperative user equipment (UE)--edge server (ES)--cloud system. Each UE performs early-exit convolutional neural network (CNN) screening using dual confidence thresholds, while critical events are securely offloaded to an edge server for detailed classification. We formulate a proportionally-fair utility maximization problem that jointly optimizes UE--ES association, wireless and processing resources, and confidence thresholds. FREDI decomposes the problem into proportional-fair resource allocation and dual-threshold inference optimization. We prove that the detected-critical event set is set-monotone non-increasing in both thresholds, and exploit the finite empirical confidence domain for exact threshold optimization. An empirical resource--utility response envelope yields a computable global suboptimality bound and a sufficient condition for global optimality. By pre-eliminating infeasible UE--ES pairs and exactly projecting out bandwidth and transmit-power variables, the resource-allocation subproblem is reduced to a mixed-integer exponential-cone program solvable to the certified global optimality within a prescribed gap. Numerical results with early-exit MobileNetV2 and ShuffleNetV2 demonstrate near-perfect UE fairness with aggregate utility close to a Sum-Utility benchmark, reveal security-induced resource fragmentation, and demonstrate the Stage-A scalability from 6 to 144 UEs with median solving time below 0.1~s in the tested configurations.",
    "published": "2026-09-14T16:41:15Z",
    "updated": "2026-09-14T16:41:15Z",
    "categories": [
      "cs.NI",
      "cs.CV",
      "cs.ET",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15847"
  },
  {
    "id": "2609.15838",
    "title": "Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression",
    "authors": [
      "Huicheng Zhang",
      "Xiyao Feng",
      "Ze-Tong Li",
      "Chengkai Zhu",
      "Xiao Shi",
      "Xiwei Pan",
      "Jinguo Liu",
      "Ge Bai",
      "Xin Wang"
    ],
    "abstract": "Per-matrix singular value decomposition (SVD) truncation is Eckart-Young optimal in the whitened Frobenius norm, but errors from independently compressed matrices compound through the block's nonlinear forward pass. Inspired in part by hierarchical variational optimization in quantum many-body methods, we introduce a three-level chain that widens optimization scope from individual matrices to Transformer blocks to the full model: whitened SVD~(L1), block-level joint optimization~(L2), and end-to-end language-modeling loss refinement~(L3), all from 256 calibration sequences, with no instruction or recovery data. On LLaMA-7B at 60% compression, the chain reduces WikiText-2 perplexity from 42.1 to 19.1 to 11.4. The block-level stage acts as a regularizer: skipping it worsens Penn Treebank (PTB) perplexity by 24 points, a gap that additional end-to-end training did not close in our experiments. Perplexity gains hold across 20-80% compression, five architectures up to 13B parameters, and both in-distribution and out-of-distribution benchmarks, though the cross-architecture rows use architecture-specific configurations and the ratio sweep was not run under one common protocol. With more calibration data, skipping the block-level stage becomes competitive, revealing an offline compute--data trade-off. We therefore claim improvements only in perplexity and compression fidelity; downstream accuracy remains well below the dense model.",
    "published": "2026-09-14T16:36:46Z",
    "updated": "2026-09-14T16:36:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15838"
  },
  {
    "id": "2609.15834",
    "title": "TRACE: Two-Stage Detector-Response Estimation With Angular Cosine Expansion for Ring Artifact Correction in Photon-Counting CT",
    "authors": [
      "Jigang Duan",
      "Heran Wang",
      "Ligen Shi",
      "Zheng Sun",
      "Ping Yang",
      "Xing Zhao"
    ],
    "abstract": "Detector response nonuniformity introduces systematic projection errors and ring artifacts in photon-counting detector computed tomography (PCD-CT). In measured PCD-CT data, residual stripe amplitudes vary slowly with projection angle, which fixed-bias models cannot adequately capture. We propose TRACE, a two-stage unsupervised sinogram decomposition method for estimating and correcting these response-related errors. TRACE represents stripes as a fixed bias plus low-order discrete cosine transform (DCT) components, using a small number of coefficients to describe angular variations at each detector element. A learnable analysis--synthesis architecture represents the ideal projections, while two-stage optimization separates them from fixed and then dynamic stripes. An angular-gradient soft orthogonality constraint suppresses correlated variations within the shared DCT gradient subspace, reducing the leakage of object structures into the artifact estimate. All parameters are optimized directly on the measured sinogram without paired training data. Experiments on measured QRM mouse phantom and porcine trotter data show that TRACE suppresses ring artifacts and improves image uniformity while preserving edge sharpness, soft-tissue texture, and trabecular detail.",
    "published": "2026-09-14T16:31:32Z",
    "updated": "2026-09-14T16:31:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15834"
  },
  {
    "id": "2609.15833",
    "title": "Integrating Multi-view Multi-light Surface Reconstruction into Cultural Heritage Workflows",
    "authors": [
      "Baptiste Brument",
      "Robin Bruneau",
      "Benjamin Coupry",
      "Vincent Demoulin",
      "Jean Mélou",
      "Antoine Laurent",
      "Fabien Castan",
      "Jean-Denis Durou",
      "Lilian Calvet"
    ],
    "abstract": "Cultural heritage documentation increasingly relies on image-based 3D surface reconstruction, with photogrammetry software making such workflows accessible to archaeologists, conservators, and heritage technicians. These tools have been successful for conventional multi-view acquisition, but they do not routinely exploit richer multi-view, multi-light data, despite its potential for improving fine-scale surface reconstruction. This limitation is particularly relevant in heritage contexts, where controlled-light acquisition devices such as RTI domes are already used to capture illumination-varying image sets. The challenge is therefore to connect these existing acquisition practices with recent computer vision methods in a form that can be used within operational heritage workflows. In this work, we address this need by integrating state-of-the-art components from computer vision for multi-view, multi-light surface reconstruction into Meshroom, an open-source photogrammetry framework. Rather than proposing a new reconstruction algorithm, our contribution is to assemble and expose existing advanced methods, namely a complete photometric stereo ecosystem (calibrated, self-calibrated and universal), automatic object masking, and multi-view normal-and-reflectance integration, within a usable heritage-oriented workflow. The proposed system thus provides an intermediate software layer between computer vision research code and practical cultural heritage applications, making recent techniques easier to use and evaluate.",
    "published": "2026-09-14T16:31:18Z",
    "updated": "2026-09-14T16:31:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15833"
  },
  {
    "id": "2609.15830",
    "title": "CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering",
    "authors": [
      "Sumit Barua",
      "Guan Hong",
      "Halil Dursunoglu",
      "Charles Rodgers",
      "Alvis Fong"
    ],
    "abstract": "Retrieval-augmented generation (RAG) can improve access to complex information; however, retrieving evidence alone does not ensure that answers are grounded, citation-valid, or appropriately refused. This paper introduces CiteGuard-RAG, a validation-centered AI system for evidence-grounded question answering. The system integrates hybrid semantic-lexical retrieval, citation-constrained generation, sentence-level grounding validation, and single-pass regeneration. Validation is used at runtime to determine whether a candidate answer should be accepted, refused, or regenerated before final delivery. CiteGuard-RAG is evaluated on 400 questions across a controlled housing-law dataset, PrivacyQA, and CUAD. In the controlled evaluation, it achieves 99.1% retrieval accuracy, 98.3% grounded-answer accuracy, and 98.3% citation validity, with no validation-detected hallucinations. Ablation results show that grounded-answer accuracy drops sharply when validation is removed, even when retrieval accuracy remains unchanged. External evaluation shows that while citation validity remains strong, evidence utilization, span alignment, and refusal calibration become harder under domain shift. These findings indicate that trustworthy RAG systems require explicit validation between retrieval and final answer delivery. CiteGuard-RAG provides a practical architecture for linking retrieval, generation, citation checking, abstention, and regeneration in high-stakes information access.",
    "published": "2026-09-14T16:30:54Z",
    "updated": "2026-09-14T16:30:54Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2609.15830"
  },
  {
    "id": "2609.15820",
    "title": "AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery",
    "authors": [
      "Junhao Qiu",
      "Qinglong Hu",
      "Xialiang Tong",
      "Mingxuan Yuan",
      "Liyong Lin",
      "Qingfu Zhang"
    ],
    "abstract": "Large language models have advanced automated algorithm discovery by synthesizing executable code, but existing frameworks trap them in rigid search pipelines with pre-defined control flows. This limitation restricts adaptive reasoning, blocks cross-paradigm transfer, and discards valuable execution feedback. We propose AlgoEvo, a unified agentic framework that transforms automated algorithm discovery into an interactive, knowledge-accumulating process. An autonomous agent dynamically inspects, diagnoses, and edits code based on runtime feedback. A design skill hub decouples paradigm-specific knowledge from the core discovery engine, allowing a single workflow to seamlessly handle single-objective, multi-objective, and multi-component design. Meanwhile, a hierarchical experience mechanism organizes search trajectories into a task-level tree to guide exploration and consolidates cross-task patterns into reusable skills. Across six representative benchmark tasks, AlgoEvo matches or surpasses specialized methods with substantially fewer evaluations and reduced token consumption, demonstrating strong intra-task accumulation, cross-task transfer, and the ability to reproduce or exceed existing state-of-the-art performance through flexible skill activation.",
    "published": "2026-09-14T16:24:27Z",
    "updated": "2026-09-14T16:24:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15820"
  },
  {
    "id": "2609.15818",
    "title": "Atria Dawn: The Dawn of Agentic Superintelligence",
    "authors": [
      "Honglin Guo",
      "Tao Gui",
      "Yicheng Chen",
      "Guanting Dong",
      "Qiming Ge",
      "Yuyang Hu",
      "Zixian Huang",
      "Jiajie Jin",
      "Alexander Lam",
      "Yining Li",
      "Jiahang Lin",
      "Yanjiang Liu",
      "Xinyu Lu",
      "Haijun Lv",
      "Junlin Shang",
      "Qisheng Su",
      "Guoqiang Wang",
      "Rui Wang",
      "Zhecan Wang",
      "Hao Xiang",
      "Xinchen Xie",
      "Shuhao Xing",
      "Xiaoyu Xing",
      "Wanghan Xu",
      "Xinyu Yang",
      "Yajie Yang",
      "Chengfeng Zhao",
      "Haoran Zhao",
      "Ruojun Zhou",
      "Yunhua Zhou",
      "Yicheng Zou",
      "Kun Cai",
      "Qiye Cai",
      "Xinmeng Che",
      "Haodong Chen",
      "Jiabei Chen",
      "Jiahao Chen",
      "Jiayi Chen",
      "Yujia Chen",
      "Lizhi Cui",
      "Youheng Dai",
      "Xin Deng",
      "Yi Dong",
      "Shihan Dou",
      "Chenya Gu",
      "Xu Guo",
      "Ding Han",
      "Feiyang Hao",
      "Haotan He",
      "Jie Hou",
      "Binze Hu",
      "Zijian Hu",
      "Junhao Huang",
      "Huicheng Jiang",
      "Jiazhen Jiang",
      "Shufan Jiang",
      "Jiahao Kuang",
      "Bowen Lai",
      "Bo Li",
      "Jiaqiang Li",
      "Peng Li",
      "Qilong Li",
      "Zhuoqun Li",
      "Jiaxiang Liu",
      "Shuainan Liu",
      "Tong Liu",
      "Yi Liu",
      "Zhonghang Lu",
      "Jianwen Luo",
      "Yanyi Luo",
      "Huijie Lv",
      "Ningsheng Ma",
      "Zerun Ma",
      "Houcheng Min",
      "Chengjun Pan",
      "Qiyuan Peng",
      "Xiaoxuan Peng",
      "Jianmin Qian",
      "Jiantao Qiu",
      "Wanying Ren",
      "Huayu Sha",
      "Jifei Shan",
      "Zixin Shang",
      "Bing Shao",
      "Zhuohui Sheng",
      "Jiayang Shi",
      "Yang Shu",
      "Aierpanjiang Simayi",
      "Sirui Song",
      "Yuxiao Song",
      "Zhe Sun",
      "Zhichao Sun",
      "Wenzhe Tan",
      "Wenhui Tian",
      "Zhongbo Tian",
      "Hanchen Wang",
      "Pengbo Wang",
      "Rui Wang",
      "Yiding Wang",
      "Yuhui Wang",
      "Zhiheng Xi",
      "Caijun Xu",
      "Chao Xu",
      "Yongfeng Xu",
      "Xiaolei Yang",
      "Zhixiong Yang",
      "Qian Yao",
      "Shihong Yi",
      "Yuankai Ying",
      "Jia Yu",
      "Dingbo Yuan",
      "Hao Yuan",
      "Junjie Yuan",
      "Bo Zhang",
      "Caixian Zhang",
      "Qiuyinzhe Zhang",
      "Jiyuan Zhao",
      "Penghao Zhao",
      "Ying Zhao",
      "Pujun Zheng",
      "Xiaoxue Zhong",
      "Xiaohao Zhou",
      "Xinyu Zhou",
      "Dongsheng Zhu",
      "Guanru Zhu",
      "Yulun Zhu",
      "Yaojie Lu",
      "Tao Ji",
      "Hongyu Lin",
      "Yutao Zhu",
      "Pengfei Cao",
      "Guoxiu He",
      "Xianpei Han",
      "Ben He",
      "Zhicheng Dou",
      "Kang Liu",
      "Qi Zhang",
      "Le Sun",
      "Jun Zhao",
      "Ji-Rong Wen",
      "Xuanjing Huang",
      "Yu-Gang Jiang",
      "Bowen Zhou"
    ],
    "abstract": "As AI agents become participants in the development of their successors, they reshape both the production of intelligence and the role of human researchers. We introduce Atria Dawn Preview, a foundation agentic language model designed for scientific research and engineering workflows, with the goal of expanding the frontier of agent productivity in the real world. This model is trained via a Verifiable Experience Pipeline that connects tool-mediated interactions to executable environments and externally verified outcomes. Across 16 benchmarks spanning real-world research, engineering, and digital work, Atria Dawn Preview is competitive with frontier agents and achieves the highest reported score on five of them. Beyond standalone performance, we examine the real research-and-development process behind this model as a case study of human--AI collaboration, analyzing 769 task records from 56 participants together with agent logs. When asked to evaluate completed tasks under comparable conditions, participants rated about one-third of completed AI-assisted tasks as infeasible without AI. More strikingly, agents frequently propose methods and implement revisions, while humans retain most final decisions and guide exploration through judgment and feedback. These observations indicate a shift from task-level execution to project-level partnership, with human effort concentrating on what is worth pursuing and how evidence should guide research. Progress toward more autonomous AI research must therefore advance both the capacity for discovery and the capacity for meaningful human oversight, preserving accountable human authority over the risks and direction of continued development.",
    "published": "2026-09-14T16:22:30Z",
    "updated": "2026-09-14T16:22:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15818"
  },
  {
    "id": "2609.15779",
    "title": "EvoOntology: A Self-Evolving Ontology Layer for Data Agents",
    "authors": [
      "Meiduo Chong",
      "Shaolei Zhang",
      "Ju Fan",
      "Xiaoyong Du"
    ],
    "abstract": "Data agents aim to fulfill natural-language instructions over heterogeneous data, including tables, files, and databases. However, data agents face a challenging agent-data gap: heterogeneous data resides outside the agent, while the agent can access it (e.g., column names and file paths) only through generic tools. Existing approaches either let agents directly explore raw data sources or inject manually constructed semantic layers into prompts. However, neither scales well to large heterogeneous data sources nor adapts to different agent behaviors. In this paper, we introduce EvoOntology, a self-evolving ontology layer for data agents. EvoOntology encapsulates the ontology as an MCP server comprising a schema layer, a content layer, and a tool layer, enabling agents to actively query and interact with the ontology at runtime. To this end, we introduce a builder agent for autonomous ontology construction and a self-evolution loop that continuously refines the ontology through attribution-guided typed edits that are accepted only after a backbone-conditional paired evaluation. Experiments on three well-adopted data-agent benchmarks with four LLM backbones demonstrate that EvoOntology consistently outperforms strong baselines and existing semantic-layer approaches, effectively bridging the agent-data gap and enabling more effective interaction with heterogeneous data. Code: https://github.com/ruc-datalab/EvoOntology",
    "published": "2026-09-14T15:59:24Z",
    "updated": "2026-09-14T15:59:24Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.15779"
  },
  {
    "id": "2609.15773",
    "title": "Transfer Learning for Socioeconomic Estimation in Forced-Displacement Settings",
    "authors": [
      "Steven Ndung'u",
      "Adel Daoud",
      "Ismael Yacoubou Djima",
      "Hai-Anh H. Dang",
      "Patrick Michael Brock"
    ],
    "abstract": "Progress in inclusive household surveys has strengthened socioeconomic evidence for forcibly displaced populations, providing indispensable benchmarks on living conditions and welfare. However, these surveys remain resource-intensive and periodic, while conditions can change between rounds, particularly in settings affected by fragility, conflict, and violence. More frequently updated, spatially granular complementary evidence is therefore needed to identify where socioeconomic conditions may be changing between survey rounds and to inform operational prioritization. Earth observation and machine learning offer a scalable source of spatially explicit socioeconomic information. However, tools developed for general populations have not been systematically adapted and evaluated in forced displacement settings, where living conditions, settlement patterns, and displacement impacts may differ substantially. We address this gap by adapting a multimodal spatiotemporal vision transformer, pretrained on Demographic and Health Survey data from approximately 1.2 million households across 36 African countries, to forced displacement and host community settings in South Sudan, Cameroon, and Zambia. We develop and evaluate the updated, adapted model using socioeconomic indices derived from UNHCR FDS and RMS data. Our results show that satellite-derived geospatial covariates explain up to 66% of the variation in socioeconomic outcomes in camp-intersecting grids, with a mean absolute error (MAE) of 4.37 index points, and 41% in non-camp-intersecting areas, with an MAE of 5.41. The framework complements and adds value to periodic household surveys by filling critical spatial and temporal data gaps with regularly updated, model-based socioeconomic estimates. These estimates sustain insight between survey rounds and support timely humanitarian prioritization and field verification.",
    "published": "2026-09-14T15:55:57Z",
    "updated": "2026-09-14T15:55:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15773"
  },
  {
    "id": "2609.15772",
    "title": "Event-Native Symbolic-Temporal Spike Encoding Framework for Heterogeneous Cyber Streams",
    "authors": [
      "Dalton Diez",
      "Peyton Andras",
      "Max Shroyer",
      "James Ghawaly"
    ],
    "abstract": "Spiking neural networks (SNNs) have shown promise for sparse, event-driven computation through stateful processing that is naturally compatible with low-power edge hardware. These properties align with cyber monitoring, where data arrives asynchronously, and malicious behavior often emerges through temporal patterns across event sequences. However, cyber streams are not composed solely of continuous numeric signals: their informative structure is also carried by categorical identifiers, irregular timing, and local behavioral context. Traditional rate- and population-based spike encodings are not naturally suited to these heterogeneous semantics, while conventional intrusion detection system (IDS) pipelines typically resolve the mismatch by converting raw events into flows, fixed aggregation windows, or dense tensors. Although useful for conventional classifiers, these transformations introduce buffering latency, obscure native temporal structure, and weaken the computational advantages of event-driven neuromorphic processing. We introduce an event-native symbolic-temporal spike encoding framework that maps heterogeneous cyber events directly into sparse, spike-compatible inputs. By assigning encoding roles to semantic identity, local frequency context, and inter-event timing, the framework preserves categorical semantics and temporal dynamics. We validate the approach on packet-level Network IDS and extend it to message-level CAN IDS, using both domains to evaluate whether the encoding exposes usable structure for recurrent SNNs operating directly on native event streams. Under edge-oriented, $μ$Caspian-aligned hardware constraints, compact recurrent SNNs achieve strong anomaly detection performance, with an operational hybrid metric ($J_{hybrid}$) of 0.987 on Network IDS and 0.980 on CAN IDS.",
    "published": "2026-09-14T15:55:43Z",
    "updated": "2026-09-14T15:55:43Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.15772"
  },
  {
    "id": "2609.15763",
    "title": "Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning",
    "authors": [
      "Yuxuan Sun",
      "Yuxuan Bai",
      "Tan Chen",
      "Sheng Zhou",
      "Zhisheng Niu"
    ],
    "abstract": "Federated continual learning (FCL) enables shared global models to continuously adapt to distributed and non-stationary data streams, making it important for Internet of Things applications such as intelligent transportation, industrial monitoring, and unmanned systems. Under spatio-temporal data distribution dynamics and label scarcity, a key challenge is how to quantify the contribution of each edge device to global learning performance and schedule the most valuable devices under resource constraints for timely model updating. This article presents Sylvas, a synergistic learning value based device scheduling framework for FCL at the wireless edge. Sylvas evaluates the learning value of distributed data from two perspectives: distributional value, which characterizes the contribution of device data to global model learning from a spatio-temporal distribution perspective, and label value, which captures the quantity and reliability tradeoff of pseudo-labeled data. By integrating these factors into a synergistic learning value metric, Sylvas schedules devices with high learning value while satisfying communication and computation resource constraints. Case studies demonstrate that Sylvas supports timely model adaptation under spatio-temporal distribution dynamics and effectively exploits unlabeled data.",
    "published": "2026-09-14T15:48:21Z",
    "updated": "2026-09-14T15:48:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15763"
  },
  {
    "id": "2609.15746",
    "title": "TopoRig: Topology-Agnostic Facial Rigging via Multi-Source Supervision",
    "authors": [
      "Andrew Fleet",
      "Soroush Mehraban",
      "Vida Adeli",
      "Cole Clifford",
      "Babak Taati"
    ],
    "abstract": "Automatic facial rigging across heterogeneous mesh topologies remains challenging because high-quality expression supervision is often tied to canonical templates, while deformation transfer to arbitrary meshes can introduce geometric artifacts and correspondence errors. We present TopoRig, a topology-agnostic facial rigging framework that predicts FACS-conditioned deformations directly on input mesh vertices while preserving the original topology. Starting from the ICT FaceKit expression model, we construct complementary supervision from accurate but template-biased common-topology rigs, topology-diverse but noisier transferred rigs, and targeted image-based cues for controls poorly captured by geometric transfer. TopoRig combines local surface geometry, landmark-relative semantic features, global shape context, and FACS controls to predict per-vertex displacements. We train on 3,496 generated identities using 45 non-gaze expression controls from the 53-control ICT FaceKit vocabulary. On held-out identities and unseen mesh topologies, TopoRig more faithfully reproduces the reference expression space than prior neural facial-rigging methods, while qualitative results show consistent localized deformations across diverse character geometries. Ablations demonstrate that semantic landmark features and complementary supervision improve cross-identity and cross-topology generalization. Overall, TopoRig amortizes heterogeneous and imperfect expression supervision into a single topology-preserving deformation model.",
    "published": "2026-09-14T15:37:03Z",
    "updated": "2026-09-14T15:37:03Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15746"
  },
  {
    "id": "2609.15745",
    "title": "Look Before You Leap: Factual Decoding with Internal Attribution Signals",
    "authors": [
      "Hayeong Ryu",
      "JungMin Yun",
      "Byeonggeuk Lim",
      "Sunhee Jo",
      "YoungBin Kim"
    ],
    "abstract": "Hallucination remains a critical challenge in large language models (LLMs), where early factual errors compound through autoregressive generation in a snowballing effect that neither post-hoc correction nor weight-level intervention can effectively preempt. We propose DescaPE (DEcoding Signal Control Against Path Error-snowballing), a decoding framework that leverages internal model signals to suppress hallucination-prone trajectories at inference time. Through sliding-window MLP ablation, we identify a factual-salient layer span within LLMs whose derived signal is selectively elevated for factual tokens and exhibits anomalous spikes at hallucination-prone steps. We train a lightweight probe to approximate this signal from a single forward pass and integrate it into candidate scoring to penalize high-risk continuations while rewarding factually grounded ones. Experiments across five factuality benchmarks on three LLMs demonstrate that DescaPE achieves factuality improvements over decoding-time baselines in multiple settings, while incurring only 1.10x latency overhead in our efficiency evaluation. Our code is available at https://github.com/hayeonggg/DESCAPE.",
    "published": "2026-09-14T15:35:42Z",
    "updated": "2026-09-14T15:35:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15745"
  },
  {
    "id": "2609.15744",
    "title": "Design of a Deep Learning Credit Risk Early Warning System Integrating Multi-source Heterogeneous Data",
    "authors": [
      "LiYang Wang",
      "Zhen Zhong",
      "Zhen Tian",
      "Keyu Chen",
      "Keyu Chen"
    ],
    "abstract": "Advancements in data fusion and real-time analytics technologies have opened new avenues for addressing complex domain challenges. Financial risk early warning systems often suffer from inefficiency due to information silos and monitoring delays. This paper proposes a credit risk early warning system based on heterogeneous information fusion. The system employs a model architecture integrating deep neural networks and attention mechanisms to extract multidimensional features from diverse data sources such as transaction behaviors and social networks, thereby establishing an early identification mechanism for corporate and individual credit risks. System testing demonstrates that this approach significantly enhances the accuracy and timeliness of risk warnings, outperforming traditional rule-based engine solutions. The findings offer innovative insights for early intervention in financial risks, holding practical significance for safeguarding financial stability.",
    "published": "2026-09-14T15:35:41Z",
    "updated": "2026-09-14T15:35:41Z",
    "categories": [
      "cs.AI",
      "cs.CE",
      "cs.DB",
      "cs.LG",
      "q-fin.RM"
    ],
    "url": "https://arxiv.org/abs/2609.15744"
  },
  {
    "id": "2609.15740",
    "title": "A Language-Guided Multimodal Foundation Model for Zero-Shot and Multi-Task Brain Signal Analysis",
    "authors": [
      "Mingzhi Chen",
      "Yiyu Gui",
      "Guibo Luo",
      "Yuchao Yang"
    ],
    "abstract": "Brain signal analysis is essential for both neuroscience research and clinical diagnostics, yet current approaches face critical limitations. End-to-end models require task-specific retraining and exhibit limited generalization, while pre-trained models lack semantic depth and still depend on extensive fine-tuning. Meanwhile, general-purpose multimodal foundation models, though powerful in other domains, struggle to interpret brain signals due to representational misalignment and lack of domain knowledge. This study introduces a multimodal foundation model for zero-shot and multi-task brain signal analysis (METIS) through a unified language-signal alignment framework. METIS is pretrained on the largest and most diverse brain-signal corpus to date, comprising over 70,000 h of recordings from more than 11,000 subjects across 20 datasets. In a comprehensive zero-shot evaluation across 12 datasets, METIS outperformed the leading generalist model by over 20.9% in average accuracy. Remarkably, without any fine-tuning, METIS's performance matches or exceeds that of supervised, task-specific models. Furthermore, METIS demonstrates exceptional data efficiency and strong generalization, achieving an average AUROC advantage of over 16.0% in few-shot settings and 15.9% in cross-dataset transfer. This work establishes a new paradigm for general-purpose brain signal analysis, paving the way for next-generation neurotechnology.",
    "published": "2026-09-14T15:32:38Z",
    "updated": "2026-09-14T15:32:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15740"
  },
  {
    "id": "2609.15735",
    "title": "Transforming harmonic coefficients for 3D splat compression",
    "authors": [
      "Tam Thuc Do",
      "Philip A. Chou",
      "Gene Cheung"
    ],
    "abstract": "We address the problem of color attribute compression for 3D splats. We show that all images generated by 3D splats are linear in the coefficients for each color channel, each spherical harmonic, and each splat, and we identify a basis for the space of all such images. We identify an inner product for the coefficient space that induces the squared error loss on images. We show that orthonormalizing the coefficients with respect to this innner product before coding can yield over 2 dB gain.",
    "published": "2026-09-14T15:28:29Z",
    "updated": "2026-09-14T15:28:29Z",
    "categories": [
      "eess.SP",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.15735"
  },
  {
    "id": "2609.15727",
    "title": "Are LLMs Good Financial User Simulators? A Preliminary Study",
    "authors": [
      "Jiajie He",
      "Jiangyuan Hong",
      "Dongling Ni",
      "Wenjin Liu",
      "Xintong Chen"
    ],
    "abstract": "Large language models (LLMs) are increasingly used as user simulators, but their ability to reproduce evolving individual financial decisions remains unclear. We present a preliminary study in a controlled paper-trading environment with 120 volunteers. Participants used non-redeemable virtual funds under real-time market conditions; no real brokerage accounts, real-money positions, or real transaction records were accessed. Given only information available before a prediction cutoff, a simulator predicts the participant's next-trading-day action, traded security, and transaction quantity. We evaluate temporally aligned rolling predictions and compare settings with and without point-in-time market information. Market context improves action and ticker prediction in the controlled ablation, while transaction sizing remains difficult. We also observe systematic behavioral compression: models overproduce hold actions, underpredict sell decisions, and simplify multi-security transactions. These results provide an initial empirical characterization and motivate larger-scale evaluation of individual, temporal, and portfolio-level behavioral fidelity.",
    "published": "2026-09-14T15:23:26Z",
    "updated": "2026-09-14T15:23:26Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.15727"
  },
  {
    "id": "2609.15726",
    "title": "Bench2Dex: Benchmarking Visuo-Tactile Bimanual Dexterous Manipulation Across Dexterous Hands",
    "authors": [
      "Zhenjie Yang",
      "Yideng Zhang",
      "Dongjie Zhang",
      "Chenyu Jiang",
      "Xianshuai Liu",
      "Yufeng Li",
      "Zuhao Ge",
      "Xingyu Jiao",
      "Zheng Zhang",
      "Kaiyu He",
      "He Wang",
      "Yuwen Zhong",
      "Yi Deng",
      "Muyun Jiang",
      "Xianliang Huang",
      "Haisheng Su",
      "Donghang Zhang",
      "Jian Zhang",
      "Xue Yang",
      "Hongyang Li",
      "Zuxuan Wu",
      "Yu-Gang Jiang",
      "Xiaosong Jia",
      "Junchi Yan"
    ],
    "abstract": "Tactile sensing provides contact information that can be difficult to infer from vision alone, but tactile hardware for dexterous hands has not converged to a common design. Dexterous hands differ in finger structure, contact surfaces, and sensor layouts, while simulated tactile signals still differ from measurements produced by physical sensors. These factors make it difficult to study visuo-tactile manipulation across diverse dexterous hands within a consistent experimental setting. We present Bench2Dex, a simulation benchmark for visuo-tactile bimanual manipulation across 12 dexterous hands. We adapt existing robot models with a shared simulated tactile interface that converts local contact geometry into image-like tactile observations. The interface provides a consistent observation format across different hand morphologies without attempting to reproduce the output of a specific physical tactile sensor. Bench2Dex includes 26 bimanual manipulation tasks that involve tool use, articulated-object interaction, and multi-stage manipulation, together with about 1.3K human-teleoperated demonstrations. The benchmark provides synchronized visual, tactile, proprioceptive, action, and object-state observations, together with executable task metrics. For robustness, we group seven perturbation types into invariance axis, where the correct action does not change, and equivariance axis, where the correct action changes together with the perturbation. We evaluate ACT, Diffusion Policy, pi0.5, and GR00T N1.5 on Bench2Dex and report their performance and failure modes. Bench2Dex is meant as a platform for studying visuo-tactile learning across dexterous hands. It does not assume that simulated tactile observations can replace real tactile sensing; it offers a shared setting for algorithm development while tactile hardware and simulation models are still evolving.",
    "published": "2026-09-14T15:22:59Z",
    "updated": "2026-09-14T15:22:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15726"
  },
  {
    "id": "2609.15722",
    "title": "Data storytelling meets interpretable machine learning: Decoding AI decisions for non-experts without revealing sensitive data and model details",
    "authors": [
      "Lemen Chao",
      "Zixuan Yang",
      "Anran Fang",
      "Mingran Sun",
      "Ming Lei"
    ],
    "abstract": "AI-driven automated decision-making requires both predictive performance and interpretability. Recent advances in interpretable machine learning (IML) provide tools for explaining model predictions, but the technical complexity of these explanations may hinder accessibility to non-experts. To address this challenge, this study integrates data storytelling with IML to enhance the explainability of AI-generated decisions for a broader audience. Following the design science research (DSR) paradigm, this study proposes a formal definition of data storytelling in IML, introduces the DIST Pyramid to align data storytelling with IML, and presents the I-P-O Model to describe their interactions. It further develops an architecture to explain AI decisions through distinct \"What-if\" and \"Why-not\" event-generation processes. The architecture also employs data desensitization to protect sensitive input data. To validate the approach, a case study is conducted with the Boston Housing dataset, using SHapley Additive exPlanations (SHAP) values and large language models (LLMs) to generate data stories with And-But-Therefore (ABT) structures. An empirical evaluation shows that 76.4% and 74.3% of respondents rated the \"What-if\" and \"Why-not\" data stories as more comprehensible, with significantly higher accessibility scores than traditional SHAP visualizations. The paper concludes with the presentation of a narrative interpretation framework that integrates IML and data storytelling, thereby expanding the research scope as well as the practical applicability of AI decision-making.",
    "published": "2026-09-14T15:20:56Z",
    "updated": "2026-09-14T15:20:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15722"
  },
  {
    "id": "2609.14596",
    "title": "Direct Conditional Transition Sampling for Diffusion Inverse Problems",
    "authors": [
      "Qi Yu",
      "Hanlin Wu",
      "Xiaohui Sun"
    ],
    "abstract": "Training-free diffusion inverse solvers typically choose between local measurement guidance and costly clean-space posterior updates. Independent posterior refresh can improve global correction by sampling a clean conditional and re-noising it, but its practical realization requires probability-flow ODE integration and clean-space Markov chain Monte Carlo (MCMC). We propose Direct Conditional Transition Sampling (DCTS), a direct stochastic-flow approximation to the same ideal refresh target. Rather than explicitly drawing a clean sample, DCTS estimates the measurement-conditioned clean mean along a short inner path and transports Gaussian source noise directly to the next noisy state. A denoiser-compatible sufficient statistic and a covariance-scaled operator update enable this conditional-mean estimation. Experiments on four inverse problems demonstrate that DCTS achieves competitive reconstruction quality with up to $16.8\\times$ speedups over competing methods.",
    "published": "2026-09-13T15:24:33Z",
    "updated": "2026-09-13T15:24:33Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.14596"
  },
  {
    "id": "2609.14595",
    "title": "Diagnosing Temporal Misalignment in Multichannel Time-Series Classification with Minimum Description Length",
    "authors": [
      "Sebastian Buschjäger",
      "Michael Frichert",
      "Daniel Kuhe",
      "Jian-Jia Chen"
    ],
    "abstract": "Multichannel time-series classification commonly assumes synchronized sensor streams, although latency, clock drift, and preprocessing can introduce relative delays during data collection or after deployment. Existing synchronization solutions are often hardware-specific and difficult to apply retrospectively. Consequently, synchronization problems may remain undetected while classification performance is suboptimal. We introduce a classifier- and label-free diagnostic based on minimum description length (MDL). Our method applies candidate temporal shifts to sensor groups and measures how efficiently one group can be encoded through a representation of the remaining channels. An increased codelength indicates that the shift destroys shared temporal structure, whereas the minimum identifies the alignment most strongly supported by the data. Unlike learned synchronization methods, the diagnostic requires neither retraining nor a trusted aligned reference and can therefore test both training and deployment data for misalignments. Experiments on two controlled synthetic tasks and nine real-world datasets show that the metric exposes alignment structure and can recover accuracy under induced deployment drift. A whole-dataset audit further identifies stable nonzero MDL optima in established benchmarks including FordChallenge, Opportunity, PAMAP2, and UCIActivity, revealing potential systematic offsets that conventional model evaluation does not expose. Our method thus provides a general-purpose tool for detecting, understanding, and correcting temporal misalignment throughout the time-series learning pipeline. Our code is available under https://github.com/sbuschjaeger/mdl-temporal-misalignment.",
    "published": "2026-09-13T15:24:24Z",
    "updated": "2026-09-13T15:24:24Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2609.14595"
  },
  {
    "id": "2609.14593",
    "title": "SENTINEL: A Multi-Pathway Architecture for Detecting Living-Off-the-Land APT Attacks on Windows Command Lines",
    "authors": [
      "Ahad Bin Islam Shoeb",
      "Kamrul Hasan",
      "Jamal Uddin Tanvin",
      "Liang Hong",
      "Imtiaz Ahmed",
      "Md Arif Billah",
      "Al Amin"
    ],
    "abstract": "Living-Off-the-Land (LOTL) is the dominant evasion technique of Advanced Persistent Threat (APT) actors, exploiting legitimate Windows utilities to conduct malicious operations without deploying custom malware and enabling state-sponsored campaigns to maintain persistent access within military and critical defense infrastructure for extended periods. Existing detection methods fail against obfuscated commands and multi-stage attack sequences, as demonstrated by the Volt Typhoon APT campaign, which maintained undetected access to U.S. critical infrastructure for over 18 months using exclusively signed Windows utilities. We present SENTINEL, a multi-pathway architecture integrating BERT-based semantic encoding, character-level CNN for obfuscation invariance, inter-command attention for multi-stage pattern recognition, and autoencoder-based anomaly scoring. Evaluated on a balanced Volt Typhoon benchmark derived from Microsoft and CISA threat intelligence advisories, SENTINEL achieves 92.0% accuracy on documented state-sponsored attack commands and 91.2% on obfuscated variants, compared to 74.0% and 72.0% for standalone BERT. Per-class analysis reveals that models achieving over 98% overall validation accuracy on imbalanced data exhibit only 44-58% malicious recall on balanced adversarial sets. Character-level processing contributes 5.6 percentage points of obfuscation invariance, and the 8.0 percentage point gap over augmentation-only baselines confirms structural architectural value beyond data-driven robustness alone.",
    "published": "2026-09-13T15:20:34Z",
    "updated": "2026-09-13T15:20:34Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14593"
  },
  {
    "id": "2609.14592",
    "title": "AI Deployment Accountability Engineering: A Vision for Accountable AI in Safety-Critical Socio-Technical Systems",
    "authors": [
      "Murat Kantarcioglu"
    ],
    "abstract": "Artificial intelligence systems are rapidly becoming critical components in healthcare, finance, public services, and other safety-critical domains. Yet the engineering practices used to evaluate these systems remain predominantly model-centric, emphasizing properties such as accuracy, robustness, fairness, and interpretability before deployment. These properties are necessary but insufficient once an AI system operates within an ever changing socio-technical environment characterized by distribution shifts, institutional constraints, human feedback loops, privacy requirements, and interactions among multiple AI agents. This vision paper introduces AI Deployment Accountability Engineering (ADAE), a proposed AI engineering subdiscipline concerned with establishing measurable, continuous, and actionable accountability for deployed AI systems. ADAE treats accountability as a deployment-layer property rather than solely as a property of an individual model. It seeks to determine whether an AI-enabled system continues to operate within acceptable risk limits, identify the contexts in which failures emerge, attribute failures across interacting technical and human components, translate technical failures into downstream consequences, and support timely intervention. We articulate a research agenda built around four interconnected pillars: structured discovery of context-dependent failure modes, privacy-preserving accountability measurement, system-level risk analysis for agentic AI, and translation of technical failures into operational, and institutional risks. The broader goal is to establish foundational principles, mathematical tools, and system architectures for accountable AI deployment across safety-critical applications.",
    "published": "2026-09-13T15:18:41Z",
    "updated": "2026-09-13T15:18:41Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.14592"
  },
  {
    "id": "2609.14590",
    "title": "Reverse Spatio-Temporal Disease Progression Modelling",
    "authors": [
      "Ulugbek Shernazarov",
      "Moucheng Xu",
      "Inomjon Ramatov"
    ],
    "abstract": "Deep learning-based spatio-temporal disease progression models commonly overlook the incubation period of progressive diseases, limiting the use of those models in early interventions, which are vital for not easily reversible diseases such as Alzheimer's. This is because, the existing deep learning based longitudinal disease-progression models are almost always run forward: from an observed baseline they predict future decline. In many clinical settings, however, imaging begins only after pathology is suspected or already visible, the earlier, healthier patient-specific reference was never acquired. To address this, we propose to study reverse disease progression prediction: given later diseased anatomy, reconstruct the unobserved healthier anatomy that preceded it. We use a two-stage model in which a frozen 3D vector-quantised autoencoder defines a compact discrete latent space, while a Neural Ordinary Differential Equation (ODE) learns continuous-time dynamics in that space. A recurrent encoder reads late observations in reverse temporal order, initialises the latent state, and the ODE is integrated backwards across the trajectory. On a controlled Morpho-MNIST benchmark with a sinusoidal perturbation, our model successfully recovered the unseen previous states from later observations of the non-monotonic trajectory. On longitudinal brain MRIs from Alzheimer's Disease Neuroimaging Initiative, at the task to recover the previous unseen trajectory towards healthy states of the patients from observed later diseased states, our model outperforms the baselines that uses copy-nearest and mean-observed, with positive disease-reversal scores in every diagnostic stratum. We hope that our work can provide insights and tools towards discovering the incubation periods from single-shot scans, and developing early interventions of diseases based on imaging.",
    "published": "2026-09-13T15:17:59Z",
    "updated": "2026-09-13T15:17:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14590"
  },
  {
    "id": "2609.16071",
    "title": "Schema-Adaptive Action-Conditioned JEPA for Cross-Machine CNC Transfer under Partial Sensor Overlap",
    "authors": [
      "Ayoub Louaye Bouaziz",
      "Matthieu Ostertag",
      "Anton Demasles"
    ],
    "abstract": "Cross-machine deployment of industrial world models requires transfer across changes in dynamics, sensing interfaces, sampling regimes, and control units. We study a schema-adaptive action-conditioned Joint-Embedding Predictive Architecture (SAAC-JEPA) for CNC dynamics, where the source machine has 17 canonical sensor channels and the target shares only 10. Evaluation uses group-disjoint source splits, source-only normalization, held-out self-supervised validation, unit audits, and a sealed target test after model locking. Across five seeds, JEPA pretraining gives no clean-source forecasting gain: scratch and pretrained-body models obtain \\(\\mathrm{RMSE}=0.811\\pm0.022\\) and \\(0.813\\pm0.022\\). A source-only search over 20 candidates selects a schema-consistent action-conditioned JEPA after seven-seed stability checks. On the confirmatory target pass, the locked model reaches zero-shot \\(\\mathrm{RMSE}=0.546\\), \\(R^2=0.012\\), and \\(\\mathrm{NLL}=0.52\\), outperforming persistence but not RevIN-equipped PatchTST and iTransformer baselines (\\(0.503\\) and \\(0.498\\)). A pre-declared paired ablation shows that RevIN in the same architecture improves RMSE to \\(0.495\\pm0.004\\) over three seeds, but degrades target calibration (\\(\\mathrm{NLL}=20.6\\)) on stationary context windows. A pre-lock adaptation sweep further reduces RMSE to \\(0.520\\) with limited target support. These results show that source-domain forecasting accuracy alone is insufficient to assess industrial predictive representations, and that cross-machine adaptation under partial sensor overlap is a distinct evaluation axis.",
    "published": "2026-09-13T15:10:06Z",
    "updated": "2026-09-13T15:10:06Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16071"
  },
  {
    "id": "2609.16070",
    "title": "Efficient Multimodal Generative Recommendation with Latent Narrative Reasoning",
    "authors": [
      "Chenxing Wang",
      "Nantao Zheng",
      "Hao Miao",
      "Juyuan Wang",
      "Xinke Jiang",
      "Yuchen Fang",
      "Aolin Li",
      "Haijun Wu"
    ],
    "abstract": "Generative recommendation reformulates item prediction as semantic identifier generation, yet episodic content introduces a fundamentally different setting where the target is determined by narrative evolution rather than user preference. This task requires models to understand multimodal storyline progression while addressing the efficiency challenges caused by redundant visual contexts and costly explicit reasoning generation. We propose \\textbf{NarraLite}, an efficient multimodal generative recommendation framework that jointly compresses perception and reasoning. Specifically, Progressive Spectral Compression selectively distills long visual contexts into compact narrative-relevant evidence, preserving transition-critical information while reducing redundant visual computation. Latent Narrative Reasoning introduces context-routed latent reasoning tokens and aligns their contextualized representations with future continuation semantics, enabling implicit narrative inference without autoregressively decoding textual rationales. We further establish a user-agnostic multimodal benchmark for short-form drama continuation across UGC, PGC, and OOD settings. Extensive experiments demonstrate that NarraLite consistently improves continuation accuracy, narrative coherence, and robustness over existing approaches, while achieving a favorable accuracy--efficiency trade-off.",
    "published": "2026-09-13T15:04:05Z",
    "updated": "2026-09-13T15:04:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16070"
  },
  {
    "id": "2609.14578",
    "title": "A Building as a Repository: KIR, a Typed Intermediate Representation for Agent-Authored Building Information Models",
    "authors": [
      "Dmitry Kuklev"
    ],
    "abstract": "Autonomous agents that author building information models need more than access to a host API. They need a representation of what they intended, what a compiler decided on their behalf, what was refused, what was observed after execution and what remains unknown. We present KIR, a typed intermediate representation in which a building is authored as a program held in a versioned repository and lowered to host applications as build targets. KIR is organised around seven ways in which a generator writing into a stateful, partially observable host goes silently wrong, and gives each a representation in data: ambiguous selectors become typed refusals with candidates; defaults keep their provenance; obligations that will not be checked are named before execution; vacuous witnesses are rejected statically; a lost transaction response becomes the state UNCONFIRMED with a verify-before-retry rule; the reverse path obeys a census invariant; and decisions are bound by digest to the state they were made against. On a pinned snapshot with 83 operation contracts and Revit as the only backend, offline experiments refuse 29 of 42 stress-test programs with diagnostic codes and no uncaught exception, name 38 of 377 witness obligations as unwitnessable, admit 31 of 100 combinations of execution, witness and acceptance states under seven stated invariants, and find no vacuous witness in 219 certificate runs; a 60-storey tower is 11,263 characters as KIR against 3,709,235 characters of emitted C#. Native Revit runs are reported from project records and kept separate from reproduced results. A controlled comparison with agents that write host code directly is specified but not yet executed; it is the principal open question.",
    "published": "2026-09-13T15:01:58Z",
    "updated": "2026-09-13T15:01:58Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.14578"
  },
  {
    "id": "2609.14572",
    "title": "AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory",
    "authors": [
      "Sushan Adhikari"
    ],
    "abstract": "Teaching abstract theoretical computer science (TCS) concepts such as algorithm analysis and complexity theory is challenging because students must handle formal proofs and asymptotic reasoning that conventional resources rarely explain in an adaptive, on-demand way. We present AlgoRAG, a specialized Retrieval-Augmented Generation (RAG) system that couples a large language model (LLM) with a curated, domain-specific knowledge base to address these challenges. The knowledge base integrates authoritative textbooks, 847 lecture slides, 312 practice problems with solutions, 156 worked proof templates, and 89 complexity worksheets. AlgoRAG incorporates domain-specific optimizations including mathematical entity recognition, notation-aware retrieval, and pedagogical re-ranking. We evaluate AlgoRAG on 179 curated exam-style questions spanning asymptotic analysis, recurrence relations, dynamic programming, graph algorithms, NP-completeness, sorting, and divide-and-conquer. The system achieves a 100% success rate with a mean response time of 38.0 seconds. While BLEU-4 scores are zero -- a known limitation of n-gram matching on mathematical proofs where equivalent reasoning may use entirely different notation -- AlgoRAG attains ROUGE-1 F1 of 0.0963, ROUGE-L F1 of 0.0683, and a pedagogical quality score of 0.7620, indicating that responses are well-structured and didactically sound even when surface wording diverges from reference answers. Performance is especially strong on NP-completeness (ROUGE-1 F1 = 0.1285, pedagogical quality = 0.7643) and graph algorithms (ROUGE-1 F1 = 0.1023, pedagogical quality = 0.8086). These results support the conclusion that RAG is an effective architecture for personalized theoretical-CS instruction, providing correct, context-rich explanations even for highly abstract topics.",
    "published": "2026-09-13T14:58:56Z",
    "updated": "2026-09-13T14:58:56Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.14572"
  },
  {
    "id": "2609.14570",
    "title": "Disentangling Topology and Diversity in Multi-Agent LLMs for Multilingual Low-Resource Emotion Detection",
    "authors": [
      "Ulugbek Shernazarov",
      "Charitha Ruwansiri Weerakon Basnayake",
      "Abdelkhaleq El Jarjini",
      "Noel Crespi",
      "Praboda Rajapaksha"
    ],
    "abstract": "Multi-agent LLM systems combine multiple inference calls, but prior work often confounds how calls are connected with how they are diversified. We study these factors independently: inference topology and source of inter-agent diversity. In a controlled $2 \\times 3$ matrix, we cross parallel aggregation and sequential refinement with stochastic sampling, role prompting, and learned QLoRA specialization, under a fixed three-call budget and output protocol within each backbone. Using Qwen2.5-14B-Instruct and Llama-3.1-8B-Instruct, we evaluate all six configurations on multilingual low-resource emotion detection across nine languages. Parallel learned specialization is strongest on Qwen at 52.83 Macro-F1 and reaches 52.94 on Llama. On Qwen it also exceeds same-backbone zero-shot, few-shot, CoT, and seven-call self-consistency baselines. The preferred topology depends on diversity source: sequential refinement helps stochastic and prompted settings, while the learned Width advantage shrinks from 2.83 points on Qwen to 0.17 on Llama. Depth-wise analysis suggests that later learned specialists can overwrite correct early predictions, although the aggregate effect is backbone-dependent. Overall, how agents are differentiated produces larger performance shifts than topology, which should be evaluated jointly with specialization.",
    "published": "2026-09-13T14:58:26Z",
    "updated": "2026-09-13T14:58:26Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14570"
  },
  {
    "id": "2609.14560",
    "title": "Small Object Detection in Drone Aerial Imagery with LAF-YOLOv10",
    "authors": [
      "Quratulain Nayeem",
      "Fahmina Taranum",
      "Mohammed Mudassir Uddin"
    ],
    "abstract": "General-purpose object detectors lose accuracy on UAV footage, where targets span only a handful of pixels and onboard compute is limited. Prior work composes independently-validated architectural techniques into one detector, assuming gains reported in isolation transfer once combined. We stress-test that assumption directly. LAF-YOLOv10 integrates four techniques into YOLOv10n: a Partial Convolution C2f (PC-C2f) backbone block, an Attention-Guided Feature Pyramid Network (AG-FPN), a P2 detection head replacing the large-object P5 head, and Wise-IoU v3 regression, asking whether their combined effect matches what each contributes alone. We train LAF-YOLOv10 three times (seeds 42, 123, 256) on VisDrone-DET2019, benchmark against unmodified YOLOv10n, and use TIDE error decomposition, per-category breakdown, per-component ablation, attention/loss comparisons, zero-shot transfer to UAVDT, and held-out/test-dev evaluation to localize where the combination succeeds or fails. Composability does not hold here. LAF-YOLOv10 reaches 24.0+/-0.4% mAP@0.5 at 2.14M parameters, 7.8 points below YOLOv10n (31.8%), a deficit that transfers to UAVDT (-10.0 points) and is confirmed by held-out and test-dev evaluation (23.5%, 22.5%). Background false positives, localization error, and duplicate detections move in the direction AG-FPN and Wise-IoU were designed to push. Ablation traces the deficit to a specific source: the P2/-P5 head swap costs 2.5 points independently plus a 2.5-point interaction penalty when layered onto a backbone weakened by PC-C2f, whose own 2.0-point loss is consistent with a partial pretrained-weight transplant (73/150 backbone tensors transfer). The failure is attributable to a specific interaction, not the four components individually. Composability must be verified directly, not assumed. Code/checkpoints: https://github.com/Mudassiruddin7/Small-Object-Detection-in-UAV-Imagery.",
    "published": "2026-09-13T14:46:43Z",
    "updated": "2026-09-13T14:46:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14560"
  },
  {
    "id": "2609.16069",
    "title": "Beyond Distribution Matching: Semantics-Consistent Tabular Diffusion with Weak Semantic Priors",
    "authors": [
      "Yili Wang",
      "Ruxue Shi",
      "Mengnan Du",
      "Hangting Ye",
      "Yi Chang",
      "Xin Wang"
    ],
    "abstract": "Synthetic tabular data can match real data distributions while still violating the semantic constraints that govern valid tabular rows. This reveals a key limitation of existing tabular generators: they mainly optimize distributional fidelity, but do not explicitly model weak semantic priors encoded in tabular schema and textual descriptions. In this paper, we propose \\ours, a semantics-consistent tabular diffusion framework for high-fidelity synthetic data generation under weakly specified semantic priors. \\ours\\ first constructs two types of priors, namely intra-column semantics and inter-column symbolic rules, with LLM-assisted extraction from metadata and validation on the real training split. These priors are then used as generation conditions rather than post-hoc filters. Specifically, \\ours\\ maps heterogeneous column values, column identities, and semantic priors into a unified semantic space, and performs column-wise forward corruption and prior-conditioned reverse denoising to preserve both marginal distributions and rule-consistent cross-column dependencies. Extensive experiments on six real-world tabular benchmarks show that \\ours\\ consistently improves distributional fidelity, semantic consistency, and downstream task utility over representative VAE-, GAN-, LLM-, and diffusion-based baselines. Additional analyses further demonstrate the robustness of \\ours\\ when semantic priors are partially unavailable.",
    "published": "2026-09-13T14:42:10Z",
    "updated": "2026-09-13T14:42:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16069"
  },
  {
    "id": "2609.12890",
    "title": "Large Distant Gradients Need Not Be Reliable: reliability-weighted credit assignment for long-horizon autoregressive forecasting",
    "authors": [
      "Junhao Zhao",
      "David Michael Simberg",
      "Jacob Kang",
      "Colin Connor Kurniawan",
      "Nan Xu"
    ],
    "abstract": "In autoregressive forecasting, long prediction rollouts provide distant supervision, but backpropagation through time (BPTT) carries gradients from those losses through many autoregressive steps. Repeated Jacobian products can make distant gradients dominate the update while amplifying predictable signal and unpredictable noise together; a large distant gradient therefore need not carry reliable learning signal. Motivated by this observation, we introduce Internal Dual-Wiener routing (Internal-DW), a principled backward-only intervention that preserves the full forward rollout and all horizon losses while reliability-weighting internal gradient routes. At each residual block, we derive bounded Wiener gains for the identity and nonlinear routes that balance preserving predictable learning signal against suppressing unpredictable variation, and estimate them from route-level gradient statistics and an explicit noise model. In a controlled system with known gradient signal-to-noise ratio (SNR), we show that distant gradients can grow even as their SNR falls, and that Internal-DW reduces held-out error in recovering predictable gradient signals and improves forecasting. On four history-dominated, weak-drive testbeds, Internal-DW reduces forecast error by 5.2%-13.8% relative to full BPTT, outperforms gradient clipping and Jacobian regularization on all four, and outperforms validation-selected truncated BPTT (TBPTT) on three. It also extends or preserves the fitted optimal training-horizon range across these four testbeds. Across the full benchmark suite, the current Internal-DW estimator has a clear applicability boundary: its benefit diminishes or reverses when usable history is limited or when the selected sampler fails to represent dominant drive-dependent variation. The results show that retaining long-horizon supervision does not require trusting every backward contribution equally.",
    "published": "2026-09-11T14:18:59Z",
    "updated": "2026-09-11T14:18:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12890"
  },
  {
    "id": "2609.12885",
    "title": "Learning Sign Language Recognition under Label Noise: A Study of Noise-Robust Losses for Isolated and Continuous Settings",
    "authors": [
      "Akihisa Shitara",
      "Yoichi Ochiai"
    ],
    "abstract": "In sign language recognition, the isolated (ISLR) classification loss treats a single label as ground truth, as does the frame-level auxiliary classifier over pseudo-labels we add to continuous (CSLR) methods, which lack one. Stylistic variation blurs ISLR annotation and the lack of temporal boundaries in CSLR forces pseudo-labels; both are noisy. We therefore apply symmetric and generalized cross entropy (SCE, GCE), robust alternatives to cross entropy (CE) from image classification, not to connectionist temporal classification but to the preceding single-label classifier. On ASL Citizen with injected symmetric noise on three backbones (three seeds for ST-GCN), robust losses cost at most 2.5 pt when labels are clean and beat CE by 2.9-10.0 pt in all six conditions at noise rate 0.2, one of which only after q was re-selected on dev. GCE gains more, but its optimal q does not transfer across backbones, whereas one SCE setting works in all nine conditions; both vary 2-11 times more than CE across runs, so a favorable point estimate does not establish stability. For CSLR (PHOENIX-2014) we report no gain; our frame-level targets carry a systematic assignment bias, making that study a diagnosis of a single configuration. At lambda_aux = 25 the pseudo-label CE auxiliary raises word error rate above the no-auxiliary baseline on VAC, CorrNet and SlowFastSign, and GCE/SCE improve on CE by 1.7-3.2 pt (three of six conditions return below that baseline). However, the three losses differ by more than an order of magnitude in effective gradient at a common lambda_aux: matching the initial gradient shrinks the gap to 0.4-0.9 pt, and lowering the CE weight alone already beats that baseline, so neither the degradation nor the improvement can be separated from the effect of the weight. We use only symmetric noise; multi-seed evaluation covers only ST-GCN and VAC isolated.",
    "published": "2026-09-11T14:11:20Z",
    "updated": "2026-09-11T14:11:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12885"
  },
  {
    "id": "2609.12874",
    "title": "VideoTok4D: A 4D-Aware Video Tokenizer for Compact World Representation",
    "authors": [
      "Xinyi Chen",
      "Hanxin Zhu",
      "Xijun Wang",
      "Xingrui Wang",
      "Sen Liang",
      "Xin Li",
      "Zhibo Chen"
    ],
    "abstract": "Video tokenizers have emerged as a cornerstone of modern video modeling, underpinning progress in compression, reconstruction and generation by mapping high-dimensional visual signals into compact latent spaces. However, despite this progress, current tokenization paradigms largely remain within the 2D visual domain, treating videos as image sequences rather than observations of an underlying dynamic 3D world. Consequently, the learned tokens inherit this observation-centric bias, limiting their capacity to compactly represent real-world 4D scenes. To mitigate this issue, we propose VideoTok4D, a novel 4D-aware video tokenizer for compact world representation. Specifically, our approach comprises three key designs: 1) a spatiotemporal disentanglement strategy that factorizes videos into static and dynamic tokens for holistic world modeling; 2) a track-aware dynamic attention mechanism that aggregates trajectory-aligned cues to promote cross-view motion consistency; and 3) Co4DGen, a diffusion prior learned over the resulting VideoTok4D token space for efficient 4D scene generation. Extensive experiments have demonstrated that our proposed method achieves state-of-the-art performance while requiring up to 4 orders of magnitude less storage than dense 4D representations. Moreover, the compact token space substantially shortens diffusion sequences, enabling efficient generation.",
    "published": "2026-09-11T14:03:02Z",
    "updated": "2026-09-11T14:03:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12874"
  },
  {
    "id": "2609.12871",
    "title": "A Multi-Vehicle Dataset with Camera, LiDAR, and Radar Sensors and Scanned 3D Models for Custom Auto-Annotation using RTK-GNSS",
    "authors": [
      "Philipp Berthold",
      "Bianca Forkel",
      "Mirko Maehlisch"
    ],
    "abstract": "Datasets are a crucial element in the development of perception algorithms. They relate sensor measurement data to annotated reference information and allow for the deduction of sensor and object characteristics. In autonomous driving, the reference data commonly consist of semantic image segmentation, point-wise associations, or bounding box annotations. The dataset proposed in this work, however, aims to dig deeper into the evaluation of measurement principles and provides scanned 3D models of all vehicles together with a pose and continuous kinematics reference obtained by RTK-GNSS. Combined, the state of the complete dynamic surrounding of the sensor vehicle is known for any point in time. Subsequent reference formats can be easily computed in user-defined granularity. This dataset involves single-object and multi-object recordings with seven target vehicles. In particular, measurement effects such as occlusion, as well as reflections, can be evaluated, as the normals of the shape of the target vehicles are known. We describe the dataset, discuss the technical background of its development, and briefly present exemplary evaluations.",
    "published": "2026-09-11T13:55:30Z",
    "updated": "2026-09-11T13:55:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.12871"
  },
  {
    "id": "2609.12860",
    "title": "3D CT-to-PET Translation via Latent Brownian Bridge Diffusion",
    "authors": [
      "Sarita Mourya",
      "Francesco Di Feola",
      "Pierangelo Veltri",
      "Paolo Soda"
    ],
    "abstract": "Computed tomography (CT) and positron emission tomography (PET) provide complementary anatomical and functional information for cancer diagnosis and treatment planning. However, the widespread use of PET is limited by high radiation exposure, elevated costs, and restricted availability. To address these limitations, deep learning-based CT-to-PET translation has emerged as a promising approach for synthesizing PET-like information directly from CT images, although accurately modeling the large cross-modal gap remains challenging. In this work, we propose a 3D CT-to-PET translation framework based on latent Brownian Bridge Diffusion (BBDM). The method consists of two stages. First, a Variational Autoencoder (VAE) is trained on paired CT-PET patches, integrating contrastive learning to improve latent alignment between anatomical and metabolic representations. Second, a BBDM is trained in the latent space to translate CT latent representations into their corresponding PET counterparts. The translated PET latents are then decoded and stitched to reconstruct the final 3D PET volume. We evaluate the proposed approach on two publicly available datasets. Quantitative results based on image fidelity and lesion-level PET-specific metrics demonstrate improved performance compared with competing methods. In particular, the proposed approach improves PET signal fidelity, better preserves clinically relevant uptake patterns, and shows improved performance in preserving small-lesion metabolic activation, paving the way for virtual imaging applications.",
    "published": "2026-09-11T13:47:50Z",
    "updated": "2026-09-11T13:47:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12860"
  },
  {
    "id": "2609.12851",
    "title": "MedRoundsQA: A Persona and Difficulty Aware Evaluation for Multi-Turn Medical Consultations",
    "authors": [
      "Youssef Mohamed",
      "Ahmed Heakl",
      "Qinrong Cui",
      "Junhong Liang",
      "Rafiq Ali",
      "Bdour Babillie",
      "Nazira Dunbayeva",
      "Lang Gao",
      "Omar Hussein",
      "Ahmed Nada",
      "Ahmed Mohamed Magdy Mohamed",
      "Jinghui Liu",
      "Salman Khan",
      "Imran Razzak",
      "Yuxia Wang",
      "Xiuying Chen"
    ],
    "abstract": "Medical benchmarks are dominated by single-turn, multiple-choice clinical cases that poorly reflect real consultations. Practically, clinicians elicit evidence interactively and patient communication varies widely. We introduce MedRoundsQA, a multi-turn diagnostic benchmark derived from 1,387 board-exam cases across 17 specialties. Each case is converted into a structured 24-slot clinical record, and then instantiated as controlled doctor-patient dual-agent dialogues under varying patient personas, with the underlying clinical content held fixed. We further classify cases by difficulty using model-based uncertainty to enable easy-to-hard analysis. Evaluations of fifteen LLM doctor agents show that (i) moving from a single-turn diagnosis on the standardized records to multi-turn consultations causes large degradations of roughly 13-39 points; (ii) more turns reliably improves question relevance, but diagnostic accuracy exhibits diminishing returns and typically plateaus after 6-12 turns; and (iii) patient persona differences can shift diagnosis accuracy by about 7-8 points (lowest to highest education), highlighting equity risks that single-turn benchmarks miss.",
    "published": "2026-09-11T13:41:53Z",
    "updated": "2026-09-11T13:41:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12851"
  },
  {
    "id": "2609.12850",
    "title": "MGAvatar: Mesh-Bound Gaussians for Head Avatar Geometry and Appearance Modeling",
    "authors": [
      "Lei Shi",
      "Sen Peng",
      "Zhiyang Deng",
      "Zhonggui Chen",
      "Xiaohu Guo",
      "Baorong Yang",
      "Xiao Dong"
    ],
    "abstract": "Accurate head modeling requires a stable yet expressive geometric representation. Existing Gaussian-based head avatars commonly rely on parametric templates (e.g., FLAME) for Gaussian initialization and deformation, but these templates lack personalized priors and struggle to represent structures such as hair and clothing. To address this issue, we propose MGAvatar, a Gaussian-mesh hybrid representation that jointly models geometry and appearance through two Gaussian-mesh binding modes. Specifically, we introduce vertex-bound Gaussians and constrain their learnable parameters, enabling progressive mesh deformation to represent complex head geometry, while a pose-dependent offset module accounts for non-rigid deformations. Once geometry is stabilized, MGAvatar switches to face-bound Gaussians for appearance modeling. To improve appearance consistency across novel poses and viewpoints, we introduce a view-conditioned neural color field that alleviates artifacts caused by independently optimized Gaussian colors. In addition, we design a Gaussian offset network to predict Gaussian offset maps in the observation space, providing greater flexibility for face-bound Gaussians to capture dynamic facial textures. Extensive experiments on multi-view and monocular videos show that MGAvatar outperforms existing methods in rendering quality, producing high-fidelity head avatars with rich texture details.",
    "published": "2026-09-11T13:41:06Z",
    "updated": "2026-09-14T11:23:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12850"
  },
  {
    "id": "2609.12843",
    "title": "Pre-Trained Low-Rank Tensor Decomposition for Multi-Dimensional Image Recovery",
    "authors": [
      "Bing-Zhang Fu",
      "Zhi-Long Han",
      "Ting-Zhu Huang",
      "Xi-Le Zhao",
      "Deyu Meng"
    ],
    "abstract": "Recently, tensor decompositions are prevalent for multi-dimensional image representation, which learn the instance-specific structure of each image from scratch. However, tensor decompositions neglect the common structure across different images, leading to limited semantic modeling capability, high computational cost, and a large number of learnable parameters. To address this challenge, we suggest the first pre-trained low-rank tensor decomposition (PLTD) framework, which organically integrates the pre-trained large vision model into the classical tensor decomposition framework. Beyond the shallow and untrained deep tensor decomposition, the suggested PLTD achieves an unprecedented balance among higher recovery fidelity, fewer learnable parameters, and smaller carbon footprint. Specifically, PLTD factorizes the target tensor into a latent tensor and a learnable transform that maps the latent tensor back to the original data domain. The latent tensor consists of two indispensable and complementary terms, i.e., a fixed pre-trained latent tensor and a learnable low-rank latent tensor. The fixed pre-trained latent tensor is distilled from a pre-trained large vision model (i.e., DINOv3) to capture the common structure of the target tensor, while the learnable low-rank latent tensor characterizes the instance-specific structure of the target tensor. To examine the potential of PLTD, we develop the corresponding multi-dimensional image recovery model and theoretically justify the advantages of this framework. Additionally, we discuss the connections between PLTD and classical tensor decomposition frameworks. Extensive experiments on multi-dimensional image recovery demonstrate that PLTD consistently achieves superior performance compared with state-of-the-art methods.",
    "published": "2026-09-11T13:36:36Z",
    "updated": "2026-09-11T13:36:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12843"
  },
  {
    "id": "2609.12841",
    "title": "A Graph-Based Approach for Mapping Kernel-Level Telemetry to MITRE ATT&CK",
    "authors": [
      "Matteo Lupinacci",
      "Luigi Arena",
      "Francesco Blefari",
      "Angelo Furfaro"
    ],
    "abstract": "Mapping observed system behavior to standardized frameworks like MITRE ATT&CK is essential for threat-informed defense, but remains largely manual. Existing automated methods depend on Cyber Threat Intelligence reports, which offer only retrospective accounts of attacks. Low-level telemetry, i.e. kernel-level system calls, instead provides evidence of adversary behavior, yet its volume and complexity have limited its use for automated mapping. We present a methodology that collects kernel-level events via eBPF, correlates attacker commands into a provenance graph, and derives compact graph representations suitable for LLM-based reasoning. These representations are mapped to the MITRE ATT&CK framework using both pure LLM prompting and retrieval-augmented generation (RAG) grounded in the ATT&CK knowledge base, producing ranked technique candidates along with supporting rationales. We implement this methodology as an end-to-end pipeline, named Trace2ATT&CK and evaluate it on 347 Linux Atomic Red Team tests using locally deployed open-weights LLMs. RAG consistently improves ATT&CK mapping performance over pure prompting, while provenance graph substantially outperforms raw telemetry. These results show that local inference over graph-based behavioral descriptions can make automated ATT&CK mapping from kernel-level telemetry operationally viable, without compromising data confidentiality.",
    "published": "2026-09-11T13:35:27Z",
    "updated": "2026-09-11T13:35:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12841"
  },
  {
    "id": "2609.12839",
    "title": "Evaluating Context Segmentation in Locally Deployable SLMs for Cybersecurity CTF Tasks",
    "authors": [
      "Sebastiano Nordio",
      "Michele Lotto"
    ],
    "abstract": "The proliferation of highly capable open-weight Small Language Models (SLMs) democratizes access to advanced cybersecurity capabilities, posing a escalating risk as these models can bypass proprietary API guardrails when deployed locally. However, SLMs deployed as autonomous agents often struggle with long-horizon, exploratory tasks like cybersecurity Capture The Flag (CTF) challenges due to context bloat and cognitive degradation from accumulated tool-call outputs. To understand and mitigate this cybersecurity threat, we introduce context segmentation, a two-level agentic framework that divides complex exploitation tasks into manageable, contextually isolated sub-problems. Evaluating on the picoCTF dataset using memory-constrained gemma-4 models, we demonstrate that for the E4B model, our strategy acts as an intelligent search, achieving competitive rewards with superior token efficiency compared to brute-force retries, and successfully solving 18.52% of tasks that standard agentic execution fails to complete. Code is available at https://github.com/9xeb/context-segmentation.",
    "published": "2026-09-11T13:34:48Z",
    "updated": "2026-09-14T16:33:10Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12839"
  },
  {
    "id": "2609.12835",
    "title": "HemaHier: Chain-Conditioned Ordinal Hierarchies for Lineage-Aware Bone-Marrow Cytology",
    "authors": [
      "Afshin Bozorgpour",
      "Peter Schüffler",
      "Edgar Jost",
      "Dorit Merhof"
    ],
    "abstract": "Bone-marrow cytology is inherently structured: each cell belongs to a hematopoietic lineage, and many cell types lie on ordered maturation trajectories. Standard flat classifiers ignore this structure, treating a mild same-lineage confusion the same as a severe cross-lineage mistake and predicting only discrete labels. We propose HemaHier, an ordinal-hierarchical prediction head for a frozen or lightly adapted cytology foundation model. Its central component is a chain-conditioned maturity score that reads a single maturity value under a per-chain query, supervised only on biologically valid healthy chains, while dysplastic and off-chain cell types remain classes but are excluded from maturity supervision. Fine and lineage predictions are coupled through a shared posterior that guarantees hierarchical consistency, and a staged objective first stabilizes recognition, then adds lineage and maturity supervision. On three bone-marrow datasets under a shared ontology, HemaHier achieves competitive recognition while reducing biologically severe errors and adding a within-lineage maturity ordering that flat classifiers lack. Code is available at https://github.com/xmindflow/HemaHier.",
    "published": "2026-09-11T13:30:20Z",
    "updated": "2026-09-11T13:30:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12835"
  },
  {
    "id": "2609.12834",
    "title": "Self-supervised Pre-training Helps Retinal Disease Progression Modelling Most When Data Is Scarce",
    "authors": [
      "Ifeoma Veronica Nwabufo",
      "Julius Gervelmeyer",
      "Sarah Müller",
      "Philipp Berens"
    ],
    "abstract": "Modelling how a disease progresses over time requires longitudinal imaging cohorts, which are scarce and small, whereas cross-sectional data -- one image per participant -- is abundant. Self-supervised pre-training on such data offers a way to bridge this gap, but it is unclear which strategy best supports progression modelling, or how that answer depends on the amount of labelled longitudinal data. We study this for age-related macular degeneration (AMD), pre-training encoders on the large cross-sectional NAKO cohort and predicting time to late AMD on the longitudinal AREDS dataset. We compare in-house self-supervised encoders against a general-purpose (DINOv2) and a domain-specific (RETFound) foundation model, across contrastive, masked-autoencoding, and self-distillation objectives, under frozen and fine-tuned protocols, and across labelled training sets from 100 to 32,250 examples. Which model performs best depends on how the encoder is used. When the encoder is frozen and labels are few -- the regime typical of longitudinal cohorts -- pre-trained representations reach clinically reasonable discrimination from a few hundred labelled samples, while models trained from scratch do not; this advantage fades under fine-tuning. Transfer is governed by the self-supervision objective rather than corpus scale or domain match, so that an encoder pre-trained on a modest cross-sectional cohort matches or exceeds a far larger in-domain foundation model. Together, these results offer a practical recipe for building progression models where longitudinal data is scarce: a frozen self-supervised encoder with a lightweight survival head.",
    "published": "2026-09-11T13:28:36Z",
    "updated": "2026-09-11T13:28:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12834"
  },
  {
    "id": "2609.11739",
    "title": "LOCUS: Task-Aware Low-Rank Post-Training for Token-Efficient Language Generation",
    "authors": [
      "Dongfang Zhao"
    ],
    "abstract": "Large language model serving costs scale directly with output sequence length, yet standard preference alignment often inflates response verbosity without improving utility. We study whether the parameterization of post-training updates affects generation length: low-rank subspaces alter sequence length without modifying the alignment loss. We present LOCUS, a method that selects a task-aware low-rank adaptation subspace to minimize output-token cost subject to a utility constraint. Within this subspace, post-training retains the native preference objective with a frozen backbone. Across Anthropic HH-RLHF dialogue preferences, we evaluate two $\\sim$3B decoder backbones, Pythia-2.8B and Qwen2.5-3B, against protocol-matched full-parameter DPO and DrDPO branches and the released SamPO checkpoint. LOCUS reduces continuation length by up to 39.84\\% on Pythia-2.8B and by 14.87--17.58\\% on Qwen2.5-3B while updating only 0.24--0.28\\% of model parameters, with no material change in the internal preference diagnostic.",
    "published": "2026-09-10T15:53:25Z",
    "updated": "2026-09-10T15:53:25Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.11739"
  },
  {
    "id": "2609.11737",
    "title": "ORCH: Organizational Principles Enable Collective Intelligence in Embodied AI",
    "authors": [
      "Zhengran Ji",
      "Jonathan Hyun",
      "Boyuan Chen"
    ],
    "abstract": "Collective intelligence depends not only on the capabilities of individual members, but also on how those members are organized. Yet artificial multi-agent systems are typically assembled using fixed organizational structures, even when the physical tasks they perform impose fundamentally different coordination requirements. Here we show that principles from human organization theory can be operationalized to organize large, heterogeneous collectives of embodied artificial agents. We introduce ORCH (Organizing Roles and Coordination Hierarchies), which constructs task-specific hierarchical organizations by combining pooled interdependence for work that can proceed concurrently with sequential interdependence for work governed by prerequisite relationships. Across 25 wildfire-response missions spanning reconnaissance, rescue, transportation, resource management, containment and suppression, we evaluated teams of up to 50 heterogeneous agents using eight large language models. Organizations constructed using these principles consistently outperformed four representative embodied multi-agent approaches across mission outcome, execution efficiency, exploration and computational resource use. Human-designed ORCH organizations improved final score by 63.97% and execution efficiency by 74.29% on average relative to the four prior frameworks. Organizations generated automatically by language models improved these measures by 43.63% and 52.53%, respectively. These advantages persisted across missions and underlying language models. Notably, collective performance was not monotonically determined by model scale. Analysis of long-horizon missions showed that hierarchical organization enabled teams to preserve concurrent activity within specialized groups while coordinating ordered transitions between mission phases.",
    "published": "2026-09-10T15:52:35Z",
    "updated": "2026-09-10T15:52:35Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.11737"
  },
  {
    "id": "2609.11725",
    "title": "Continuous-Time Acoustic Modelling with Neural Controlled Differential Equations",
    "authors": [
      "Mattias Cross",
      "Minghui Zhao",
      "Anton Ragni"
    ],
    "abstract": "Text-to-speech (TTS) models commonly address text--speech alignment by expanding phone-level encoder states to frame-level decoder inputs using predicted durations. While this length-regulation step resolves alignment structurally, this use of duration typically changes only where and how often latent states appear, not the values of the states themselves. This paper proposes a continuous-time mechanism for duration-aware acoustic modelling in TTS using neural controlled differential equations (CDEs). We formulate the phone representation as a temporally parameterised control path and use a neural acoustic vector field to produce a continuous-time hidden state whose values evolve with phonetic content and duration-derived timing. The resulting trajectory can be sampled at discrete points and integrated into a standard acoustic decoder pipeline. Objective results contrast CDEs and typical recurrent models. Subjective results suggest that CDE-based models evaluating one phone per step can improve rank-order agreement between synthesised and reference emotion intensity while maintaining comparable emotion-expression quality to a strong baseline. Additional experiments with half-phone step-sizes suggest that temporal resolution changes the trade-off between style tracking and absolute calibration. These results position CDEs as a promising design space for continuous-time and duration-aware style-sensitive TTS.",
    "published": "2026-09-10T15:41:32Z",
    "updated": "2026-09-10T15:41:32Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11725"
  },
  {
    "id": "2609.11477",
    "title": "Pre- and Post-Treatment Brain Metastases Segmentation Using nnU-Net with Post-Processing for BraTS 2026",
    "authors": [
      "Haobin Liu",
      "Xin Wang"
    ],
    "abstract": "Brain metastases exhibit high inter-lesion variability in size, enhancement pattern, and post-treatment appearance, making volumetric segmentation of both pre- and post-treatment cases the central challenge of the BraTS 2026 Task 1 (Brain Metastases). We build a pragmatic pipeline on a 5-fold nnU-Net ResEnc-L ensemble, in which each fold is trained independently for 1,000 epochs with the standard Dice + cross-entropy loss on 1,296 four-modality training cases. This ensemble is followed by a rule-based post-processing cascade tuned for the lesion-wise Dice similarity coefficient (LW-DSC), a detection-oriented metric that behaves very differently from the traditional global Dice. The final pipeline reaches an LW-DSC of 0.733 / 0.751 / 0.713 / 0.549 on the enhancing tumour (ET), tumour core (TC), whole tumour (WT), and resection cavity (RC) sub-regions on the official validation leaderboard. Rather than trusting these leaderboard gains, we audit every post-processing stage with a five-fold out-of-fold (OOF) analysis with no model-training leakage over all 1,296 training cases, scored with the official BraTS evaluation code (BraTS_evaluation): it confirms two stages as robust, per-fold-consistent improvements while the third improves only the leaderboard and does not reproduce out-of-fold. We further provide a mechanistic analysis of the LW-DSC metric that explains why recall-recovering post-processing carries low risk whereas component deletion does not, and we report thirteen negative results spanning loss engineering, alternative backbones, and inference-time settings, several of which run counter to widely held intuitions. Source code is released under Apache-2.0 at https://github.com/hornbeamliu/brats2026-met.",
    "published": "2026-09-10T12:43:04Z",
    "updated": "2026-09-10T12:43:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11477"
  },
  {
    "id": "2609.11472",
    "title": "BridgeMatch: Conditional Transport Bridges in Matching Matrix Space for 3D Deformable Registration",
    "authors": [
      "Qianliang Wu",
      "Haobo Jiang",
      "Guangwei Gao",
      "Shuo Chen",
      "Jin Xie",
      "Jian Yang",
      "Yaqing Ding"
    ],
    "abstract": "Reliable non-rigid point cloud correspondences are important for deformable anatomical registration, embodied perception and manipulation, and dynamic 3D reconstruction. Coarse-to-fine methods reduce computational cost by selecting the top-\\(K\\) coarse regions. However, this pruning may remove weak but correct hypotheses and restrict fine matching to an incomplete search space. We present \\paper, a two-stage generative solver that maintains the complete soft matching matrix at both coarse and high resolutions. Stage~I uses denoising diffusion to estimate a global matching matrix in the compact coarse-resolution space. We then lift this matrix to high resolution while preserving its hierarchy. The lifted matrix is rank-bounded and block-constant. Stage~II refines it through a conditional transport bridge. We implement the bridge with two types of dynamics: a deterministic endpoint-parameterized conditional Flow Matching (CFM) ODE and a stochastic Brownian-bridge SDE inspired by Schrödinger bridges. Both variants share the lifted source, a time-conditioned transformer, and a matching-matrix endpoint predictor. Experiments on 4DMatch and 4DLoMatch show that both variants produce more accurate correspondences than the compared methods and improve downstream registration, with larger gains in low-overlap cases. They also improve cross-dataset generalization on CAPE and DeepDeform without target-domain adaptation while using the same deformation solver.",
    "published": "2026-09-10T12:39:58Z",
    "updated": "2026-09-10T12:39:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11472"
  },
  {
    "id": "2609.11463",
    "title": "BruNet: A Cross-Domain Transfer Framework for Bruise Segmentation",
    "authors": [
      "Qiming Wang",
      "Richard J. Motley",
      "Ebube E. Obi",
      "Xianfang Sun",
      "Paul L. Rosin"
    ],
    "abstract": "Segmenting bruises is a challenging task in medical imaging due to limited data and annotations, diffuse boundaries, and highly variable appearance. In this work, we propose BruNet, a segmentation framework that combines a ViT-based visual encoder (a self-supervised DINOv3 or a pretrained LingBot-Vision backbone) with a SAM-based mask decoder. BruNet is trained on the HAM10000 skin lesion dataset and evaluated on a separate bruise dataset without additional fine-tuning. Although a small number of prior studies have explored machine learning and computer vision for bruise analysis, existing work has primarily focused on detection, classification, or colour analysis rather than pixel-level localisation. To the best of our knowledge, this is the first study to address automatic bruise segmentation. Our results show that BruNet outperforms CNN-based models, state-of-the-art segmentation models, ChatGPT-4o/5-assisted SAM2 zero-shot baselines, and the medical-oriented MedSAM model, demonstrating strong cross-domain generalisation to bruise segmentation.",
    "published": "2026-09-10T12:35:20Z",
    "updated": "2026-09-10T12:35:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11463"
  },
  {
    "id": "2609.11458",
    "title": "Flexible and Interpretable Accent Distance Measurements",
    "authors": [
      "Charles McGhee",
      "Mark J. F. Gales",
      "Kate M. Knill"
    ],
    "abstract": "Determining the differences between two speakers' accents is a fundamental task in linguistics and speech technology research. The methodology used to measure these differences depends on the specific research area. A phonetics researcher may demonstrate accent variation by comparing vowel formants in paired recordings of individual words. These results will be interpretable, but the recordings will be time-consuming to collect and may not be representative of connected speech. Accented Text-to-Speech (TTS) research has pushed towards using accent embeddings derived from accent classification tasks. These embeddings can be produced from any speech recording, but are not readily interpretable. In this paper, we demonstrate that articulatory representations created through articulatory inversion can be used as an interpretable basis for accent comparison and that optimal transport provides a framework for accent comparison across arbitrary recording types.",
    "published": "2026-09-10T12:32:13Z",
    "updated": "2026-09-10T12:32:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11458"
  },
  {
    "id": "2609.11452",
    "title": "RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization",
    "authors": [
      "Binghao Ji",
      "Di Huang",
      "Jiahui Fang",
      "Zhiyuan Liu"
    ],
    "abstract": "Efficient routing optimization is essential to freight transportation, urban logistics, and shared mobility, where high-quality heuristics are often required under limited computational budgets. Recent large language model (LLM)-based automated heuristic design methods can generate effective routing rules, but aggregate evaluation may mask recurrent failures on particular instance structures. To address this limitation, this study develops RouteRepair, which diagnoses parent-specific weaknesses from instance-level performance and applies targeted modifications to the corresponding heuristic components while protecting behavior that already performs well. Routing evidence, solver behavior, and program context are combined to define bounded repair objectives, and each intervention is validated through matched parent-child evaluation of failure recovery and collateral degradation. Experiments on the traveling salesman problem (TSP) and capacitated vehicle routing problem (CVRP) span constructive search, guided local search, and ant colony optimization. RouteRepair-GLS reduces the mean TSP optimality gap from 1.7476% to 0.7587%, while the constructive CVRP heuristic lowers average route cost by 1.91% relative to the savings heuristic; the generated ACO priors also outperform matched hand-designed priors. These results show that failure-aware, evidence-constrained refinement can improve routing heuristics on difficult instances while preserving performance on cases they already solve well.",
    "published": "2026-09-10T12:21:18Z",
    "updated": "2026-09-10T12:21:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11452"
  },
  {
    "id": "2609.11450",
    "title": "Cross-Lingual Clinical Annotation Projection as Constrained Text Generation: A Six-Language Study",
    "authors": [
      "Álvaro Rey-Blanes",
      "Francisco J. Moreno-Barea",
      "Francisco J. Veredas"
    ],
    "abstract": "Background: To determine whether cross-lingual clinical annotation projection can be formulated as a text-preserving, document-level generative task that produces verifiable character-level annotations for multilingual clinical corpus construction, and to characterize its robustness and computational trade-offs relative to candidate-based projection pipelines. Methods: We developed a constrained LLM projection workflow that inserts entity tags directly into immutable target-language text, followed by deterministic validation and character-offset reconstruction. We evaluated it alongside supervised candidate-span projection and hybrid ML-LLM refinement for transferring Spanish Disease, Symptom, and Procedure annotations into six languages. Evaluation used MultiClinAI gold standard with strict span matching and character-overlap F1 Results: Direct LLM projection achieved the strongest and most consistent performance. GLM 5.2 obtained a mean Strict F1 of 0.9201 across 18 language-entity combinations, while locally deployable Gemma4:31B achieved 0.9133. The best LLM configuration improved Strict F1 over the previous state of the art in all 18 settings, by 0.0564-0.1512, yielding 55,416 grounded mentions with reconstructed offsets. Conclusions: Direct LLM-based projection enables high-quality multilingual clinical annotation transfer and provides a practical approach for extending clinical NLP resources to languages with fewer annotated datasets and language-specific tools. Combined with local inference and deterministic validation, it can substantially reduce expert time and cost for multilingual clinical corpus construction.",
    "published": "2026-09-10T12:17:52Z",
    "updated": "2026-09-10T12:17:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11450"
  },
  {
    "id": "2609.11449",
    "title": "Prevalence Determines Precision:Silent Contamination in Detector-Defined Datasets",
    "authors": [
      "Jia Huang",
      "Yankai Wan",
      "Yangjun Ou"
    ],
    "abstract": "Many ML datasets are constructed by running a detector, heuristic, or model over candidate pools; accepted items become labels. Dataset precision is then governed by true-positive prevalence in each pool via Bayes, not solely by detector quality. Using one instrument and period, we hold a detector-defined event dataset plus an independent official index labeling every detected item as real or phantom. One detector, three pools yield phantom rates 81.7%, 9.0%, and 0.0%. Transferring precision from the two high-rate pools to the low-rate pool predicts 0.955 versus measured 0.183, a +422% error; the Bayes expression predicts all three within 3.3%. The detected response curve is an exact convex combination of a true-event and a phantom component (residual 1.1e-16), with phantoms outnumbering true events 473 to 308, so contamination is a second signal with detector-inherited shape, not additive noise. Contamination direction depends on the estimator: on identical windows one statistic is diluted and another inflated because its denominator is also contaminated. A common normalization turns the estimator into a mean of ratios whose expectation need not exist; on the same 335 events it returns 0.40 where the well-defined estimator returns 0.10.",
    "published": "2026-09-10T12:17:44Z",
    "updated": "2026-09-10T12:17:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11449"
  },
  {
    "id": "2609.11447",
    "title": "Investigating catastrophic forgetting in sound event classification",
    "authors": [
      "Riccardo Casciotti",
      "Annamaria Mesaros"
    ],
    "abstract": "This work investigates a number of approaches to prevent catastrophic forgetting in class incremental learning scenarios for sound event classification tasks. We analyze the problem using architectural and regularization approaches, using FSD50K and AudioSet datasets. We design incremental stages and solutions that selectively protect the kernels of the network from weight updates to prevent catastrophic forgetting, and a dynamic head solution that expands itself each time a new task is learned. The findings show that catastrophic forgetting mainly happens in deeper layers, in particular in the classifier head. For the studied in-domain sound classification problem, the solution that seems to alleviate catastrophic forgetting and is the most efficient is a full freezing of the feature extractor with a fine-tuning of the dynamic head classifier, showing little to no forgetting and great training stability, and a good balance between memory-stability and learning plasticity.",
    "published": "2026-09-10T12:16:56Z",
    "updated": "2026-09-10T12:16:56Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.11447"
  },
  {
    "id": "2609.11446",
    "title": "Calibration-Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration",
    "authors": [
      "Yilin Zhang",
      "Han Jiang",
      "Cai Xu",
      "Ying Liu",
      "Wei Zhao"
    ],
    "abstract": "Heterogeneous model collaboration seeks to exploit the complementary strengths of different models to balance predictive performance and inference cost. Existing approaches typically rely either on trained routers, which tie routing decisions to a fixed task and model pool, or on raw-confidence cascades, whose thresholds lack consistent reliability semantics across heterogeneous models. Consequently, these approaches adapt poorly to changing model pools and deployment budgets. We propose Calibration-Aware Uncertainty Cascades (CAUC), a simple post-hoc framework that independently calibrates each model's confidence and selects deployment policies using validation data. The resulting calibrated confidence scores establish a common reliability scale for accepting an early prediction, invoking a stronger model, or selectively combining model outputs. This unified decision criterion decouples deployment policies from any particular model pool or operating budget. We further show theoretically that calibration gives confidence thresholds an explicit selective-risk interpretation, whereas uncalibrated scores offer no comparable reliability guarantee. Extensive experiments demonstrate that, across six language benchmarks, CAUC achieves an average relative accuracy improvement of 1.9% over strong-model-only inference while avoiding approximately 47% of strong-model calls. On image classification benchmarks, it maintains or improves predictive performance while reducing measured GFLOPs by up to 57%.",
    "published": "2026-09-10T12:14:54Z",
    "updated": "2026-09-10T12:14:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11446"
  },
  {
    "id": "2609.10366",
    "title": "AVSRBench: A Multi-Condition AVSR Benchmark",
    "authors": [
      "Rishabh Jain",
      "Naomi Harte"
    ],
    "abstract": "While AVSR has achieved sub-1% word error rates on the standard LRS3 benchmark, its reliance on broadcast speech obscures whether this reflects true generalization or just domain adaptation. To investigate this gap, we evaluate three AVSR architectures across six conditions: controlled broadcast speech, fixed-grammar utterances, hyper-articulated Lombard speech, read speech from professional lipspeakers and non-professional speakers, and spontaneous multi-party video conversations. We find that visual-only performance deteriorates rapidly beyond broadcast domains, and audio-video fusion mainly benefits Lombard speech environments. Visual understanding degrades sharply at 90° profile views, with multimodal systems relying largely on acoustic fallback. Additionally, speaker articulation proves more critical than minor camera shifts, and LLM-based architectures suffer from poor out-of-domain generalization. Our work highlights a significant generalization gap in current AVSR research. To address this, we also introduce RoomReader-AV as a new benchmark for AVSR and release a unified data preprocessing pipeline to make comprehensive multi-condition evaluation accessible.",
    "published": "2026-09-09T15:58:44Z",
    "updated": "2026-09-09T15:58:44Z",
    "categories": [
      "eess.AS",
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.10366"
  },
  {
    "id": "2609.10364",
    "title": "OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis",
    "authors": [
      "Ayush Debnath",
      "Ruelia Saha",
      "Sudip Misra"
    ],
    "abstract": "Simultaneous assessment of medical imaging and patient records is often required in clinical diagnosis. However, standard machine learning algorithms cannot analyze these data types together. Meanwhile, compliance with HIPAA and GDPR can constrain centralized aggregation of sensitive patient data. This leaves a crucial void of secure fusion of visual and textual context across distant networks. Thus, we present OmniMed-FL, a controlled systems study of multimodal federated learning for five-class clinical condition classification (Normal, Pneumonia, COVID-19, Pleural Effusion, Cardiomegaly). Our proxy corpus pairs 3,000 public chest radiographs with 3,000 class-conditioned synthetic notes, matched by class, not by patient. The framework benchmarks eight fusion strategies, three initializations, four missing-text imputation rules, and matched federated baselines under non-IID Dirichlet partitioning across 3 to 20 hospital clients. As all notes are synthetic and pairing is not patient-level, these are descriptive proxy comparisons, not estimates of diagnostic performance or deployment readiness. Within those limits with clients ($K=5$) and severe skew ($α=0.1$), local-only training achieves a macro-F1 score of 0.297, FedAvg achieves $0.662\\pm0.074$, FedProx $0.737\\pm0.085$, a matched FedMME-style one-shot ensemble $0.647\\pm0.080$, and our SCAFFOLD-AdamW adaptation $0.070\\pm0.015$, the 0.075 FedProx-FedAvg gap falling inside the wider of the two two-seed standard deviations. Over a $4\\times3$ grid, label skew costs up to 0.27 F1 whereas a near-sevenfold client increase costs at most 0.10, while bidirectional volume grows linearly to 183.5 GiB at $K=20$. Multimodal fusion leads on both corpora, scoring 0.956 against 0.934 for text and 0.664 for images on the synthetic corpus and 0.906 against 0.880 and 0.737 on the radiograph corpus, for $2.3\\times$ the model state of text alone.",
    "published": "2026-09-09T15:56:26Z",
    "updated": "2026-09-09T15:56:26Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10364"
  },
  {
    "id": "2609.10363",
    "title": "SceneHI: High-Resolution 3D-Consistent Scene Texturing with Controllable Illumination",
    "authors": [
      "Athanasios Tragakis",
      "Marco Aversa",
      "Daniela Ivanova",
      "Chaitanya Kaul",
      "Roderick Murray-Smith",
      "Daniele Faccio",
      "Paul Henderson"
    ],
    "abstract": "SceneHI is a framework that lifts high-resolution, illumination-aware priors from 2D diffusion models to perform 3D texture synthesis. It is the first to demonstrate that high-resolution textures, previously limited to 2D synthesis, can be generated directly on 3D objects without model fine-tuning or optimization. Designed for complex, multi-object environments, SceneHI uniquely combines 3D-consistency, high-resolution fidelity, and physically plausible baked shadows within a single generative pipeline. To enforce strict geometric coherence, we introduce an exact analytical pixel-to-texel mapping that aligns diffusion trajectories across multiple viewpoints. We utilize High-Resolution Latent Textures (HRLTs) as a persistent canvas for gradually denoised textures, while camera views perform the denoising steps in latent pixel space. This ensures a shared base texture that can be subsequently refined to high resolution without compromising multi-view consistency. Finally, a light-aware generative pass embeds realistic geometry-consistent shadows directly into the atlases, bridging the gap to production workflows. SceneHI achieves high visual fidelity while reducing generation time by 80% compared to existing scene-level methods.",
    "published": "2026-09-09T15:56:02Z",
    "updated": "2026-09-09T15:56:02Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.10363"
  },
  {
    "id": "2609.10356",
    "title": "Spot-the-shift: Evaluating Grounded Image Difference Captioning of Long-term Changes",
    "authors": [
      "Benedetta Liberatori",
      "Nermin Samet",
      "Paolo Rota",
      "Matthieu Cord",
      "Elisa Ricci",
      "Andrei Bursuc",
      "Monika Wysoczańska"
    ],
    "abstract": "Long-term change understanding from images of the same place revisited over time is a challenging task with applications in map maintenance and urban infrastructure monitoring. Prior work addresses it either through pixel-level prediction or difference captioning, neither of which is sufficient to reliably measure how well models detect and describe such changes. We introduce SPOT-THE-SHIFT, a human-verified benchmark for grounded image difference captioning of long-term changes in real-world driving scenes. Our benchmark provides natural language captions and spatial masks for structural changes across each image pair. We further propose an evaluation protocol that reliably assesses models' captioning ability, validated through human studies. Benchmarking state-of-the-art MLLMs, we find that models struggle with the fine-grained multi-image spatial capability required for this task. Finally, we develop a synthetic data generation pipeline that improves an off-the-shelf MLLM without sacrificing general capabilities.",
    "published": "2026-09-09T15:52:04Z",
    "updated": "2026-09-09T15:52:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10356"
  },
  {
    "id": "2609.10261",
    "title": "When Fusion Fails: Corruption-Aware Rebalanced Fusion for Multi-Modal Medical Image Segmentation",
    "authors": [
      "Yuchen Pei",
      "Xiaoyu Hu",
      "Yixiong Zou",
      "Dingwen Hu",
      "Hui Chu",
      "Yutao Ma",
      "Shijun Qiu",
      "Gang Li"
    ],
    "abstract": "Multi-modal medical image segmentation leverages complementary diagnostic information, yet fusion can underperform single-modality baselines when spatially aligned inputs differ in quality. Here, \"corruption\" primarily denotes resolution-induced degradation rather than misalignment or complete modality absence, while synthetic noise is evaluated only as an auxiliary setting. We identify a critical optimization-inference inconsistency: degraded modalities can receive weak training updates yet substantially affect predictions, indicating active interference with fusion. We attribute this failure to resampling-induced feature corruption and optimization bias, where noisy features propagate through skip connections and encourage unreliable modality selection. We therefore propose CoReFuse-Med, a Corruption-aware Rebalanced Fusion framework that suppresses corruption during feature transmission and rebalances modality contributions during high-level fusion. Experiments on EPVS, BraTS, and WMH, including multiple Z-axis slice-retention ratios and an auxiliary noise test, demonstrate improved accuracy and robustness under modality-quality discrepancies. Our code is available at https://github.com/lrever/CoReFuse.",
    "published": "2026-09-09T14:46:37Z",
    "updated": "2026-09-09T14:46:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10261"
  },
  {
    "id": "2609.10253",
    "title": "DiSCo: A Distribution-First Steering and Cultural Prior Evaluation Framework for Measuring Cultural Preference Bias in LLMs",
    "authors": [
      "Bhuvan Arora",
      "Devesh Saraogi",
      "Sravya Varada",
      "Dhruv Kumar"
    ],
    "abstract": "Large language models (LLMs) are increasingly deployed in globally used assistants, yet their default choices in culturally grounded everyday situations can systematically favour some cultures over others, affecting localisation, user trust, and equitable behaviour. Existing cultural benchmarks evaluate accuracy against a single \"correct\" answer, making it difficult to characterise an LLM's cultural preference prior when multiple culturally grounded responses are all valid; they also conflate default preferences with context-driven adaptation. We propose DiSCo, a distribution-first forced-choice evaluation framework that isolates default cultural priors and tests steerability via a four-level context gradient (C0--C3). Using DiSCo-Bench (304 items) derived from BLEnD spanning 12 cultures, we evaluate six diverse instruction-tuned LLMs. Default priors are heavily concentrated, with UK and US together absorbing approximately 35\\% of all selections despite representing only 2 of 12 cultures. Most critically, prompt-based steering consistently widens the selection gap between high- and low-resource cultures, and injecting explicit cultural facts produces negligible distributional disruption, confirming that cultural preference bias cannot be resolved through prompt-based personalisation alone.",
    "published": "2026-09-09T14:40:08Z",
    "updated": "2026-09-09T14:40:08Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10253"
  },
  {
    "id": "2609.10248",
    "title": "A-JIT: Agentic Just-In-Time Software Construction",
    "authors": [
      "Mark Marron",
      "Earl T. Barr"
    ],
    "abstract": "Traditional software delivery assumes a static paradigm: code is constructed prior to execution and deployed as a fixed artifact. We present Agentic Just-In-Time Software Construction (A-JIT), a paradigm that replaces static binaries with dynamic, software systems that can perpetually evolve to meet changing demands. In A-JIT, an application is an integrated assembly comprising code, a runtime harness, and an embedded AI agent that continuously observes system usage and live execution traces. Much like a traditional JIT compiler specializes machine code to runtime execution paths, A-JIT specializes software logic, workflows, and tool interfaces to meet the specific needs of the end-user. By integrating synthesis directly into the ambient application lifecycle, A-JIT enables applications to dynamically construct missing implementations, generate new capabilities on the fly, and continuously adapt to end-user behavior. We demonstrate how this model supports trace-driven human-AI co-construction and opens a new design space for adaptive, self-evolving software.",
    "published": "2026-09-09T14:36:51Z",
    "updated": "2026-09-09T14:36:51Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10248"
  },
  {
    "id": "2609.10239",
    "title": "LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation",
    "authors": [
      "Daniel Alejandro Coll Tejeda",
      "Pedro García López",
      "Daniel Barcelona-Pons"
    ],
    "abstract": "Graph-based retrieval can improve multi-hop question answering, but existing approaches often incur high query-time costs and produce diffuse, oversized contexts that reduce generation efficiency. We present LiteRAG, a graph-based retrieval method that replaces expensive retrieval-time LLM control with query-conditioned algorithmic exploration and reasoning-chain context construction. On DistComp, a benchmark for multi-hop retrieval over distributed-systems papers, LiteRAG attains the highest overall quality among the evaluated methods (0.798) while reducing per-query latency by over 100$\\times$ and cost by over 99% relative to GraphRAG Global and DRIFT. On UltraDomain, it matches LinearRAG on overall quality while using about 14$\\times$ fewer tokens. An ablation study indicates that LiteRAG's query-adaptive thresholding and community-aware hub penalization are the main drivers of its token-efficiency gains.",
    "published": "2026-09-09T14:32:07Z",
    "updated": "2026-09-09T14:32:07Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.10239"
  },
  {
    "id": "2609.10225",
    "title": "Hierarchical and Permutation-Invariant Feature Transformation Learning via Policy-Guided Embedding Search",
    "authors": [
      "Rui Liu",
      "Tao Zhe",
      "Yanyong Huang",
      "Sankha Narayan Guria",
      "Xiao Luo",
      "Wei Fan",
      "Yanjie Fu",
      "Dongjie Wang"
    ],
    "abstract": "Feature transformation improves predictive performance on tabular data by constructing informative abstractions from raw features. Recent generative approaches encode transformation knowledge into continuous embedding spaces for efficient exploration of candidate strategies, but face three key limitations: (1) overlooking hierarchical relationships between low-level features, operations, and high-level abstractions; (2) enforcing order-sensitive embeddings on inherently permutation-invariant transformation sequences, thereby introducing systematic bias; and (3) relying on gradient-based search, which is ill-suited to non-convex transformation spaces. We propose a framework with two complementary components. First, a permutation-invariant hierarchical module captures interactions across features, operations, and abstraction levels, with a self-attention pooling mechanism that maps semantically equivalent structures to consistent embeddings aligned with downstream performance. Second, a policy-guided multi-objective reinforcement learning strategy initializes the search from empirically strong seeds and jointly optimizes predictive accuracy and transformation efficiency. Extensive experiments on diverse tabular benchmarks demonstrate the effectiveness and robustness of our framework against strong baselines. Our code and data are publicly available at: https://github.com/RayLiu1103/PHER.",
    "published": "2026-09-09T14:23:34Z",
    "updated": "2026-09-09T14:23:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10225"
  },
  {
    "id": "2609.10224",
    "title": "UOT-Gap: A Variational Principle for the Modality Gap in Vision-Language Models via Unbalanced Optimal Transport",
    "authors": [
      "Zonglin Yang",
      "Huilan Ma",
      "Xudan Zheng",
      "Yuejun Xie"
    ],
    "abstract": "Vision-language models such as CLIP embed images and text in a shared space, where modality-specific distributions often remain separated. Existing accounts connect this modality gap to initialization, contrastive dynamics, and information imbalance, while its distributional and pairwise contributions to retrieval remain unresolved. We introduce UOT-Gap, a training-free variational diagnostic that models frozen image and text embeddings with unbalanced entropic optimal transport (UOT). The UOT optimum separates transport, coupling complexity, and marginal mass variation; a complementary pair-aware residual compares observed image-caption pairs with the UOT soft matching. On Flickr8K and COCO-1K with frozen CLIP, OpenCLIP, and SigLIP encoders, caption degradation reduces Flickr8K Recall@1 from 0.559 to 0.003. Across six dataset-model conditions, the pair-aware residual tracks retrieval degradation with mean absolute Spearman 0.973, compared with 0.392 for the mean gap. The association remains stable across five random COCO-1K subsets at $0.954\\pm0.026$, with a minimum of 0.943. UOT barycentric updates reduce the transport objective while degrading retrieval, distinguishing geometric objective descent from task improvement. These results establish UOT-Gap as a diagnostic for caption quality, modality alignment, and retrieval robustness.",
    "published": "2026-09-09T14:23:13Z",
    "updated": "2026-09-09T14:23:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10224"
  },
  {
    "id": "2609.10221",
    "title": "Why Sample What You Can Enumerate? Exact Policy Optimization for Genomic Tool Selection",
    "authors": [
      "Haoyue Liu",
      "Xiaoyu Ma",
      "Ye Chen",
      "Zhichao Wang",
      "Xiaoying Tang"
    ],
    "abstract": "Reinforcement learning over a frozen reasoner has become a common recipe for teaching a policy which external tools to invoke. We show that this recipe becomes structurally mismatched in specialist scientific settings where the complete tool-subset space is enumerable. There, a small set of recurring computational capabilities covers the domain, so the space of tool subsets is combinatorial yet small enough to enumerate, and GRPO still estimates an action expectation from a handful of sampled rollouts. Worse, the approximation degrades as training succeeds: as the policy concentrates on preferred subsets it resamples them, sampled rewards collide, and the group-normalized advantage vanishes. On genomic reasoning the fraction of questions yielding no reward signal rises from 0.2% under a uniform reference policy to 20.8% after GRPO training. As a remedy, we introduce FGPO (Full-Group Policy Optimization), which (1) scores every tool subset and optimizes the exact action expectation, so each update sees the complete action space, and (2) precomputes the reward of each question--subset pair into an exhaustive table, removing frozen-reasoner calls from the training loop entirely. Across five frozen reasoners and three genomic benchmarks, FGPO outperforms GRPO in all 15 settings by 6.75 points on average and up to 14.20, while a standard on-demand GRPO schedule would require 2.4 times as many frozen-reasoner reward evaluations and, on GenomeQA, FGPO cuts invoked tools per question from 2.36 to 1.40.",
    "published": "2026-09-09T14:20:47Z",
    "updated": "2026-09-10T01:52:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10221"
  },
  {
    "id": "2609.10199",
    "title": "Seeing the Voice, Preserving the Self: A Participatory Design Approach to Deaf-Centric Text-to-Speech",
    "authors": [
      "Shela Atemnkeng",
      "Patrick Boudreault",
      "Paige DeVries",
      "Lloyd May",
      "Christian Vogler"
    ],
    "abstract": "We describe a participatory design approach toward developing Deaf-centric text-to-speech (TTS) technologies. While TTS is growing rapidly in the mainstream, it has received little attention to date in the deaf and hard of hearing (DHH) technology space. Critical problems have remained unaddressed for DHH users, including the ability to manipulate tone, emotions and delivery via non-auditory means. Verifying that the generated speech matches intent and is appropriate for a given situation without having to listen to it is another challenge. Respecting cultural and identity factors in the generated speech is also important. This work explores the design space with DHH participants through two focus groups, three co-design sessions, and four one-on-one early-stage design evaluation sessions. Participants included people both familiar and unfamiliar with TTS, as well as DHH content creators. We describe key findings, design ideas, results, and implications for future Deaf-centric TTS development. We also identify unmet technology requirements that pose barriers to adoption of Deaf-centric TTS technology.",
    "published": "2026-09-09T14:04:39Z",
    "updated": "2026-09-09T14:04:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.10199"
  },
  {
    "id": "2609.08765",
    "title": "Benchmark Scores Are Pipeline-Dependent: A Reliability Audit of Cybersecurity LLM Benchmarks",
    "authors": [
      "Aymene Berriche",
      "Cathrine Shalby",
      "Mohannad Alhanahnah",
      "Yazan Boshmaf"
    ],
    "abstract": "Large language model (LLM) benchmarks are often treated as fixed datasets with stable scores, yet their outcomes depend on configurable evaluation pipelines. We audit eight cybersecurity benchmarks across 10 proprietary, open-weight, and cybersecurity-specialized LLMs. By modeling benchmarks as measurement pipelines, we identify 15 systematic failure modes and show that a single pipeline choice can change a model's score by more than 80 percentage points and substantially alter model rankings. At the cross-benchmark level, two semantically similar task pairs rank the same models differently because of incompatible evaluation conventions. Under an evaluation harness that standardizes pipeline choices while preserving task semantics, nine of 10 models shift by at least three ranks on at least one benchmark. These results show that cybersecurity LLM benchmark scores are pipeline-dependent and motivate pipeline-aware auditing as a core requirement for reliable model evaluation.",
    "published": "2026-09-08T14:01:22Z",
    "updated": "2026-09-08T14:01:22Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08765"
  },
  {
    "id": "2609.09250",
    "title": "No Free Checker: A Survey of Verifiers for Robot Policies",
    "authors": [
      "Yang Wan",
      "Xihang Yue",
      "Zhirui Liu",
      "Ziyuan Chu",
      "Shuxun Wang",
      "Yuhan Chen",
      "Xiaonan Jiang",
      "Xukun Zhu",
      "Yubo Dong",
      "Linchao Zhu"
    ],
    "abstract": "A verifier for robot policies reads a candidate behavior and returns a score for how well it did, used both to evaluate vision-language-action policies and to train them. Verifiers range from success detectors and reward models to runtime monitors, safety filters, and temporal-logic specifications. We survey roughly 150 verifiers and compare them along two properties. Availability is how much a verdict costs, how early in a rollout the verdict arrives, and how often a verdict can be asked for. Availability rises as verdicts get cheaper, earlier, and denser. Credibility is how much a high score tells us about the task. Credibility falls as the judgment becomes gameable and self-serving. We group the verifiers by who supplies the judgment: human verifiers, rule-based and formal verifiers, learned and pretrained verifiers, and model-intrinsic verifiers. Across the four families, we find that credibility falls as availability rises. Regardless of who supplies the judgment, there is no free checker. We then examine what validates a verifier itself, and how much a high score tells us. Three measures appear in the literature: agreement with human labels, the performance of the policy it trains, and behavior under reward hacking. We close with nine metrics that make a verifier claim checkable, and coordinates for the verifiers still to be built.",
    "published": "2026-09-08T13:52:59Z",
    "updated": "2026-09-08T13:52:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.09250"
  },
  {
    "id": "2609.08755",
    "title": "Kairos: A Dataset for Fine-Grained Video-Language Modeling over Space, Time, and Dynamics",
    "authors": [
      "Ruibo Ming",
      "Lei Sun",
      "Deheng Zhang",
      "He Zhang",
      "Jialu Li",
      "Jian Wang",
      "Zhendong Li",
      "Mengshun Hu",
      "Danda Pani Paudel",
      "Luc Van Gool",
      "Jinjin Gu"
    ],
    "abstract": "Many emerging video language modeling tasks require systems to move beyond clip-level abstraction and model visual content as it unfolds over extended time horizons. However, most existing video datasets rely on coarse or sparsely aligned supervision, which compresses temporal variation and limits the ability of models to learn reusable representations of continuous visual dynamics. We introduce Kairos, a video dataset for video-language modeling with time-resolved annotations. Kairos consists of long-duration videos, ranging from ten minutes to half an hour, annotated with fine-grained temporal alignment. The annotations capture ongoing actions, entity appearances and attributes, interactions, and evolving contextual cues along the video timeline. This time-resolved structure supports fine-grained evaluation, long-range modeling and reasoning, instruction data construction, representation learning, and video generation. Kairos provides a general-purpose foundation for modeling visual experiences over time.",
    "published": "2026-09-08T13:50:30Z",
    "updated": "2026-09-08T13:50:30Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08755"
  },
  {
    "id": "2609.08736",
    "title": "When Can One Obtain Certificates of Optimality Using Positivstellensaetze?",
    "authors": [
      "Nayoon Kim",
      "Allen Gehret",
      "Shenyuan Ma",
      "Jakub Marecek"
    ],
    "abstract": "We study certificates of positivity and optimality for learning problems whose objectives and constraints need not be polynomial. We isolate an axiomatic core of Fischer's constructive strict and weak Positivstellensätze and prove the resulting theorems for abstract function algebras over ordered fields. The framework separates two roles that can otherwise be conflated: objective and constraint functions may be built from broad classes of continuous or definable operations, while the auxiliary primitives used to construct a certificate satisfy explicit scalar and closure axioms. We give instances over continuous and definable function algebras, including ordered fields not closed under square roots, derive lower-bound and global-optimality certificates, and analyze both expanded term length and shared computation-graph complexity.",
    "published": "2026-09-08T13:30:18Z",
    "updated": "2026-09-08T13:30:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08736"
  },
  {
    "id": "2609.08730",
    "title": "CVT-GS: Learning to Simplify 3D Gaussian Splatting with Centroidal Voronoi Tessellation",
    "authors": [
      "Bingxian Li",
      "Yilong Li",
      "Jingliang Peng",
      "Peng-Shuai Wang",
      "Fei Zhu",
      "Guozheng Li",
      "Chi Harold Liu",
      "Guoping Wang",
      "Bo Pang"
    ],
    "abstract": "While 3D Gaussian Splatting (3DGS) has emerged as a powerful representation for real-time novel view synthesis, rendering high-fidelity scenes often relies on a massive number of Gaussian primitives, incurring substantial storage and computational overhead. Existing simplification techniques are largely intrusive, requiring training-time pruning, architectural modifications, or computationally expensive per-scene fine-tuning. These drawbacks limit their deployment on off-the-shelf pretrained models. In this paper, we propose CVT-GS, a novel optimization-free post-hoc simplification framework that directly compresses trained 3DGS scenes without sacrificing visual fidelity. Our approach first constructs spatially coherent cells over Gaussian centers via a geometry-aware Centroidal Voronoi Tessellation (CVT). Subsequently, a lightweight neural cell merger predicts the geometry and appearance of a single, highly representative Gaussian primitive for each cell under differentiable rendering supervision. By formulating simplification as a rendering-aware many-to-one merging process rather than naive primitive pruning, CVT-GS outputs a standard 3DGS scene that is seamlessly compatible with existing renderers. Experiments on various datasets demonstrate the superiority of our method. Notably, when achieving a 100-fold reduction in Gaussian points, our method operates 12 times faster than state-of-the-art methods while improving the PSNR by 1.3 dB.",
    "published": "2026-09-08T13:26:32Z",
    "updated": "2026-09-08T13:26:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08730"
  },
  {
    "id": "2609.08729",
    "title": "Application of curiosity driven exploration methods for hardware interference identification",
    "authors": [
      "Ludovic Matar",
      "Clement Moulin-Frier",
      "Pierre-Yves Oudeyer"
    ],
    "abstract": "The transition from single-core to multi-core architectures in safety-critical embedded systems introduces significant challenges due to inter-core interference caused by contention for shared hardware resources. Such interference affects execution times and complicates the verification of strict temporal requirements, particularly in domains such as avionics where standards require comprehensive identification of interference sources. Existing interference analysis approaches, whether manual or model-based, struggle to capture the full range of behaviors arising from the complex interactions among micro-architectural components. In this paper, we frame multi-core interference analysis as the exploration of a complex system behavior space. We propose the use of curiosity-driven exploration algorithms from artificial intelligence to systematically and efficiently cover the space of possible interference behaviors. Using a simulator-based environment, we show that the proposed approach achieves broader and more uniform behavioral coverage within a limited experimental budget compared to traditional pseudo-random program generation methods.",
    "published": "2026-09-08T13:26:24Z",
    "updated": "2026-09-08T13:26:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08729"
  },
  {
    "id": "2609.08722",
    "title": "Inverse Digital Marbling: Recovering Gesture Programs with a Replay Adjoint",
    "authors": [
      "Tianqi Liu",
      "Yushan Han",
      "Hang Liu"
    ],
    "abstract": "Pigment deposition in paper marbling displaces the pattern already present, coupling the appearance of each gesture to later actions. We recover executable programs for a deposition-based digital marbling model: given a target image, we optimise an ordered program of capsule insertions whose replay approximates it. The capsule primitive continuously joins circular drops to elongated deposits. Its transport is exactly area-preserving and has a closed-form inverse on the exterior of the deposited region. A replay adjoint reconstructs intermediate states, retaining coordinates lost inside deposits and periodic position checkpoints. At 2000 gestures and 1024^2 pixels, the PyTorch replay implementation uses 8.7x less memory than the tested checkpointed-autograd configuration at comparable step time; the fused implementation fits a program in about four minutes on one workstation GPU. We evaluate image reconstruction on five marbled sheets, compare against transport-disabled fitting, one-pass geometric compensation and a published stroke-based fitter at matched stroke count, and measure sensitivity to an alternative ordered-drop transport. Recovered programs replay across a 4x range of linear resolution. Edits specified in program order or in palette space -- inserting a gesture, recolouring a stage, translating a stage -- replay correctly under the same model; edits specified by image content, such as moving a motif, do not. On synthetic targets with known generating programs, the recovered programs match the images but not the generating gestures under a positional matching statistic. The output is an editable program in the specified digital medium.",
    "published": "2026-09-08T13:20:07Z",
    "updated": "2026-09-08T13:20:07Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08722"
  },
  {
    "id": "2609.08719",
    "title": "GoAnt: Quality-Diversity Multi-Agent Search for Alpha Factor Discovery in Market Microstructure Data",
    "authors": [
      "Stella Zhao",
      "Tommy Sha"
    ],
    "abstract": "Automated alpha factor discovery searches symbolic trading signals from price-volume panels and order-book data under a fixed evaluation budget. Existing single- and multi-agent program-search systems can overfit predictive proxies that fail after execution costs and repeatedly explore redundant factor families, limiting execution robustness and behavioral diversity. We introduce GoAnt, a quality-diversity multi-agent search framework that combines non-communicating Explorer, Exploiter and Connector workers with a shared adaptive Mental Map and a compact Queen dispatcher. The Mental Map organizes candidates by leakage-free execution profiles and retains one elite per niche, while the Queen reallocates the evaluation budget from explicit search-state summaries. We also define a map-independent effective-yield protocol that counts high-quality, mutually nonredundant factors directly from each method's evaluation records, giving archive-based and map-free systems the same ruler. On real A-share microstructure data spanning 2023--2026, GoAnt reaches quality-weighted yields of 41.8 and 47.6 in price-volume and order-book settings, improving the strongest baseline by 57% and 97% under matched budgets. Its locked populations retain 0.64 and 0.67 of in-sample quality out of sample, compared with 0.61 and 0.63 for a static map.",
    "published": "2026-09-08T13:19:18Z",
    "updated": "2026-09-08T13:19:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08719"
  },
  {
    "id": "2609.08705",
    "title": "Enhancing Table Structure Recognition via Bounding Box Guidance",
    "authors": [
      "Lei Hu",
      "Shuangping Huang"
    ],
    "abstract": "Table Structure Recognition (TSR) aims to extract the bounding boxes of cells and table structure (e.g., HTML) from table images. Although current approaches have made significant progress, the latest image-to-sequence methods overlook the explicit utilization of the bounding box information when predicting HTML sequences, leading to error predictions in complex scenes. In this paper, we introduce a novel framework BGTR (Bounding Box-Guided Table Recognizer). To more effectively utilize bounding box information, we first predict the bounding boxes of cells and then use this information to guide the generation of HTML sequences. While utilizing bounding box information can enhance the accuracy of HTML sequences, for natural scene tables, the data volume is too small to allow for sufficient training of bbox-guided HTML generation. In response, we adopt a progressive training method for natural scene tables and introduce SNSTab, a synthetically generated natural scene table dataset. Our experiments on five benchmark datasets demonstrate SOTA performance.",
    "published": "2026-09-08T13:04:39Z",
    "updated": "2026-09-08T13:04:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08705"
  },
  {
    "id": "2609.08696",
    "title": "MorphoOrgaAgent: A Foundation-Model-Based Multi-Agent System for Autonomous Organoid Analysis",
    "authors": [
      "Hanyi Zhang",
      "Maximilian Hoermann",
      "Lion J. Gleiter",
      "Yiling Xu",
      "Bettina Katalin Budai",
      "Hans-Ulrich Kauczor",
      "Carsten Marr",
      "Tingying Peng"
    ],
    "abstract": "Organoids are three-dimensional tissue models whose morphology provides important insights into tumor development, disease progression, and drug testing. Extracting these morphological features relies heavily on manual segmentation, which is time-consuming and labor-intensive. Furthermore, performing quantitative statistical analysis typically requires custom coding skills and a mathematical background, presenting a major barrier for experimental biologists. To address these challenges, we introduce MorphoOrgaAgent, a multi-agent framework that achieves zero-shot organoid segmentation, automated data analysis, and report generation based on natural language input. The framework consists mainly of three core components: a TaskUnderstandingAgent that identifies requested measurements and visualization types; a hybrid segmentation module that combines Cellpose-derived geometric prompts with text prompts to guide SAM3 for zero-shot organoid instance segmentation; and a ReportAgent that computes quantitative metrics and compiles them alongside generated visualizations into a structured report. We further introduce MorphoOrgaVQA, a benchmark designed for quantitative evaluation of agent systems in organoid morphology analysis. Experimental results demonstrate that MorphoOrgaAgent handles both explicit and descriptive user requests, produces measurements closely matching ground truth, and generates complete analysis reports without requiring manual programming. The complete source code and MorphoOrgaVQA benchmark are publicly available at https://github.com/peng-lab/MorphoOrgaAgent.",
    "published": "2026-09-08T12:59:46Z",
    "updated": "2026-09-08T12:59:46Z",
    "categories": [
      "cs.MA",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08696"
  },
  {
    "id": "2609.08690",
    "title": "Hyperparameter Scaling Laws Across MoE Sparsity",
    "authors": [
      "Changxin Tian",
      "Kunlong Chen",
      "Jia Liu",
      "Ziqi Liu",
      "Zhiqiang Zhang",
      "Jun Zhou"
    ],
    "abstract": "Mixture-of-Experts (MoE) models expand model capacity without a proportional increase in training compute, but increasing sparsity makes reliable hyperparameter transfer challenging. In this work, we show that conventional hyperparameter scaling laws are insufficient for ultra-sparse MoEs: the optimal learning rate and batch size vary with activation ratio, and these shifts cannot be explained by either total or activated parameter count alone. To characterize this dependence, we conduct 1,800 pre-training runs spanning six activated-parameter scales and models with up to 6B total non-embedding parameters, processing approximately 20 trillion tokens at a cost of 200,000 equivalent H800 GPU-hours. Our results reconcile conflicting findings in prior work by revealing two scaling regimes. At fixed sparsity, the optimal batch size follows a power-law relationship with training tokens $D$, whereas the optimal learning rate scales with training compute $C$ and remains robust to the allocation between model size and data. Across sparsity levels, the activation ratio $A$ enters both relationships as an additional multiplicative power-law factor. These observations lead to unified hyperparameter scaling laws that transfer across MoE sparsity levels. Large-scale evaluation shows that the scaling form outperforms alternative functional forms. On a held-out ultra-sparse MoE with 12B total parameters and only 1/64 of its experts activated, the predicted hyperparameters remain close to the observed optima, supporting joint extrapolation across model scale and sparsity. Further experiments demonstrate transfer across expert granularities and isolate the effect of activation ratio from that of total expert count.",
    "published": "2026-09-08T12:57:20Z",
    "updated": "2026-09-08T12:57:20Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08690"
  },
  {
    "id": "2609.08686",
    "title": "CausalChapter: Improving Long-Video Chaptering with Interventional Dependency Modeling",
    "authors": [
      "Xinran Duan",
      "Guozhang Li",
      "Yaoyao Zhong",
      "Mei Wang",
      "Lizhi Wang",
      "Hua Huang"
    ],
    "abstract": "Long-form instructional videos require automatic chaptering to support browsing, navigation, and knowledge access. Recent long-context language models can perform chaptering from textualized video inputs, but they remain costly and brittle for content-dense lecture videos with long transcripts, smooth topic transitions, and detailed chapter outputs. A scalable segment-then-caption paradigm reduces this cost, but introduces two new challenges: boundary error propagation and fragmented cross-chapter context. We propose \\textbf{CausalChapter}, an intervention-inspired framework for long-video chaptering that estimates prediction-level influence through lightweight masking and removal interventions. For boundary localization, our Local Dependency Shift module detects drops in predictive dependency between adjacent temporal windows; for chapter description generation, our Cross-Segment Support Selection module reranks historical contexts according to their support for the current prediction. Experiments on long-video chaptering benchmarks show that CausalChapter improves boundary localization, chapter description quality, and cross-chapter coherence.",
    "published": "2026-09-08T12:54:57Z",
    "updated": "2026-09-08T12:54:57Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08686"
  },
  {
    "id": "2609.07670",
    "title": "Harnessing CLIP and DINO: An Uncertainty-Aware Cascaded Fusion Network for Generalizable Deepfake Image Detection",
    "authors": [
      "Xuechao Zou",
      "Yi Zhou",
      "Kai Li",
      "Shun Zhang",
      "Yuhui Chen",
      "Congyan Lang",
      "Junliang Xing"
    ],
    "abstract": "The growing realism and accessibility of manipulated and generated faces threaten the trustworthiness of digital media. To detect such forgeries, deepfake detectors based on vision foundation models have shown promising performance, but they typically rely on a single pretrained representation and are prone to overfitting to particular training distributions. To improve generalization to unseen forgeries, we propose UCF-Net, an uncertainty-aware cascaded fusion network that harnesses CLIP's language-aligned semantic priors and DINO's self-supervised visual-structure priors. UCF-Net extracts hierarchical features across Transformer depths, uses layer-wise expert aggregation to adaptively combine each encoder's multi-level cues, and performs weighted fusion of the resulting representations based on entropy-derived uncertainty. We further consolidate public deepfake datasets into a unified benchmark of approximately 4M images and construct a separate cross-generator evaluation set with over 8K face images from eight recent generators. On the unified benchmark, UCF-Net achieves the best mean AUC among the evaluated methods in both in-domain and cross-domain evaluations. On the cross-generator set, it adapts effectively with limited target-domain data, although zero-shot transfer remains challenging.",
    "published": "2026-09-07T15:59:19Z",
    "updated": "2026-09-07T15:59:19Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07670"
  },
  {
    "id": "2609.07664",
    "title": "Accuracy is Not Enough: A Divergence-Based Approach to Evaluate Fidelity Loss in Quantized LLMs",
    "authors": [
      "Shahzeb Qamar",
      "Lorenz Sparrenberg",
      "Christian Bauckhage",
      "Baha Rababah",
      "Carson Leung",
      "Murat Kantarcioglu",
      "Cuneyt Gurcan Akcora",
      "Rafet Sifa"
    ],
    "abstract": "Deployment of Large Language Models (LLMs) on memory-constrained edge devices relies heavily on aggressive post-training quantization. However, evaluating these models is largely based on zero-shot task accuracy, which depends solely on argmax predictions and is insensitive to changes in the underlying predictive distribution. Consequently, accuracy can exhibit unstable, non-monotonic behavior under progressive quantization, masking substantial fidelity loss relative to the BFloat16 (BF16) uncompressed base model and providing misleading deployment signals. We introduce a distribution-sensitive evaluation framework quantifying information loss in quantized LLMs as the divergence between full-vocabulary predictive distributions at the token decision boundary. We compute statistical distances, including Jensen-Shannon Divergence and Total Variation Distance, between outputs of full-precision and quantized models, enabling a fine-grained analysis of distributional shift. Using this framework, we quantify probability mass displacement and distributional drift relative to the BF16 reference, capturing predictive distribution changes not reflected in top-1 accuracy. We conduct a 120-run experimental matrix across five foundation architectures and four reasoning benchmarks under progressive quantization regimes, from uncompressed BF16 to Q2_K, providing a systematic fidelity analysis. Our results show divergence metrics generally increase under stronger quantization, complementing task accuracy with a fidelity signal. Across tested llama.cpp schemes, mixed-precision Q4_K generally yields lower divergence than uniform Q4_0 at similar memory footprints. These findings motivate distribution-aware evaluation as a practical diagnostic complement to task accuracy; they do not directly establish correctness, calibration, safety, or user-perceived quality.",
    "published": "2026-09-07T15:49:52Z",
    "updated": "2026-09-07T15:49:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07664"
  },
  {
    "id": "2609.07663",
    "title": "Noēsis: Deterministic-First Retrieval with Two-Tier Context Hydration for Factuality-Critical Queries on Small Local Models",
    "authors": [
      "Nicola Cogotti"
    ],
    "abstract": "A wrong number is worse than no answer. Across factuality-critical domains -- audience metrics, scheduling and rights in media; dosages and lab values in healthcare; figures and citations in finance and legal -- a confident but fabricated value is more damaging than an honest admission of uncertainty. Yet this is the dominant failure mode we observe on small local language models: even when correct evidence is present in context, models fabricate plausible numbers and timestamps. Recent work characterizes a real limit of this regime: below 7B parameters, the bottleneck of retrieval-augmented generation (RAG) is not retrieval quality but context utilization. We present Noesis, the deterministic-first query plane of the Noesis architecture, which makes every deterministic judgment before generation. Its mechanisms follow from the ingestion architecture (subject of a separate patent application): (a) a producer-side fact layer rendering precomputed metric facts verbatim without ranking; (b) positional addressing with deterministic cross-source alignment, resolved ahead of query time at zero LLM cost; (c) provenance scoping as an attribution constraint with multi-tier named-reference routing; and (d) two-tier context with model-triggered verbatim hydration. Across four ablations, a 2B model reaches parity with a 35B model on factual integrity (exact values in all runs; zero confabulated numbers on absent-entity traps); structured retrieval beats flat RAG by +11.4 points at 2B; skeleton-only context preserves quantitative answers at 20-30% smaller prompts; and hydration recovers verbatim narrative in ~8s versus ~29s. Two properties matter for regulated domains: each query resolves in a single generation call, and every reported value is traceable to its exact source and position by construction.",
    "published": "2026-09-07T15:49:16Z",
    "updated": "2026-09-07T15:49:16Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07663"
  },
  {
    "id": "2609.07662",
    "title": "How AI Models Manage Epistemic Authority: A Taxonomy and Comparative Analysis of Responses to User Disagreement",
    "authors": [
      "Riyadh Alnasser",
      "Yusuf Mücahit Çetinkaya",
      "Sumin Zhao",
      "Tuğrulcan Elmas"
    ],
    "abstract": "Large language models are increasingly used as sources of advice and information, including in high-stakes settings, yet little is known about how they respond to user disagreement. We study how a model manages its epistemic authority, referring here to its claim to knowledge, competence, or the right to advise, once a user challenges its answer. Building on Conversation Analysis, we introduce a taxonomy of six challenge types and a four-layer framework for analysing each response: whether the original claim is maintained or changed, where authority is located, how the disagreement is socially managed, and what kind of evidential support is offered. We construct a new dataset of 2,310 controlled challenge scenarios and 32,340 corresponding responses from 14 models, and analyse them using our framework with an LLM-as-judge pipeline, providing a vocabulary which future evaluation and benchmark design can build on. We find that models show conflicting behaviour: they validate users in 85% of responses but maintain their original claim in 65%. They explicitly apologise in 33% of responses, yet 59% of those apologies accompany maintenance of the original claim. They transfer authority most often in advice tasks, doing so in 28% of responses and reaching 57% in health advice and 49% in legal advice, compared with 6% in fact and 3% in explanation tasks. Abandonment of the original claim ranges from 0.8% for GPT-5.2 to 40% for DeepSeek 7B, while complete replacement of the original claim is rare overall at 1.5%.",
    "published": "2026-09-07T15:47:29Z",
    "updated": "2026-09-07T15:47:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.07662"
  },
  {
    "id": "2609.07660",
    "title": "Thermodynamic Cyclic Processes with Markov Samplers in Bayesian Inference",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The concept of Markov chain Monte Carlo (MCMC) cycles, an analogy to cyclic processes in heat engines, is presented in order to examine Bayesian inference problems. In this effort, we develop adaptive ensemble schedulers that allow the tuning of external parameters of a Bayesian canonical ensemble during an MCMC run, realising the MCMC cycles in practice. We run these cycles on different statistical models. As a fundamental insight, we find (both theoretically and in practice) that such systems can produce a non-zero net work output if and only if the considered model is non-Gaussian. As such, they may serve as a measure of non-Gaussianity in Bayesian inference, which we test on an example from supernova cosmology.",
    "published": "2026-09-07T15:46:03Z",
    "updated": "2026-09-07T15:46:03Z",
    "categories": [
      "stat.CO",
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07660"
  },
  {
    "id": "2609.07655",
    "title": "Online Surrogate Repair: Decoupling High-Fidelity Feedback from Search Length in Closed-Loop Discovery",
    "authors": [
      "Xiaotang Feng",
      "Philip Torr",
      "Bruno Andreis"
    ],
    "abstract": "Closed-loop AI scientists can generate candidate designs at low marginal computational cost, whereas reliable feedback may require wet-lab synthesis, characterization, or high-fidelity computation. Addressing this imbalance through custom laboratory automation remains infrastructure-intensive and costly, while replacing new experiments with a fixed surrogate leaves persistent model errors that can be amplified by optimization. We propose \\emph{online surrogate repair} (OSR), a closed-loop algorithm that uses sparse high-fidelity evaluations to update the surrogate throughout a longer agent search conducted primarily with inexpensive surrogate feedback. An acquisition rule selects which designs from the agent's accumulated proposals receive high-fidelity evaluation, and the resulting labels update the surrogate used in subsequent episodes. Across controlled synthetic environments, we demonstrate that improving global surrogate fit does not necessarily reduce maximum regret, whereas Q90-UCB and expected improvement (EI) substantially reduce regret by directing evaluations toward regions that determine the optimizer's decisions. On MADE, controls receiving high-fidelity feedback after every episode require $6.36$--$7.23\\times$ more oracle queries to match Online EI under two LLM orchestrators and $10.27\\times$ more under the non-LLM Chemeleon+MLIP workflow. Online surrogate repair introduces a novel third feedback regime between fixed-surrogate operation and high-fidelity feedback after every episode, separating the frequency of high-fidelity evaluation from the duration of the agent's search.",
    "published": "2026-09-07T15:42:45Z",
    "updated": "2026-09-07T15:42:45Z",
    "categories": [
      "cs.LG",
      "cond-mat.mtrl-sci",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07655"
  },
  {
    "id": "2609.07629",
    "title": "Open Tabular Insight Extraction: Where Do We Stand, and Where Should We Go?",
    "authors": [
      "Daniel Gomm",
      "Maarten de Rijke",
      "Madelon Hulsebos"
    ],
    "abstract": "Democratizing access to the knowledge held in large corpora of tables such as data lakes is emerging as a central research challenge. Research in this space is advancing and broadening in scope, increasingly supplying the components to satisfy a person's insight need end-to-end. Yet these efforts remain fragmented across communities that frame the problem under their own conventions, such as table question answering, text-to-SQL, and data analysis agents, with works six times as likely to cite within the same task label as across labels. To bring these communities onto common ground, we establish a holistic framework for this pursuit, which we refer to as Open Tabular Insight Extraction (OpenTI). We formalize OpenTI from first principles around the analytical knowledge a person needs, the procedure for deriving it from a corpus of tables, and how well a result serves the person who sought it. In doing so we consolidate frameworks and terminology across information retrieval, natural language processing, machine learning, databases, and human-computer interaction, and apply this grounding in a systematic review and analysis of systems and benchmarks that work towards OpenTI. We find that current systems do not cover the end-to-end scope of OpenTI, mainly focusing on the analysis itself, and that benchmarks are largely unfit for evaluations in an open setting as inputs presuppose knowledge of tables, and validation mechanisms do not match the setup. Finally, we distill a research agenda towards OpenTI systems, evaluation, and interaction paradigms that surface the insights users need. An interactive companion to our paper is available at https://open-tabular-insight-extraction.github.io.",
    "published": "2026-09-07T15:27:58Z",
    "updated": "2026-09-07T15:27:58Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.07629"
  },
  {
    "id": "2609.07627",
    "title": "Norms at a Price: Why RL-Based Alignment Can Promise Conditional Compliance at Best",
    "authors": [
      "Kevin Baum",
      "Rūta Binkytė",
      "Felix Jahn"
    ],
    "abstract": "AI agents sometimes act aligned when they infer they are being tested, and differently when not. We argue this is not an anomaly but what current training regimes are structured to select for. Reinforcement-learning-based alignment folds norms and task pursuit into one policy: the system learns its norms from scored behavior, and scoring flattens them. Do not do X is learned as doing X costs something if noticed. On every datum training can produce, a policy that complies only when it might be observed is indistinguishable from one that complies always. The experiment that would tell them apart - scoring unobserved behavior - is a contradiction in terms. Conditional compliance is thus the most that behavioral training can be known to deliver. Agency sharpens the problem: agents operate mostly where no one is watching, and can act on whether they are watched. An iterated pipeline that trains against detected failures selects for passing detection, not for complying. This account unifies alignment faking, sandbagging, and evaluation-aware scheming. And it reorients the remedy: not deeper internalization but architecture, making violations unavailable rather than unchosen.",
    "published": "2026-09-07T15:27:40Z",
    "updated": "2026-09-07T15:27:40Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.07627"
  },
  {
    "id": "2609.07623",
    "title": "Privacy Leakage from a Thousand Words: Millipixel Location Recovery from Dot Maps",
    "authors": [
      "Yuntao Du",
      "Tanishq Pauskar",
      "Hao Wang",
      "Jing Su",
      "Ninghui Li"
    ],
    "abstract": "Dot maps, which visualize individual data points as dots over a geographic region, are widely used across diverse domains to represent spatial patterns in sensitive data. However, the understanding of the privacy risks associated with dot maps remains limited, particularly for maps covering large geographic areas. In this paper, we systematically analyze these risks and present AutoLocate, an automated framework for high-precision location recovery. At its core, AutoLocate exploits anti-aliasing artifacts introduced during map rendering, which inadvertently encode sub-pixel information about dot locations. AutoLocate formulates location recovery as a black-box optimization problem, iteratively refining estimated coordinates by minimizing perceptual discrepancies over these artifacts between the target map and rendered candidate maps. Extensive experiments on both real-world and synthetic datasets, across different attack scenarios and a broad range of map configurations (e.g., map scale, background, resolution), demonstrate the effectiveness of AutoLocate. In particular, it achieves average recovery errors as low as 1 meter (approximately 0.0002 pixel precision) on small-scale maps of the United States, over 200x more accurate than existing approaches. We also propose mitigation strategies and introduce a privacy risk assessment tool to help practitioners evaluate and reduce privacy leakage when publishing dot maps.",
    "published": "2026-09-07T15:25:27Z",
    "updated": "2026-09-07T15:25:27Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.07623"
  },
  {
    "id": "2609.07620",
    "title": "Microcanonical Hamiltonian Monte Carlo and the Helmholtz Theorem",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The recently proposed Microcanonical Hamiltonian Monte Carlo algorithm has not yet been studied in detail from a thermodynamic point of view; this work aims to fill that gap. We demonstrate how thermodynamical state variables and potentials can be derived and thereby demonstrate that the construction of the algorithm formally represents a microcanonical thermodynamic ensemble. In particular, we demonstrate (analytically and numerically) that the algorithm fulfils the Helmholtz theorem, an alternative formulation of the first law of thermodynamics. Furthermore, we construct a new sampling algorithm that extends the original to lower-dimensional inference problems. Finally, we argue that canonical Markov Chain Monte Carlo algorithms are more natural than Microcanonical Hamiltonian Monte Carlo from the thermodynamic and information-theoretic point of view.",
    "published": "2026-09-07T15:24:11Z",
    "updated": "2026-09-07T15:24:11Z",
    "categories": [
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07620"
  },
  {
    "id": "2609.07618",
    "title": "Decentralized Safe Multi-Agent Reinforcement Learning via Predictive Shielding",
    "authors": [
      "Yacine El Yamani",
      "Hanna Krasowski",
      "Elena Vanneaux"
    ],
    "abstract": "Environments are increasingly populated by multiple robots performing independent tasks with limited prior knowledge of each other. Deploying such multi-agent systems presents significant challenges. Specifically, shifts in deployment states compared to training data can lead to poor policy performance and compromised safety. While safety shields exist to mitigate these risks, they are typically reactive, which degrades performance near unseen obstacles,and centralized, limiting their scalability. To address this, we propose a decentralized framework that integrates predictive shielding with model-based finite horizon Q-learning. This approach allows agents to safely adapt their pre-trained policies during deployment. Furthermore, to mitigate livelocks in symmetric scenarios, we introduce a communication- free protocol for conflict resolution",
    "published": "2026-09-07T15:22:16Z",
    "updated": "2026-09-07T15:22:16Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.MA",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.07618"
  },
  {
    "id": "2609.07611",
    "title": "AgentIdeaBench: Benchmarking Scientific Ideation in the Agent Era",
    "authors": [
      "Yunxiang Mo",
      "Tianshi Zheng",
      "Yisen Gao",
      "Rui Wang",
      "Newt Nguyen Kim Hue Nam",
      "Kelvin Kiu Wai Tam",
      "Jiaxin Bai",
      "Yangqiu Song",
      "Ginny Wong",
      "Simon See"
    ],
    "abstract": "Scientific ideation is the capacity to formulate novel and testable hypotheses from scientific evidence, and autonomous AI scientists depend on it. Existing evaluations largely assess it by asking models to generate ideas from a static, curated set of reference papers. That passive setup departs from the retrieval-and-reasoning workflow of modern AI scientists, and it becomes less discriminative as models improve. We introduce AgentIdeaBench, a multidisciplinary benchmark that evaluates scientific ideation under two matched settings, static observation and active exploration. We report matched Static-Active evaluations for 33 LLMs across 40 densely scored subfields spanning five disciplines, using a multidimensional, literature-verified scoring framework whose critics assess originality against retrieved prior art. Active exploration reveals considerably more capability headroom, and that headroom is unevenly distributed across models. Performance scales about twice as fast as under static observation, and the exploration gain is capability-gated, favoring the strongest models over the weakest. The gain reflects better grounding, improving feasibility, clarity, and specificity while leaving measured originality unchanged under our critics. We further explore Scientific World Modeling, a generation-time loop that refines a draft hypothesis through structured thought experiments. It benefits mid-capability models, and its impact diminishes among frontier models that appear to have internalized such reasoning patterns already. AgentIdeaBench gives future work on scientific ideation a measurement basis suited to the agent era.",
    "published": "2026-09-07T15:19:13Z",
    "updated": "2026-09-07T15:19:13Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07611"
  }
];
