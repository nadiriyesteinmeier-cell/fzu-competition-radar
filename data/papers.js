window.PAPER_DATA_UPDATED_AT = "2026-10-15";
window.PAPER_ITEMS = [
  {
    "id": "2610.20610",
    "title": "Can Learning to Answer Spatial Questions Improve Novel-View Generation?",
    "authors": [
      "Jahyeok Koo",
      "Hyeonseo Yu",
      "Seungho Jang",
      "Jaewoo Jung",
      "Jiwon Kang",
      "Seokju Cho",
      "Seungryong Kim"
    ],
    "abstract": "Generating novel views from limited observations requires preserving both the appearance and spatial structure of a scene. Although recent approaches exploit fine-grained geometric cues, they do not explicitly model high-level semantic and spatial properties such as object identity, attributes, and inter-object relationships. In this work, we investigate whether 3D language understanding can provide complementary supervision for novel-view generation. We introduce Ask4NV, built on a pretrained unified multimodal model with a Mixture-of-Transformers (MoT) architecture. Our model incorporates camera geometry into both VAE and ViT representations and leverages understanding features during generation through joint self-attention with a modality-aware attention masking strategy. Experiments demonstrate strong image quality and geometric consistency in novel-view generation, alongside competitive 3D language understanding. Further analysis shows that joint training improves cross-view correspondence in VAE representations and similarity in a 3D-aware feature space.",
    "published": "2026-10-14T17:59:58Z",
    "updated": "2026-10-14T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20610"
  },
  {
    "id": "2610.20606",
    "title": "Modeling and Understanding Neural Weights of Humanoid Policies with Diffusion",
    "authors": [
      "Huixuan Cheng",
      "Bike Zhang",
      "Shankar Sastry",
      "Koushil Sreenath"
    ],
    "abstract": "Recent advances in robot learning have driven rapid progress in humanoid control, enabling increasingly agile behaviors in the real world. However, humanoid control networks are typically obtained through conventional training procedures, while comparatively little attention has been given to directly modeling the distribution of their learned weights and generating functional networks in weight space. In this work, we investigate whether high-performing humanoid control networks can be generatively modeled directly through their weights. We adopt a latent diffusion framework that couples a linear autoencoder with a Diffusion Transformer. The autoencoder compresses actor network parameters into a compact latent space, and the Diffusion Transformer models the distribution of these latents. Trained on networks collected from reinforcement learning for the Unitree G1 robot, our approach generates deployable networks that perform various motions in the real world, including walking, dancing, and spin kick. Beyond generation, we further study the learned weight space to better understand the structure captured by these humanoid control networks. We identify a structural principle in the first-layer weights that consistently reflects the robot's kinematic prior. Notably, this kinematic prior emerges under both Reinforcement Learning (RL) and Imitation Learning (IL) training, suggesting that it is not specific to a particular optimization process but may instead reflect common knowledge associated with humanoid embodiment. Together, these results demonstrate the feasibility of generative modeling in humanoid network weight space, while providing initial insights into the information encoded by their learned weights. Additional results are available on our project website: https://humanoid-weight-diffusion.github.io/",
    "published": "2026-10-14T17:59:52Z",
    "updated": "2026-10-14T17:59:52Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20606"
  },
  {
    "id": "2610.20608",
    "title": "Representation Conditioning for Generation",
    "authors": [
      "Saeed Razavi",
      "Xingjian Leng",
      "Liang Zheng"
    ],
    "abstract": "Representation-alignment methods effectively accelerate the diffusion transformer training. REPA, for example, uses a pretrained vision encoder to supervise an intermediate layer through an MLP projection head which is discarded after training. It aims to import semantics from the vision encoder to the diffusion backbone. While this objective is achieved at early layers by back-propagating the alignment loss, there is no guarantee that later layers, supervised by the velocity prediction loss alone, can well access such semantics. We propose a simple solution, representation conditioning (RECON), to improve semantics in later layers. During training, we feed the pretrained vision encoder tokens into later layers; during inference, because we no longer have the clean image, we reuse the MLP head (as a proxy to the vision encoder) and project its output tokens to the later layers. Our method adds no parameters and leads to much faster convergence: RECON is $63\\times$ faster than SiT and $25\\times$ faster than REPA. Code is available at https://github.com/saeidrazavi/RECON",
    "published": "2026-10-14T17:59:52Z",
    "updated": "2026-10-14T17:59:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20608"
  },
  {
    "id": "2610.20607",
    "title": "Hierarchical Residual Policy Learning for Real-World Mobile Manipulation with Sparse Human Guidance",
    "authors": [
      "Zhefei Gong",
      "Hefeifei Jiang",
      "Zehao Wang",
      "Jiachen Li"
    ],
    "abstract": "Mobile Manipulation (MoMa) is a cornerstone of autonomous robotic systems, yet real-world fine-tuning remains a formidable challenge because of high-dimensional action spaces and intricate coupling between heterogeneous modules. In this paper, we propose HiRe-MoMa (Hierarchical Residual Mobile Manipulation), a systematic framework for stable and sample-efficient real-world fine-tuning of complex MoMa systems. At its core, HiRe-MoMa adopts a Hierarchical Residual Architecture that fine-tunes a frozen base policy. A Policy-Agnostic Residual learns additive corrections atop the base policy, while Hierarchical Decoupling splits the residual into mobile-base and manipulator-arm heads with unidirectional conditioning, mitigating gradient interference and aligning corrections with the platform's physical hierarchy. To improve sample efficiency in data-expensive real-world settings, we propose Expert-Guided Value Alignment, which leverages sparse human interventions with under 20% training coverage to reshape the critic's value landscape, effectively guiding autonomous exploration through expert priors. Extensive real-world experiments on the TIAGo++ platform demonstrate that HiRe-MoMa consistently enhances task performance with only around 30 minutes of online interaction, regardless of the base policy architecture. To our knowledge, this is among the first frameworks to enable efficient on-robot fine-tuning for mobile manipulation in the real world, providing a practical paradigm for deploying complex robotic systems in dynamic, human-centric environments. Further details can be found on our project website: https://hire-moma.github.io/",
    "published": "2026-10-14T17:59:52Z",
    "updated": "2026-10-14T17:59:52Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20607"
  },
  {
    "id": "2610.20604",
    "title": "VITAL: From Visual Motion to Precise Action",
    "authors": [
      "Ao Liang",
      "Youquan Liu",
      "Mingxiao Li",
      "Wei Chow",
      "Lingdong Kong",
      "Yue Liao",
      "Dongyue Lu",
      "Yu Yang",
      "Wei Yin",
      "Runnan Chen"
    ],
    "abstract": "World-action models aim to turn visual anticipation into driving decisions, yet typically train action experts on trajectory representations defined independently of visual dynamics. This motivates deriving action targets directly from visual motion. We first examine a simpler setting in which trajectories are reconstructed from recorded future images. Even without the need for future prediction, reconstruction captures the dominant maneuver but leaves centimeter-scale errors. We therefore introduce VITAL (Vision-Induced Tokens for Action Learning), an action tokenizer that couples a visually derived motion scaffold with a compact residual encoding the trajectory error left by that scaffold. This representation makes visual motion the principal prediction target and gives small metric corrections a separate, normalized learning scale. Using flow matching, the action expert jointly predicts both components from the current image, ego state, and navigation command, without generating future images at inference. The same residual coordinates support bounded reinforcement post-training that refines execution while keeping the predicted visual scaffold fixed. With only one action denoising step, VITAL achieves 90.8 PDMS on NAVSIM v1 navtest, within 0.13 points of its ten-step score at 3.29x the end-to-end inference speed. Without retraining, it achieves 91.1 EPDMS on NAVSIM v2 navtest and 38.6 on navhard. Project page: https://worldbench.github.io/vital",
    "published": "2026-10-14T17:59:49Z",
    "updated": "2026-10-14T17:59:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20604"
  },
  {
    "id": "2610.20603",
    "title": "CommerceGen-Studio: An End-to-End Framework for Commercial-Grade Main-Image Generation",
    "authors": [
      "Xiaoli Xu",
      "Zhengtao Wu",
      "Zhengze Xu",
      "Tao Liu",
      "Yongchao Du",
      "Zuan Gao",
      "Xingjian Wang",
      "Hao Yan",
      "Mengting Chen",
      "Wei Li",
      "Bo Zheng"
    ],
    "abstract": "We present CommerceGen-Studio, an end-to-end framework for generating commercial-grade main images for e-commerce Stock Keeping Units (SKUs). Our framework is organized along a three-stage pipeline of information extraction, semantic rewriting, and multi-condition generation: Prompt-Eval-Refine-Loop Agent (PERL-Agent) distills heterogeneous SKU metadata into concise selling-point text lists through an iterative closed loop of VLM and LLM roles scored by a reference-free rubric. Layout Thinker Optimization (LTO) aligns the rewriter with both caption and rendered-image quality via alternating domain-specific policy optimization. SKU-DiT, trained under Reinforce-Distill-Reinforce (RDR) progressive training, conditions jointly on the white-background product image, the trademark crop, and the structured layout to hold subject fidelity, trademark integrity, and character-level text accuracy together. The framework runs in production at a scale of millions of main images per day with a latency of a few seconds per image, which we believe makes it among the first systems of this kind to operate at commercial scale. We also release CommerceGen-Bench, a benchmark of hard cases collected from live traffic across all product categories. On it, our framework achieves the highest overall scores among the evaluated open-source baselines on both editing tracks, with and without prompt enhancement. It also matches much larger closed-source models, and beats several of them at Instruction Following and Product Integration - the two properties that determine whether an image can be published.",
    "published": "2026-10-14T17:59:48Z",
    "updated": "2026-10-14T17:59:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20603"
  },
  {
    "id": "2610.20598",
    "title": "DynThinker: Unifying Static 3D and Dynamic 4D Spatial Reasoning",
    "authors": [
      "Qihang Cao",
      "Haoyuan Li",
      "Zihan Guo",
      "Sensen Gao",
      "Zihui Gao",
      "Huixin Zhang",
      "Fan He",
      "Jianhua Han",
      "Hang Xu",
      "Xiaodan Liang",
      "Jia-Wang Bian"
    ],
    "abstract": "Achieving general spatial intelligence requires a unified understanding of both static 3D and dynamic 4D. However, we find that existing models struggle to excel at both: 3D post-training can weaken dynamic understanding, while 4D-specialized models often lack strong static 3D reasoning. Our analysis reveals that this spatial--dynamic interference is highly non-uniform across parameter groups, with the balance between static and dynamic capabilities particularly sensitive to changes in late-layer MLPs. To address this interference, we propose DynThinker, a unified framework for jointly strengthening static and dynamic spatial reasoning. Decoupled Exponential Moving Average (D-EMA) applies configurable group-wise averaging to constrain drift in interference-sensitive pretrained parameters while preserving flexibility for capability enhancement. Spatial-Dynamic Fusion (SDF) complements D-EMA by selectively integrating spatial and temporal priors from a dynamic geometry encoder into intermediate VLM representations under semantic guidance. Across ten metrics spanning nine static 3D and dynamic 4D benchmarks, DynThinker achieves the highest average score among all evaluated models. Notably, DynThinker achieves 56.0 on ReVSI, 67.2 on DSR-Bench, and 51.2 and 40.1 under the sample-wise and group-wise evaluation protocols of DSI-Bench, respectively, setting new state-of-the-art results among the compared open-source models across all four evaluations within a unified model.",
    "published": "2026-10-14T17:59:31Z",
    "updated": "2026-10-14T17:59:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20598"
  },
  {
    "id": "2610.20597",
    "title": "Co-Evolving Acting and Forecasting for Language Agents",
    "authors": [
      "Haofei Yu",
      "Yixing Chen",
      "Yining Zhao",
      "Xuyan Ye",
      "Yuxiang Liu",
      "Zhigang Hua",
      "Yan Xie",
      "Shuang Yang",
      "Jiaxuan You"
    ],
    "abstract": "Training language agents is bottlenecked by the high cost of long-horizon rollouts, yet standard agentic reinforcement learning (RL) learns only from a terminal scalar reward, leaving the supervision in intermediate steps largely unused. Prior work exploits this supervision through value targets that estimate per-step success probabilities or observation targets that fit environment response. Both are hard to construct well: (1) value targets come from the same single scalar signal for each step in the trajectory, and (2) observation targets, such as web pages and terminal logs, are long and noisy and reach only one step ahead. We propose \\name, which adds a third kind of multi-step action targets. On successful on-policy trajectories, \\name trains the policy backbone to generate the action sequences that follows each history. Each action is also supervised when forecast from the preceding histories, forming a temporal ensemble that the shared backbone absorbs during training, and this enables acting and forecasting to co-evolve. The policy still acts one step at a time at inference, with no overhead. Across five benchmarks (ALFWorld, ScienceWorld, WebShop, $τ^2$-bench, and AppWorld), \\name (1) achieves stronger aggregate performance than GRPO and RL baselines with predictive auxiliary targets across simulated environments, while improving overall performance on both realistic applications; (2) delivers up to $1.9\\times$ and $2.0\\times$ higher sample efficiency than ECHO and GRPO, respectively, on ScienceWorld; and (3) achieves these gains with a single policy backbone, without additional models, separate pretraining, or inference overhead. The codebase is available at https://github.com/ulab-uiuc/CoPE.",
    "published": "2026-10-14T17:59:28Z",
    "updated": "2026-10-14T17:59:28Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20597"
  },
  {
    "id": "2610.20592",
    "title": "GeoThinker-$F$: Endogenous Predictive World Representations for Fast Spatial Intelligence",
    "authors": [
      "Haoyuan Li",
      "Qihang Cao",
      "Huanyuan Zhou",
      "Xin Hu",
      "Sijia Chen",
      "Zihan Guo",
      "Kun Xiang",
      "Yunshuang Nie",
      "Tao Tang",
      "Xinlong Zheng",
      "Jia-Wang Bian",
      "Xianming Liu",
      "Xiaodan Liang"
    ],
    "abstract": "Existing geometry-aware Multimodal Large Language Models (MLLMs) increasingly rely on external 3D encoders to provide structural priors, but executing these additional encoder paths at inference introduces substantial latency and computational overhead. We propose GeoThinker-$F$, an efficient framework that internalizes spatiotemporal perception by transforming causal MLLM hidden states into predictive latent world representations. Our key insight is that intermediate semantic representations contain sufficient information to predict useful representations of current geometry and future semantics, without requiring an exact reproduction of features from a dedicated 3D encoder. To realize this idea, GeoThinker-$F$ adopts a decoupled two-stage training strategy. In the first stage, the MLLM backbone is frozen while lightweight Latent Frame Prediction (LFP) heads learn from an offline 3D geometry expert and next-frame semantic targets. In the second stage, the external expert is removed, and the model is jointly optimized to generate and selectively integrate its self-predicted priors through a specialized Spatial-Grounded Temporal (SGT) Fusion module. Extensive evaluations show that GeoThinker-$F$ eliminates runtime dependence on external 3D geometry encoders while maintaining competitive performance across diverse spatial intelligence benchmarks. It achieves up to a $3.6\\times$ inference speedup, reducing latency from $1.45\\,\\mathrm{s}$ to $0.40\\,\\mathrm{s}$ while retaining strong spatial reasoning performance.",
    "published": "2026-10-14T17:59:03Z",
    "updated": "2026-10-14T17:59:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20592"
  },
  {
    "id": "2610.20590",
    "title": "Feed-Forward Multi-View Feature Coding for 3D Gaussian Splatting",
    "authors": [
      "Seungmi Choi",
      "Ji-Hyoun Choi",
      "Suhyun Jo",
      "Tae-Gwon Park",
      "Hui Yong Kim"
    ],
    "abstract": "Feed-forward 3D Gaussian Splatting (3DGS) methods enable efficient reconstruction of 3D scenes from sparse multi-view images in a single forward pass, without scene-specific optimization. However, existing feed-forward scene-coding pipelines first generate a complete Gaussian representation and then encode its geometry and appearance attributes separately, often involving non-differentiable operations. The resulting 'generate-then-compress' pipeline requires complex attribute-specific codec designs and limits rate-distortion performance by restricting the exploitation of cross-attribute redundancy. We propose multi-view feature coding for Gaussian splatting (MFGS), an end-to-end feed-forward framework for scene coding. Instead of compressing an explicit Gaussian representation, MFGS extracts multi-view features from the input images and encodes them into a compact bitstream. Through end-to-end rate-distortion training, MFGS learns compact multi-view features that jointly represent geometry and appearance, enabling the receiver to predict Gaussian attributes from the decoded features. We further introduce importance-guided Gaussian selection to accommodate different rendering budgets, allowing the receiver to adjust the number of Gaussians used for rendering from the same bitstream. Across RE10K, ACID, and DL3DV, MFGS achieves 99.76-99.86% bitrate savings over the generate-then-compress pipeline, as measured by BD-rate, while reducing total GMACs by 52-55% and providing an approximately 12 times end-to-end speedup.",
    "published": "2026-10-14T17:58:28Z",
    "updated": "2026-10-14T17:58:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20590"
  },
  {
    "id": "2610.20588",
    "title": "Your Transformer Is Secretly Elastic",
    "authors": [
      "Walter Simoncini",
      "Dheeraj Varghese",
      "Gertjan J. Burghouts",
      "Cees G. M. Snoek"
    ],
    "abstract": "Scaling up transformers has produced models with broad capabilities, deployed across heterogeneous hardware and fluctuating workloads. Yet, model families offer only a few fixed sizes (e.g., S, B, L), forcing users to commit to a model based on hardware and latency constraints. This rigidity is often suboptimal under varying query loads. We introduce a retraining-free method that elastifies pre-trained transformers into a single model that adapts on-the-fly across a continuum of computational budgets. Our key contribution is a differentiable relaxation of the functional unit-ranking problem: unlike prior work, which optimizes a single importance weight per MLP block or attention head, we rank every individual MLP neuron and attention head jointly, on a common scale, by minimizing the model's loss under soft pruning across many sparsity targets, all at once. Across 27 vision and text transformer encoders ranging from 22M to 8B parameters, our method yields smooth degradation up to 60% sparsity and outperforms one-shot baselines under deep pruning. For example, pruning DINOv3 ViT-H+/16 to 50% sparsity removes 427M parameters while reducing ImageNet-1k linear-probing accuracy by only 0.8%, without the need for weight correction or retraining. At 60% sparsity, a pruned AugReg ViT-B/16 model achieves up to $1.80\\times$ higher throughput and $1.26\\times$ lower single-query latency on an A100 GPU. Elastic models are produced in minutes, with construction time scaling sub-linearly with parameter count.",
    "published": "2026-10-14T17:58:08Z",
    "updated": "2026-10-14T17:58:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20588"
  },
  {
    "id": "2610.20587",
    "title": "Price of Anarchy of First-Price Auctions in Agentic Markets",
    "authors": [
      "Shubhendu Trivedi",
      "Jacob Eisenstein",
      "Alekh Agarwal",
      "Ian Gemp",
      "Michael Kaisers",
      "Adam Fisch"
    ],
    "abstract": "An agentic market is a decentralized serving-time market where AI agents bid to claim each user prompt. An agent's bid is based on its expected value for the prompt, which is the expectation of the reward for its response minus its inference costs. First-price auctions (FPAs), in which the highest bidder pays its bid and receives the prompt, are a natural way to allocate prompts in such a market, since they are simple and transparent to run, and do not require central knowledge of private capabilities and costs. However, FPAs are not truthful: participants may bid less than their true value in the hope of a larger profit, and the prompt may then be allocated to someone other than the bidder who values it the most. This welfare loss is quantified by the $\\textit{price-of-anarchy}$ (PoA). In this paper, we argue that agentic markets are likely to possess features that reduce the price-of-anarchy. The first is a $\\textit{competitive floor}$, which occurs when multiple bidders usually value the prompt above some baseline share of the optimal welfare (e.g., because the best models are often distilled into cheaper alternatives, which perform similarly). We show that competition among them then limits the welfare loss, which can be driven to zero as the floor rises. The second feature is $\\textit{near-independence}$ of values after conditioning on the prompt, which occurs when most of the predictable variation in the expected value is determined by the difficulty of the prompt. As the value distribution approaches conditional independence, we can derive an efficiency guarantee that approaches a factor of $1 - 1/e^2$ of the optimal welfare. Thus, both features give rise to welfare lower bounds that are significantly better than the well-known general case of $1 - 1/e$. We validate these results empirically using auctions with strategic bidders simulated on the EmbedLLM prompt routing dataset.",
    "published": "2026-10-14T17:57:57Z",
    "updated": "2026-10-14T17:57:57Z",
    "categories": [
      "cs.GT",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20587"
  },
  {
    "id": "2610.19365",
    "title": "DANGERLENS: Probing Dangerous Representations Hidden by Safety Alignment",
    "authors": [
      "Tianzhuo Yang",
      "Shaoheng Yan",
      "Lin Lu",
      "Jiawei Chen",
      "Kaile Wang",
      "Fanyu Meng",
      "Minglu Liu",
      "Yaodong Yang"
    ],
    "abstract": "Safety alignment teaches language models to refuse harmful requests, yet the internal accessibility of hazardous concepts can retain traces of earlier training. Can checkpoints with equally safe behavior differ in what remains accessible behind their refusals? In this work, we investigate this question through paired training histories and a direct audit of intermediate representations. We introduce DANGERLENS, a probe that maps hidden states into vocabulary space and uses blinded semantic judgments to distinguish harmful goals and operational means from hazard recognition and safety control. Experiments on three Qwen1.5 scales show that checkpoints with prior harmful exposure generally retain greater hazardous concept accessibility after the same safety alignment, with the strongest separation in intermediate and later layers. The same harmful update also produces different behavioral trajectories from closely matched starting points. Human relevance validation and readout ablations reinforce the measured accessibility contrast. Our findings show that training history remains visible inside behaviorally matched models and motivate internal accessibility audits alongside output safety evaluations.",
    "published": "2026-10-14T01:10:09Z",
    "updated": "2026-10-14T01:10:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19365"
  },
  {
    "id": "2610.19362",
    "title": "Tail Competition Explains Scaling in Best-of-N Sampling for Verifiable Problems",
    "authors": [
      "Taro Yano",
      "Yoichi Ishibashi",
      "Masafumi Oyamada"
    ],
    "abstract": "Best-of-N sampling is a simple inference-time scaling strategy for large language models, yet its behavior under incomplete reward models remains poorly understood. We study Best-of-N as a competition between the extreme reward tails of correct and incorrect responses. This view shows that success depends not only on the probability of sampling a correct response, but also on whether correct responses dominate incorrect ones in the upper tail. Using extreme value theory, we characterize three asymptotic regimes: correct-tail-dominant, incorrect-tail-dominant, and critical explaining both monotonic gains and reward-hacking-induced degradation. We further derive finite-sample scaling laws for representative reward distributions, showing that, under Gaussian rewards, incorrect responses with sufficiently large variance can dominate selection even when their mean reward is lower. Unlike oracle selection, convergence with an incomplete selector can be polynomial rather than exponential. Finally, we propose a lightweight tail-tension criterion to estimate when additional sampling may become harmful. Experiments on synthetic data and real reward model scores are consistent with the theoretically predicted regimes, scaling laws, and diagnostic behavior, suggesting that tail competition provides a unified lens on Best-of-N sampling for verifiable problems.",
    "published": "2026-10-14T01:09:16Z",
    "updated": "2026-10-14T01:09:16Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.19362"
  },
  {
    "id": "2610.19361",
    "title": "VLX-Go: Robust Embodied Tracking through Multi-Stage Learning and On-Policy Refinement",
    "authors": [
      "Kyusong Lee",
      "Heting Ying",
      "Tiancheng Zhao"
    ],
    "abstract": "Embodied visual tracking requires a robot to identify a designated target from visual observations and control its own motion to follow that target through an environment. Following an isolated person is a comparatively simple demonstration of embodied visual tracking, but following the intended person among distractors remains challenging. Existing methods exhibit a substantial drop in success from single-target to distractor tracking, motivating a focus on the shared spaces that person-following robots must navigate. We present \\method{}, a vision--language waypoint policy built around the hypothesis that visual and language representations should be aligned before tracking-specific motion is learned. The policy combines complementary frozen visual encoders, multiscale temporal context, a transformer backbone, and a lightweight head for robot-centric waypoint prediction. Its training progresses through vision--language alignment, multimodal reasoning mid-training, and tracking specialization on 19,532 oracle episodes. Compared with 41.54\\% distractor-tracking success for our earlier OmTrackVLA model, the complete multi-stage recipe achieves 55.80\\%. We then explore on-policy refinement using filtered oracle labels for states visited by the policy. This preliminary study adds 2.42 percentage points of distractor-tracking success, reaching 58.22\\%, while reducing collision rate by 1.99 pts. The final policy records the highest distractor- and ambiguous-tracking success rates among the compared methods. These results support staged multimodal learning as a promising direction for tracking among distractors and motivate further study of on-policy refinement for person following in shared spaces.",
    "published": "2026-10-14T01:02:16Z",
    "updated": "2026-10-14T01:02:16Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.19361"
  },
  {
    "id": "2610.19359",
    "title": "Steering Vectors for Competing Ethical Frameworks Are Interchangeable: A Competing-Target Test for Activation Steering",
    "authors": [
      "Weilun Xu",
      "Zipeng Sun"
    ],
    "abstract": "Activation steering adds a vector to a model's hidden states to control a named behaviour. A gain on that behaviour, however, does not show that the vector controls it directly: it may act through a component shared with neighbouring behaviours, which unsteered and random baselines cannot separate. We introduce the competing-target test: a vector is compared with the vector built the same way for a competing target, and an equivalence test states when their difference is below a useful margin. We apply it in open-weight models to vectors for Kantian deontology, which judges an act by the rule it follows, and act utilitarianism, which judges it by the welfare it produces. On held-out situations, prompting a framework raises its score and lowers the other's, whereas vectors for either framework move both scores alike, and none reaches the margin. The two vectors share most of their direction, a request to apply some framework; the same construction separates an optimistic from a pessimistic tone, whose vectors share much less. What a vector shares with its competitors therefore sets what it controls: steering a perspective can deliver a mixture, and measuring a disposition can measure its neighbours, unless tested against the competing target.",
    "published": "2026-10-14T01:00:35Z",
    "updated": "2026-10-14T01:00:35Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.19359"
  },
  {
    "id": "2610.19358",
    "title": "Asymptotic Behavior of Transformers",
    "authors": [
      "Katy Blumer",
      "Da-Cheng Juan",
      "Jon Kleinberg",
      "Ravi Kumar",
      "Cyrus Rashtchian",
      "Andrew Tomkins"
    ],
    "abstract": "In this paper we study the behavior of transformer networks generating text over long periods of time. We show that even a three-token, single-layer attention-only transformer can fail to converge. We then study a rich class of transformers with arbitrary finite depth, layer normalization, MLPs, RoPE encodings, and an arbitrary mix of local and global layers. Every transformer in this class has a softmax temperature threshold above which its empirical cache distribution converges to a unique limit, independent of initial conditions. We show further that, while each transformer has a temperature threshold, the supremum of this set is infinite, so there is no global minimal temperature that forces all transformers to converge.",
    "published": "2026-10-14T00:59:20Z",
    "updated": "2026-10-14T00:59:20Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.ST"
    ],
    "url": "https://arxiv.org/abs/2610.19358"
  },
  {
    "id": "2610.19347",
    "title": "Integrated Novelty Detection Systems: From Sensor Networks to Multi-Novelty Computer Vision",
    "authors": [
      "Irené Tematelewo"
    ],
    "abstract": "Novelty detection is crucial in various technological and scientific domains. Its importance spans from ensuring the reliability of sensor networks to enhancing the adaptability of computer vision systems. As AI systems become increasingly sophisticated and complex, effective anomaly detection is essential for maintaining reliability and accuracy. This work addresses novelty detection in weather sensor networks and computer vision. In weather sensor networks, particularly for monitoring rainfall, detecting blocked rain gauges can significantly impact data reliability, food security, and disaster management. This work evaluates four existing quality control methods for detecting blocked rain gauges and demonstrates their limitations, particularly in detecting clusters of faulty sensors. By comparing methods such as the Conditional Mixture Model (CMM), PSWQ (Fz-filter), Kernel Regression, and Gaussian Method, we identify their shortcomings and propose three novel quality control techniques that integrate probabilistic fault detection and consistency-based diagnosis framework to improve timely detection of blocked sensors, while reducing false alarms. In the realm of computer vision, current systems often fail to handle multiple types of novelty due to their focus on single-novelty scenarios. We highlight the need for integrated systems capable of handling multiple types of novelty. To support this, we introduce the Novel Snapshot Serengeti (NOVEL-SS) dataset, derived from the Snapshot Serengeti camera trap data, which includes various forms of novelty. We also present the DCA (Detect, Characterize, and Accommodate) baseline system, designed to handle multiple novelty by detecting, characterizing, and accommodating them. This work aims to advance the robustness and adaptability of novelty detection systems across both weather sensor networks and computer vision applications.",
    "published": "2026-10-14T00:41:14Z",
    "updated": "2026-10-14T00:41:14Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.19347"
  },
  {
    "id": "2610.19345",
    "title": "When Is Smaller Greener? Right-Sizing Language Models for Agentic AI",
    "authors": [
      "Sajid Siraj",
      "Maria Barbati"
    ],
    "abstract": "AI agents use large language models (LLMs) to plan and act over multiple steps, yet models are usually compared per call rather than per completed task. This paper asks: which model should an agent use to complete tasks reliably while minimising energy, cost and time? We show that per-call comparisons can be misleading for agentic AI. Because a task succeeds only if all required steps succeed, small differences in per-step reliability can produce large differences in overall task success. Failed attempts also consume resources. We therefore evaluate models using energy, cost and time per successfully completed task, treating the completed task as the functional unit. On this basis, we develop a decision model for choosing LLMs in agentic workflows. The model applies to tasks with binary or graded outcomes and to settings with or without retries. We show that each resource has a crossover task length at which a smaller, less reliable model ceases to be the greener, cheaper or faster option. These crossovers divide tasks into three regimes: for short tasks smaller models are preferred, for long tasks larger models are preferred, and only between these extremes do preferences among objectives matter. We embed these results in a two-stage framework that separates efficiency from preference. A Pareto screen first removes models that are never competitive; a weighted decision is required only when a genuine trade-off remains. A pilot study of 15 open-weight models from five developers, ranging from 0.6B to 27B parameters, on two multi-step agent tasks with measured GPU energy supports the predicted structure. The model with the lowest energy per completed task changes with task length and task type, and observed crossover points generally match those predicted from per-step measurements. These findings provide a practical framework for right-sizing language models in agentic AI.",
    "published": "2026-10-14T00:37:23Z",
    "updated": "2026-10-14T00:37:23Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.19345"
  },
  {
    "id": "2610.19342",
    "title": "Why Do Agent Teams Fail Across Boundaries? A Failure Taxonomy for Agent-to-Agent Systems with Private States",
    "authors": [
      "Sarath Shekkizhar",
      "Prathyusha Jwalapuram",
      "Zixuan Ke",
      "Vaidehi Patil",
      "Jiayu Wang",
      "Srijan Bansal",
      "Trong Huy Nguyen",
      "Dingfeng Jiang",
      "Dongqi Liu",
      "Ruochen Zhao",
      "Wei Lu",
      "Giuseppe Carenini",
      "Mohit Bansal",
      "Shafiq Joty"
    ],
    "abstract": "Agents are increasingly interacting with other agents that act for different principals -- people or organizations on whose behalf they work -- e.g., a buyer's personal agent negotiating with an enterprise's seller agent. In such agent-to-agent (A2A) scenarios, each agent has its own environment and holds information and authority that the other cannot see. Moreover, the interests of each agent may be aligned (cooperative), partly aligned (mixed-motive), or opposed (competitive). Existing multi-agent system failure studies assume only one orchestrator, shared workspace, or principal. We ask how A2A systems fail when these assumptions are removed. We study more than 2,500 recorded runs of A2A systems built from different agent harnesses and models, spanning 488 scenarios across eight families (legal, CRM, security, commerce, etc.). From these traces, we derive $A^2$-Failures, a taxonomy of 20 A2A failure modes in four categories: (i) discovery and delegation, (ii) grounding and record consistency, (iii) verification, and (iv) conduct and fidelity. Three observations hold across the harnesses, models, and scenarios studied: (1) Agents match tasks to peer names mentioned in the prompt rather than actively searching for available peers; (2) Agents never fact-check each other unprompted; (3) Scoring only the final output rewards the lead agent while hiding internal coordination, verification, and behavioral breakdowns. Our study makes a case for comprehensive evaluations where agents are scored individually against their own objectives in addition to task outcome. We release the run logs behind the taxonomy at https://huggingface.co/datasets/a2a-salesforce/a2-failures.",
    "published": "2026-10-14T00:36:08Z",
    "updated": "2026-10-14T00:36:08Z",
    "categories": [
      "cs.MA",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19342"
  },
  {
    "id": "2610.19341",
    "title": "MMKG-R1: Constructing Multimodal Knowledge Graphs via Reinforcement Learning",
    "authors": [
      "Zongyu Wu",
      "Yilong Wang",
      "Xiaochen Wang",
      "Minhua Lin",
      "Yuan Zhong",
      "Fenglong Ma",
      "Xiang Zhang",
      "Suhang Wang"
    ],
    "abstract": "Multimodal knowledge graphs (MMKGs) organize information across different modalities to support multimodal Graph Retrieval-Augmented Generation (RAG), which aims to improve the performance of multimodal large language models (MLLMs). The effectiveness of these multimodal Graph RAG methods largely depends on the quality of the constructed MMKGs. However, most existing methods construct MMKGs without explicit guidance on graph quality, while reinforcement learning (RL)-based methods that rely on final-answer correctness may provide only indirect feedback on MMKG quality. To address these limitations, we propose MMKG-R1, a novel MMKG-quality-driven RL framework for training an MLLM as a multimodal knowledge constructor. To be specific, MMKG-R1 introduces multiple quality-aware rewards to directly evaluate both the quality of information extracted from individual knowledge sources and the quality of the assembled MMKG. These rewards are then used to guide the RL training. Experiments across multiple datasets show that MMKG-R1 constructs MMKGs that improve downstream question-answering accuracy.",
    "published": "2026-10-14T00:35:59Z",
    "updated": "2026-10-14T00:35:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.19341"
  },
  {
    "id": "2610.19339",
    "title": "Can We Believe AI Peer Review?",
    "authors": [
      "Zongrui Yang",
      "Haoyuan Li",
      "Zhongsheng Wang",
      "Gillian Dobbie",
      "Jiamou Liu"
    ],
    "abstract": "As large language models become widely used in scientific review and manuscript revision, AI scores are increasingly serving as feedback for assessing paper quality and guiding edits. Yet whether a single AI score reliably reflects the reviewer's judgment, and whether revision gains based on that score are endorsed by other reviewers, remain understudied. Using 200 papers from ICLR 2025 and 2026 and approximately 14,000 AI reviews, we study score reliability, score-distribution estimation, and cross-model agreement on revision gains. Repeated reviews fluctuate even under identical conditions. Finer-grained scoring protocols reduce score variance but also systematically shift mean scores, while the gains assigned to manuscript revisions depend strongly on the reviewer.",
    "published": "2026-10-14T00:27:05Z",
    "updated": "2026-10-14T00:27:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19339"
  },
  {
    "id": "2610.19337",
    "title": "Beyond Initial Creation: Two Decades of Community-based Chart Revisions from Wikimedia Commons",
    "authors": [
      "Jasmine Y. Shih",
      "Chase Stokes",
      "Melanie Tory",
      "Marti Hearst"
    ],
    "abstract": "Open online communities like Wikipedia offer a rich space for understanding the organic evolution of public-facing artifacts, but little is known about how these communities collectively edit chart images. We investigate the phenomenon of \"community editing\" of visualizations by exploring chart revision patterns on Wikimedia Commons. We introduce a novel dataset of 7,786 longitudinal chart revisions across 1,664 images, labeled with edit categories using an LLM pipeline. Initial data analysis uncovered several novel findings. Multi-contributor revision is associated with more edits to mark styling and text content compared to single-contributor revision. Temporally, mark and text edits occur in more \"bursty\" cadences than data edits. In addition, while SVG charts attract more unique contributors and revisions than raster charts, their edit histories involve more tightly scoped and less diverse changes. This dataset enables a wide range of analyses of chart change over time.",
    "published": "2026-10-14T00:24:23Z",
    "updated": "2026-10-14T00:24:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.19337"
  },
  {
    "id": "2610.19331",
    "title": "LLM-jp-4 Technical Report",
    "authors": [
      "LLM-jp",
      ":",
      "Chaoran Liu",
      "Daisuke Kawahara",
      "Hideyuki Tachibana",
      "Hirokazu Kiyomaru",
      "Jun Suzuki",
      "Koshi Eguchi",
      "Kouta Nakayama",
      "Qianying Liu",
      "Rio Yokota",
      "Ryo Takahashi",
      "Sadao Kurohashi",
      "Sosuke Hosokawa",
      "Taishi Nakamura",
      "Takashi Kodama",
      "Yun-Ang Wu",
      "Yusuke Miyao",
      "Yusuke Oda"
    ],
    "abstract": "This paper presents LLM-jp-4, a family of Japanese sovereign large language models (LLMs) developed with an emphasis on transparency, reproducibility, and practical usability. LLM-jp-4 comprises an 8B dense model and a 32B-A3B mixture-of-experts model, both trained from scratch on approximately 12 trillion tokens. To support independent verification and reproduction, we establish explicit criteria for selecting training data, external models, and software, and make the development process publicly available. Evaluation results demonstrate substantial improvements over previous LLM-jp models and competitive performance against open-weight models of similar scale. By documenting the development principles, training procedures, and empirical findings of LLM-jp-4, we aim to provide a reference for future sovereign AI development.",
    "published": "2026-10-14T00:16:21Z",
    "updated": "2026-10-14T00:16:21Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19331"
  },
  {
    "id": "2610.18162",
    "title": "LoOPSD: On-Policy Self-Distillation with Looped Teachers",
    "authors": [
      "Wei Fan",
      "Qingyue Yang",
      "Chao-Hong Tan",
      "Qian Chen",
      "Wen Wang",
      "Xiangang Li",
      "Kejiang Chen",
      "Weiming Zhang",
      "Nenghai Yu"
    ],
    "abstract": "On-policy self-distillation improves a model using guidance from the model itself, but it still requires a teacher that provides more useful predictions than the student. Existing approaches obtain such guidance by giving the teacher additional context or instructions. We ask whether it can instead come from changing how the same model uses its own layers. To address this, we introduce LoOPSD, which searches over a model's layer execution order to construct a stronger teacher and distills its advantage into the student. Specifically, we keep the model weights unchanged while searching for layers to repeat, and use the resulting teacher's predictions on student-generated prefixes to guide learning. We then alternate search and distillation, rebuilding the teacher from the updated student in each round so that the student progressively absorbs the gains from alternative layer execution. Experiments on mathematical and logical reasoning tasks show improvements across models. On GSM8K with a 400-token thinking budget, LoOPSD raises Qwen3-1.7B accuracy from 42.30% to 79.61%; subsequent distillation rounds yield further gains beyond the first round. Together, these findings show that by searching layer execution to construct teachers, we can turn a model's additional computation into improved student capabilities, opening a new avenue for self-distillation to derive supervision from the model's own computation.",
    "published": "2026-10-13T11:07:04Z",
    "updated": "2026-10-13T11:07:04Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18162"
  },
  {
    "id": "2610.18161",
    "title": "Benchmarking Multimodal Large Language Models for Zero-Shot Human-Object Interaction",
    "authors": [
      "Oriol Rabasseda",
      "Zenjie Li",
      "Kamal Nasrollahi",
      "Sergio Escalera"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) have demonstrated strong zero-shot reasoning across diverse domains, but their potential for Human-Object Interaction (HOI) remains unexplored. Unlike traditional HOI approaches that rely on extensive labeled datasets and fixed interaction taxonomies, MLLMs offer flexible reasoning, making them well-suited for dynamic, real-world scenarios. In this work, we present the first systematic study of MLLMs for HOI recognition and detection within a pipeline that combines an external object detector for entity localization with zero-shot multimodal reasoning for interaction understanding. We introduce a benchmark framework for principled zero-shot evaluation, consisting of (i) a unified taxonomy of zero-shot prompting strategies, and (ii) a methodology that transforms token-level logits into interaction scores, enabling fair comparison with specialized HOI models under standard metrics. To support prompt-based evaluation, we additionally construct new question-answer annotations for standard HOI datasets, transforming them into a format suitable for MLLMs. Building on this, we propose two visual prompting strategies, namely Objects as Context and Black Other Objects, that guide MLLMs to target objects while preserving scene context. Experiments on HICO, HICO-DET, and V-COCO demonstrate state-of-the-art zero-shot performance, achieving 53.50 mAP on HICO and 23.69 mAP on HICO-DET. Overall, our work provides a principled benchmarking framework for MLLMs in HOI, opening the door to new models and datasets and enabling flexible open-world interaction understanding.",
    "published": "2026-10-13T11:05:05Z",
    "updated": "2026-10-13T11:05:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18161"
  },
  {
    "id": "2610.18159",
    "title": "Claim Framing as a Driver of LLM Sycophancy",
    "authors": [
      "Jean Seo",
      "Pepa Atanasova",
      "Isabelle Augenstein"
    ],
    "abstract": "Sycophancy in Large Language Models, the tendency to align responses with user preferences over ground truth, has largely been studied using questions without a clear ground truth and with a single, plainly stated user opinion. We present a systematic study of which framings of a user's claim trigger sycophancy in factual question answering, where every answer is objectively verifiable without extra context. Evaluating 14 models on 42K questions, we express correct and incorrect user opinions through various claim framings over 8 dimensions and 21 types, and measure a broad set of opinion-driven behaviors. We find that all models are susceptible to user opinions regardless of size. Models are most influenced by how confidently an opinion is stated, whom it is attributed to, and whether it is presented as shared between the user and the model. In contrast to prior work, framings based on the user's expertise, authority over the model, or social pressure matter little in our factual setting. Larger models resist incorrect opinions better but are no better at recovering from their own errors. Our results call for sycophancy evaluations that probe how an opinion is framed, not merely whether one is present, and that measure multiple behaviors beyond a single flip rate.",
    "published": "2026-10-13T11:02:55Z",
    "updated": "2026-10-13T11:02:55Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18159"
  },
  {
    "id": "2610.18158",
    "title": "When and How Order-Flow Interventions Work After Dealers Adapt",
    "authors": [
      "Guanghao Wu",
      "Zhuo Cai",
      "Zhidong Li",
      "Shoujin Wang"
    ],
    "abstract": "Learning dealer agents can settle on persistently wide quotes, raising what customers pay to trade. A venue can route more orders to tighter quotes, but a wide quote may reflect real risk, and once dealers adapt, an end-to-end comparison cannot show why a rule works: because it intervenes more, picks better moments, is announced in advance, or rewards the right quote. We propose SOFA (State-aligned Order-Flow Allocation), a public order-flow contract with three parts: a State Scorer ranks market states from lagged public data, a Commitment Scheduler announces a budgeted intervention strength before dealers quote, and a Quote-to-Flow Allocator shifts a bounded share of fixed customer demand toward tighter quotes. Our paired re-adaptation protocol gives competing rules the same intervention strengths, only re-timed, lets dealers re-adapt to each rule from a shared checkpoint, and breaks one link at a time. Across 20 independently trained dealer populations in an ABIDES market, concentrating the intervention in states that the score ranks as low-risk lowers low-risk execution cost relative to random timing in every population, by 0.040 tick on average, while a stale announcement or a broken quote-to-flow link raises this cost. In the primary setting the gain comes at the expense of high-risk trades, whose costs rise, so state alignment pays off only for a venue that weighs low-risk costs more than 1.38 times as heavily as high-risk costs. Our code is available at https://github.com/moderncavemann/state-aligned-order-flow-contracts.",
    "published": "2026-10-13T11:02:13Z",
    "updated": "2026-10-13T11:02:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18158"
  },
  {
    "id": "2610.18157",
    "title": "Fan Out or Relay? Ownership-Aware Routing for LLM Agents Querying Siloed Tables",
    "authors": [
      "Zhexi Feng"
    ],
    "abstract": "Inside organizations, a question's data often sit with several owners, who query their own tables but never hand them over. An LLM coordinator can fan out, sending the question to every owner at once, or relay, querying owners in turn and reusing earlier rows. We show that neither is safe in advance, because data ownership decides which one is right. Across thirteen settings on PeopleJoin and BIRD with three model families, fan-out is more accurate in twelve on questions one owner can answer, yet answers at most 4.3% of those joining two owners' tables. The flip follows ownership, not query shape: on BIRD two-table joins, fan-out answers 32-44% when one owner holds both and 1-4% otherwise. Relay wins by conditioning on returned rows, and hiding them from an otherwise identical planner cuts two-owner accuracy from 23.2% to 5.1%. Since ownership is public, we propose Ownership-Aware Routing (OAR), which drafts a schema-only SQL query, counts the owners whose tables it joins, and routes the question before any private row is read. In ten settings OAR is never significantly less accurate than the best fixed protocol, and beats every fixed protocol on PeopleJoin, by up to 9.3 points on held-out organizations.",
    "published": "2026-10-13T11:01:37Z",
    "updated": "2026-10-13T11:01:37Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.18157"
  },
  {
    "id": "2610.18155",
    "title": "When Do Learned Blocks Preserve Causal Meaning? Block Identifiability and Constructive Causal Abstractions",
    "authors": [
      "Karim Zaghw",
      "Wieland Brendel",
      "Patrik Reizinger"
    ],
    "abstract": "Standard identifiability theory assumes one-dimensional latent factors, but learned representations can encode latent information across multidimensional blocks whose internal coordinates are not uniquely determined. When such blocks are used to represent and intervene on higher-level concepts, it is unclear whether their causal meaning survives the transformations left unresolved by block-identifiability. We connect block-identifiability to constructive causal abstraction. We show that block-diagonal invertible transformations followed by compatible coordinate permutations form the maximal class that preserves every constructive causal abstraction built on those blocks. This guarantee assumes that the correspondence between blocks and concepts is updated with the representation. A small synthetic experiment with additive autoencoders shows that high-level interventions can be transferred between independently learned representations while approximately preserving their intended effects.",
    "published": "2026-10-13T11:00:57Z",
    "updated": "2026-10-13T11:00:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18155"
  },
  {
    "id": "2610.18143",
    "title": "RadixFlow: Filling Execution Bubbles in Prefix-Cached Hybrid LLM Serving",
    "authors": [
      "Huihao Jing",
      "Wenbin Hu",
      "Shaojin Chen",
      "Haochen Shi",
      "Haoyu Huang",
      "Sirui Zhang",
      "Yuxuan Liu",
      "Zhongwei Xie",
      "Haoran Li"
    ],
    "abstract": "Prefix reuse improves LLM inference by sharing the KV cache of common prompt prefixes. This helps only if the scheduler can execute a matched branch in the current worker round. Schedulers assume that a matched prefix is ready, which holds for full attention but fails for hybrid LLMs. There, a branch (the consumer) may need recurrent state that another branch (the producer) is still computing in the same round. The native scheduler stops its waiting-queue scan at this blocked consumer, and the resulting head-of-line blocking creates \\emph{execution bubbles}: idle batch slots that independent work could fill. We introduce RadixFlow, which decouples prefix matching from state readiness. Its state-ready traversal turns a global scan barrier into a local wait: only the consumer is blocked until the next round, while feasible independent branches keep filling the batch under the native state check. On five hybrid models, RadixFlow lowers mean latency by 3\\% to 24\\% and worker rounds by 11\\% to 44\\% at almost unchanged reuse. On the larger Qwen3.5 models, ablations show that most of the gain comes from traversal, which adds little on a full-attention control. Heavier rounds limit how much of this saving reaches latency.",
    "published": "2026-10-13T10:49:05Z",
    "updated": "2026-10-13T10:49:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18143"
  },
  {
    "id": "2610.18142",
    "title": "FlowCred: Hierarchical Credit Assignment and Functional Coordination for Joint Text-to-Video Post-Training",
    "authors": [
      "Mingxuan Zhu",
      "Yanwei Huang",
      "Shiyuan Liu",
      "Xinzhi Zhang",
      "Shujie Li",
      "Yuanxing Zhang",
      "Lu Chen"
    ],
    "abstract": "Prompt optimization and generator post-training are two complementary ways to improve text-to-video (T2V) generation, and recent systems increasingly train both modules jointly. However, optimizing a prompt policy and a video generator from the same terminal reward creates two ambiguities: prompt quality is confounded with stochastic generation, and the two modules may realize overlapping local improvements. We introduce FlowCred, a two-level framework for joint T2V post-training. First, hierarchical credit assignment uses matched prompt-seed rollout grids to separate prompt-level credit from prompt-conditioned generator residuals under shared randomness. Second, functional coordination probes alternative current-policy prompts at states from actual generation trajectories, providing generator-aware evidence for prompt optimization while selectively attenuating generator updates already supported by conditioning changes. Across multiple T2V benchmarks, FlowCred consistently improves matched joint-training baselines. On LTX-2.5, FlowCred improves a strictly matched joint-training control from 61.47 to 64.46 on T2V-CompBench and from 55.58 to 58.08 on StoryEval, without increasing decoded-video or reward-model-call budgets. Factorial and realized-update analyses show complementary contributions from prompt shaping and generator routing, while human evaluation and transfer across backbones and updater families provide further supporting evidence.",
    "published": "2026-10-13T10:48:01Z",
    "updated": "2026-10-13T10:48:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18142"
  },
  {
    "id": "2610.18141",
    "title": "Mitigating Cross-Modal Hallucinations by Correcting Modality Misrouting in Omnimodal LLMs",
    "authors": [
      "Yu Mi",
      "Licheng Pan",
      "Jiayi Zhu",
      "Qirui Liu",
      "Yitong Qiao",
      "Changtong Xu",
      "Tao Wei",
      "Fei Sun",
      "Zhixuan Chu",
      "Kui Ren"
    ],
    "abstract": "Omnimodal large language models (OLLMs) are susceptible to cross-modal hallucinations under audio-visual interference. We find that, for a substantial fraction of incorrect joint predictions, the question-relevant unimodal branch can still recover the correct answer, suggesting that task-relevant evidence can remain recoverable from the relevant modality even when it is not reflected in the joint prediction. We refer to this recoverable failure pattern as \\emph{modality misrouting}. We propose CaRe (Conflict-aware Residual Intervention), a training-free inference-time method for identifying and correcting modality misrouting. CaRe uses a text-only modality probe to identify a candidate modality-specific counterfactual branch, and flags potential misrouting when its prediction conflicts with the original joint prediction. For such cases, CaRe computes a residual direction from the discrepancy between the counterfactual and fused representations and uses it to steer the original multimodal state toward the relevant modality evidence, while retaining both modalities in the original audio-visual inference path. The intervention strength is adapted based on the confidence of the counterfactual branch. Experiments on CMM and AVHBench across two OLLMs show that CaRe consistently outperforms the evaluated inference-time hallucination-mitigation baselines.",
    "published": "2026-10-13T10:48:01Z",
    "updated": "2026-10-13T10:48:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18141"
  },
  {
    "id": "2610.18133",
    "title": "Human-Inspired Asymmetric Collaboration for Dual-Student Semi-Supervised Medical Image Segmentation",
    "authors": [
      "Huiyi Ren",
      "Ziming Fang",
      "Jiaming Cai",
      "Rui Xu",
      "Haojie Li"
    ],
    "abstract": "Dual-student learning enriches predictive diversity in SSMIS by introducing a strongly augmented view alongside a weakly augmented view. Insufficient strong augmentation may homogenize the students, whereas excessive augmentation can corrupt anatomical evidence and destabilize collaboration. This challenge echoes feedback-regulated human instruction, where learners receive differentiated tasks and the task difficulty is continually adjusted according to their evolving responses. Inspired by these, we propose Human-Inspired Asymmetric Collaboration (HAC), a closed-loop dual-student framework that maintains weak--strong learning through adaptive difficulty calibration and geometry preservation. Specifically, Reinforcement-guided Difficulty Calibration (RDC) formulates strong-augmentation control as a window-level reinforcement learning process, using augmentation history, realized perturbations, and training responses to dynamically adjust the augmentation magnitude, operation number, and magnitude range. Meanwhile, the Gramian Geometry Preservation Constraint (G2PC) preserves the early-stage three-branch geometry through global volume and pairwise area constraints, preventing shared supervision from homogenizing the two students. Comprehensive evaluations across LA, Pancreas, and BraTS-2019 validate both the segmentation effectiveness and capability-aware difficulty calibration of HAC.",
    "published": "2026-10-13T10:43:19Z",
    "updated": "2026-10-13T10:43:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18133"
  },
  {
    "id": "2610.18127",
    "title": "Monitoring latent reasoning in looped language models",
    "authors": [
      "Pawel Olszowiec",
      "Paulina Tomaszewska",
      "Maciej Żelaszczyk",
      "Michal Byra",
      "Neo Christopher Chung"
    ],
    "abstract": "Looped language models (LMs) reuse one block of layers several times per token generation, promising more latent computation at no additional storage cost. Despite their rising popularity, the analysis of looped LMs is still in its infancy: little is known about whether the iterative transformations actually improve their capabilities, or whether these models remain stable under prompt perturbation. We construct an inspection protocol rooted in Mechanistic Interpretability comprising five diverse lenses. We apply it to examine eight looped LMs from four families. Models differ in many aspects but the key one is whether the prompt is transmitted only within the looped state (carry loops: Ouro, LoopUS) or re-supplied at every iteration (re-read loops: Parcae, and Rec-OLMo & Huginn from the Raven family). The results of our study provide valuable insights concerning safety and efficient use of looped language models.",
    "published": "2026-10-13T10:39:05Z",
    "updated": "2026-10-13T10:39:05Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18127"
  },
  {
    "id": "2610.18126",
    "title": "Fresh at Decision, Stale at Action: Routing New Information to LLM Decisions Already Made",
    "authors": [
      "Ayoub Merimi",
      "Souhail Bakkali",
      "Abdeljalil Sakat"
    ],
    "abstract": "Freshness shapes an LLM decision at the moment it is made; the action it commits to is latent, carried out later, in a changing world. We therefore introduce a timestamp theory of decision validity and a decision ledger that realises it. Six timestamps define a decision; a freshness ceiling bounds what up-to-date evidence guarantees at action time, placing the remaining risk in information published afterwards. Accuracy then factorises into two capabilities: routing, which delivers that information to affected decisions before their revision deadlines, and temporal judgment, which reads it for the time of action. The ledger is persistent state holding each decision's times, evidence and background knowledge, indexed by watch conditions written at decision time. Controlled decision streams with exact labels confirm four predictions across five LLMs, from 8B to frontier scale: freshness alone yields exactly the accuracy the ceiling predicts; models act on decisive news once it arrives, so accuracy follows routing; the ledger's index sets what routing reaches, and watch conditions reach indirect dependencies at low exposure; and the remaining errors concern when a change takes effect. Freshness makes a decision right when it is made; routing and temporal judgment keep it right when it is carried out.",
    "published": "2026-10-13T10:37:12Z",
    "updated": "2026-10-13T10:37:12Z",
    "categories": [
      "cs.AI",
      "cs.GT",
      "cs.IR",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.18126"
  },
  {
    "id": "2610.17019",
    "title": "Understanding Personalization Gains in Whisper",
    "authors": [
      "Sergei Katkov",
      "Antonio Liotta"
    ],
    "abstract": "Whisper-style ASR models provide strong zero-shot transcription, but their residual errors are not evenly distributed across datasets, recording conditions, and metadata-based groups. We study when lightweight low-rank adaptation (LoRA) improves Whisper and whether observed gains require group-specific adapters. Across Common Voice, LibriSpeech, and VoxPopuli, we compare zero-shot Whisper, pooled LoRA, and group-specific LoRA under matched within-group splits. We find that adaptation is not uniformly beneficial: gains are concentrated in difficult Common Voice groups, are consistent on VoxPopuli, and largely disappear on low-error LibriSpeech. Crucially, pooled LoRA often matches, and sometimes clearly outperforms, group-specific LoRA. Gains over zero-shot should therefore be tested against matched pooled adaptation before being interpreted as evidence of personalization.",
    "published": "2026-10-12T15:59:09Z",
    "updated": "2026-10-12T15:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.17019"
  },
  {
    "id": "2610.17016",
    "title": "ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty",
    "authors": [
      "Yuyang Dai",
      "Yuting Tang",
      "Futoshi Futami",
      "Takashi Ishida"
    ],
    "abstract": "Evaluating model uncertainty on real-world data is challenging because each instance provides only a single observed label, leaving true conditional class probabilities unknown. To address this, we introduce ProbabilityBench, a benchmark that provides exact, instance-level class probabilities across three simulated text-based domains: peer review, covert information transfer, and credit risk. By explicitly defining the full data-generating process for each environment, we analytically compute both exact class probabilities and Bayes error. Furthermore, we provide a theoretical guarantee that rendering these cases into natural-language memos strictly preserves their underlying generative probabilities. This exactness enables direct measurement of reported probability quality via KL divergence. Across 16 evaluated models, most models on the observed cost-quality Pareto frontiers are decision models, including Jev and Perplexity Decider. Finally, ProbabilityBench serves as a meta-evaluation framework, leveraging known ground-truth values to benchmark the accuracy of standard calibration metrics and Bayes-error estimators themselves.",
    "published": "2026-10-12T15:58:15Z",
    "updated": "2026-10-12T15:58:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.17016"
  },
  {
    "id": "2610.17015",
    "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
    "authors": [
      "Hao Yu",
      "Haoyu Chen",
      "Hui Wei",
      "Yan Jiang",
      "Nicu Sebe",
      "Guoying Zhao"
    ],
    "abstract": "Scaling up data and model capacity has driven substantial progress in visual representation learning. However, conventional pretext tasks exhibit diminishing returns on fine-grained facial analysis. We attribute this to a scaling bottleneck: these tasks model each image's appearance and are dominated by identity, pose, and illumination, so subtle within-identity facial differences contribute little to the training signal. We introduce DIME, a differential masked autoencoder for large-scale facial representation learning. DIME builds on a simple observation: two images of the same person share identity-specific appearance, so their difference exposes facial changes. DIME reconstructs both masked images in an identity-matched pair and, through an Explicit Differential Direction Supervision (EDDS) objective, aligns the direction of their reconstructed difference with the true difference, while source isolation makes each reconstruction depend only on its own image. Shared appearance cancels in this difference, and because EDDS ignores magnitude, subtle facial changes count as much as large pose or illumination changes. DIME uses identity labels only to form pretraining pairs, requires no dense annotations, and learns dense facial representations with emergent part-level semantics. We pretrain DIME on 20 million high-resolution facial images consolidated from existing face datasets. DIME's AU detection performance continues to improve as pretraining data scales from 6M to 20M images, with its BP4D F1 increasing by 5.9 points, while MAE gains only 0.5 points on the same subsets. DIME also outperforms specialized facial methods on AU detection, AU intensity estimation, cross-domain anti-spoofing, landmark localization, head pose estimation, face parsing, and face generation.",
    "published": "2026-10-12T15:57:06Z",
    "updated": "2026-10-12T15:57:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17015"
  },
  {
    "id": "2610.17014",
    "title": "MAGNET: Manifold-Aware Graph Diffusion Network for Connectome Generation",
    "authors": [
      "Protyay Dey",
      "Ayush Roy",
      "Hyuna Cho",
      "Won Hwa Kim",
      "Vishnu Suresh Lokhande"
    ],
    "abstract": "Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class-conditional geometry buried under coarse labels. We propose MAGNET, a Manifold-Aware Graph Diffusion Network which uses a normalized-Cholesky representation of the manifold of correlation matrices that guarantees validity. MAGNET lifts noisy latent states into ROI-level region tokens and performs denoising with a relational inductive bias over brain atlas regions. To deal with structural problems induced by coarse labels, MAGNET employs class-anchored conditioning, amortized structural bridge, and relevance-preserving corruption. Across ABIDE, ADNI, and OASIS-3, MAGNET consistently achieves favorable results compared to previous manifold-aware approaches, demonstrating improvements of 7-21% in class-conditional fidelity ($α,β$-F1) across three cohorts and better sampling efficiency. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero-shot setting, improving subclass covariance alignment ($λ$-MSE) by over 30%. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis. Moreover, efforts in making the diffusion denoising class-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings. The code repository can be found at https://github.com/protyayofficial/MAGNET.",
    "published": "2026-10-12T15:56:09Z",
    "updated": "2026-10-12T15:56:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17014"
  },
  {
    "id": "2610.17009",
    "title": "MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation",
    "authors": [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Hongchen Luo",
      "Xueyang Fu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models (MGMs) remains largely underexplored. Existing approaches that directly adapt Group Relative Policy Optimization (GRPO) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high-entropy subject token exploration while amplifying intra-group reward variance through exploratory-exploitative routing to yield more discriminative advantage estimates. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them. Extensive experiments on multiple text-to-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28.89 to 36.39, achieving state-of-the-art performance.",
    "published": "2026-10-12T15:52:58Z",
    "updated": "2026-10-12T15:52:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17009"
  },
  {
    "id": "2610.17002",
    "title": "Governing Copyright Responsibly in the Era of Generative AI",
    "authors": [
      "D. Kochetkov"
    ],
    "abstract": "Large language models are trained on collections that may include scholarly works, while authors generally lack work-level information about whether and how their works were used. This paper asks how copyright governance frames and operationalises the protection of such authors, and what a responsible alternative would require. Forty legislative, judicial and soft-law instruments issued between 2019 and 2026 were coded deductively against a framework derived from Responsible Research and Innovation theory, yielding 1,337 category assignments across 835 segments. The European Union and the United States are the primary cases; the United Kingdom, China and international bodies serve as comparators. Normative orientation and the distribution of responsibility dominate the corpus, while reflexivity is the least represented category and reaches its minimum in the US sub-corpus. Both primary jurisdictions frame protection procedurally rather than as an entitlement, and no instrument in the corpus creates a general author-facing attribution duty for the use of works in AI training. From the coded gaps, the paper derives a six-instrument governance design and a capacity-based allocation of responsibility among developers, publishers, collecting societies, funders, institutions, regulators, and individual authors.",
    "published": "2026-10-12T15:50:05Z",
    "updated": "2026-10-12T15:50:05Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.17002"
  },
  {
    "id": "2610.16998",
    "title": "Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents",
    "authors": [
      "Cong Pang",
      "Jiaqi Su",
      "Chengrui Wu",
      "Kuihao Yan",
      "Tianrui Zhang",
      "Zixuan Qiu",
      "Chao Lin",
      "Zixiu Lin",
      "Zixuan Chen",
      "Zelin Xiao",
      "Tiankuo Yao",
      "Jiawei Hong",
      "Zixuan Chen",
      "Dan Xu",
      "Lewei Lu",
      "Wenjie Wang",
      "Xin Lou"
    ],
    "abstract": "Deep search enables language agents to solve complex information-seeking tasks through iterative web exploration. However, developing robust open-source agents remains challenging for three reasons. First, opaque trajectory-construction pipelines make training data difficult to audit and reproduce. Second, context compression can create a substantial mismatch between training and inference. Third, agents may retrieve benchmark content from the open web during evaluation, contaminating the results and overstating their performance. To overcome these bottlenecks, we introduce Glasseek, a fully transparent deep search framework spanning the complete development lifecycle, releasing all data, model weights, training recipes, and code. Specifically, for data construction, we establish a verifiable trajectory curation pipeline that systematically generates high-quality exploration paths. For training, we propose Compaction-Managed GSPO (CM-GSPO), which uses the same policy for search and summarization while optimizing only execution sub-trajectories, enabling end-to-end search-policy training across context-compaction boundaries. For evaluation, we conduct the first systematic audit of test-set leakage in open-web agents and release a modular anti-leakage plugin that seamlessly integrates into existing evaluation harnesses. Under this rigorous evaluation protocol, our 9B agent outperforms frontier proprietary agents across almost all deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open-weight agents, setting a new state of the art at the 9B scale.",
    "published": "2026-10-12T15:48:45Z",
    "updated": "2026-10-12T15:48:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16998"
  },
  {
    "id": "2610.16990",
    "title": "TabGift: A Context-Efficient Foundation Model for Tabular Data Generation",
    "authors": [
      "Yu-Sheng Li",
      "Jun-Peng Jiang",
      "Han-Jia Ye"
    ],
    "abstract": "Tabular data generation aims to synthesize realistic samples from limited observations while faithfully capturing the underlying data distribution. Tabular foundation models (TFMs), pretrained on diverse tabular tasks and adapted through in-context learning, have demonstrated strong predictive capabilities, suggesting the potential of extending this paradigm to tabular data generation. However, the strong predictive performance of TFMs often relies on sufficiently large context sets, whereas tabular generation is typically needed precisely when target data are scarce. Extending the foundation-model paradigm to generation therefore requires reliable distribution inference from only a limited context. To this end, we propose TabGift, a context-efficient tabular foundation model enabling both efficient distribution modeling and effective generation from only a few context samples. TabGift maps heterogeneous tables into a shared latent space with a pretrained tabular encoder, where an in-context diffusion model learns to denoise latent samples conditioned on a small set of clean examples. This design transfers generative priors across datasets and enables distribution inference from limited context, while a lightweight dataset-specific MLP decoder maps generated representations back to the original data space. Experiments on 7 classification and 11 regression datasets show that TabGift consistently outperforms representative baselines in synthetic data quality, with particularly strong gains under limited-context settings, while achieving substantially faster adaptation and generation.",
    "published": "2026-10-12T15:43:52Z",
    "updated": "2026-10-12T15:43:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16990"
  },
  {
    "id": "2610.16988",
    "title": "Self-Supervised Learning of Semantically Consistent Visual Features via a Simple 3D Prior",
    "authors": [
      "Sebastian Day",
      "Oisin Mac Aodha"
    ],
    "abstract": "Visual features extracted from vision models like DINOv2 or Stable Diffusion enable high quality semantic correspondence between images. However, such features exhibit documented limitations that hinder accurate correspondence estimation such as the inability to disambiguate the left from right for categories exhibiting symmetries or repeated parts. Previous attempts to improve these features rely on using supervised data such as annotated keypoint pairs or camera pose information, or make restrictive topological assumptions, such as modelling the object of interest as a 3D sphere. We introduce a new self-supervised approach that allows us to learn features for topologically complex object categories using a simple prior. Instead of relying on an expensive instance-level analysis by synthesis pipeline, our approach makes use of contrastive learning and distribution matching at the global dataset-level to learn the coarse shape and appearance of a category. Combined with additional geometric losses, this enables us to replicate the global and local statistics of visual features which match those that are extracted from real images. Quantitative results are presented across several challenging object categories, demonstrating the effectiveness of our approach.",
    "published": "2026-10-12T15:42:59Z",
    "updated": "2026-10-12T15:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.16988"
  },
  {
    "id": "2610.16985",
    "title": "AUGUstus: Autonomous Driving VLA Model with Unified Generation and Understanding",
    "authors": [
      "Yuqi Ye",
      "Caigao Jiang",
      "Zhuonan Wang",
      "Congyuan Pei",
      "Chao Qu",
      "Changhao Peng",
      "Junhong Lin",
      "Qize Yu",
      "Zetian Song",
      "Guangzhao Fu",
      "Chongruo Wu",
      "Shiyu Huang",
      "Shuchang Zhou",
      "Honggou Yang",
      "Wei Gao"
    ],
    "abstract": "Vision-language-action (VLA) models show strong potential for end-to-end autonomous driving by leveraging world knowledge and understanding to excel in long-tail scenarios. However, current VLAs have two limitations: 1) Degeneration into vision-action (VA) models. For low latency, regression/flow-based methods directly generate actions but underuse VLM understanding, causing unsafe, unexplainable actions. 2) Autoregressive high latency. Autoregressive methods sequentially generate chain-of-thought (CoT) and action tokens, fully leveraging VLM understanding, but high latency hinders deployment. To enable low-latency deployment while using CoT to assist action generation, we propose AUGUstus, an Autonomous-driving VLA model with Unified Generation and Understanding. We unify diffusion-based action generation and autoregressive CoT understanding in one model, where understanding only serves generation. Joint CoT supervision preserves VLM spatial understanding in shared representation for safer, more accurate trajectories. AUGUstus-mode orders action generation before CoT, so CoT supervises reliable actions during training while inference needs only action output, enabling low latency. AUGUstus-GRPO, a unified GRPO algorithm, jointly optimizes action and CoT, improving action performance. Experiments show AUGUstus achieves 94.6 PDMS on NAVSIMv1 and 90.7 EPDMS on NAVSIMv2, SOTA planning without scorer module. On nuScenes, it achieves average L2 error 0.27 m and average collision rate 0.05%, best among compared methods. To validate AUGUstus practicality, we train on in-house data with 512 NVIDIA H800 GPUs for ~2 days, evaluate on an internal 1,000 km dataset, and preliminarily deploy on a real vehicle, achieving 12 Hz operation. Project page: https://augustus-ad.github.io",
    "published": "2026-10-12T15:42:09Z",
    "updated": "2026-10-12T15:42:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16985"
  },
  {
    "id": "2610.16984",
    "title": "From Suboptimal to Optimal: One-Step Latent Flow Policies for Offline Reinforcement Learning",
    "authors": [
      "Shenghua Lu",
      "Zixuan Yang",
      "Rongxu Zhao",
      "Bohao Qu",
      "Jifeng Hu",
      "Hechang Chen"
    ],
    "abstract": "Offline reinforcement learning aims to learn effective policies from fixed datasets without environment interaction. Although generative models such as diffusion and flow matching enhance policy expressiveness, they typically start from uninformative Gaussian noise and generate actions through multi-step iteration, leading to high computational costs and failing to effectively leverage suboptimal trajectories in datasets. We propose MeanFlow2Better (MF2B), which reformulates offline RL as generative decision chunk optimization from current performance status to better performance status in a high-level latent decision space. MF2B maps trajectory chunks to high-level latent decision representations through an encoder, placing generation starting points within a structured decision space sculpted by behavioral data. The model learns a shared conditional mean velocity field in this space, constructing two flow mappings: from Gaussian-Induced Decision Sources toward positive behavioral decision regions, and from suboptimal decisions toward high-value decision regions. Both flow mappings complete decision refinement through one-step ODE integration over the unit time interval $Δt=1$, requiring neither multi-step iterative sampling nor backpropagation through time. Furthermore, we propose hierarchical chunk-level advantage to guide the flow direction toward high-return regions, where the high-level decisions cover multiple low-level actions, leading to sequence length compression from $T$ to $K \\approx T/H$ and significantly lower computational overhead. On the D4RL Gym-MuJoCo benchmark, MF2B achieves an average score of 90.91, matching or surpassing strong baselines.",
    "published": "2026-10-12T15:41:40Z",
    "updated": "2026-10-12T15:41:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16984"
  },
  {
    "id": "2610.16980",
    "title": "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models",
    "authors": [
      "Max Achterweust",
      "Stefan Groot Nibbelink",
      "Vincent J. de Beer",
      "Stefan Schipper",
      "Zeynep Yüksektepe",
      "Pedro Andrade da Silva",
      "Aurelia Peppelaar",
      "Martijn J. van der Willigen",
      "Christophe B. Minkenberg",
      "Robert F. van der Willigen"
    ],
    "abstract": "Artificial Intelligence (AI) models are increasingly developed, published and used across scientific fields. Researchers, students and industry professionals who want to apply these models to their own research questions often lack the programming and data science expertise to do so. Existing guidelines cover single steps, but not the route from a published model to working predictions on one's own data. Here we present the hands-on workflow PRAISE, a Practical, Reproducible AI-model Implementation for Science and Education, that helps non-programmers implement published AI models step by step. Because implementations rarely work the first time, PRAISE anticipates common failures and provides a fallback route for each. As a proof of principle, three BSc chemistry students and their tutor applied PRAISE without prior programming or data science knowledge. They reproduced, validated and extended a state-of-the-art model that predicts enzyme-substrate interactions. This shows that with PRAISE, implementing an AI model from the literature becomes a learnable skill, one that turns non-programmer scientists from users into evaluators and improvers of AI models.",
    "published": "2026-10-12T15:39:12Z",
    "updated": "2026-10-12T15:39:12Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.16980"
  },
  {
    "id": "2610.15715",
    "title": "History Replays Itself: Unleashing Long-Context Capability in Linear Attention",
    "authors": [
      "Li Nanbo",
      "Firas Laakom",
      "Yilan Zhang",
      "Piotr Piękos",
      "Yimeng Chen",
      "Liangyu Wang",
      "Yifan Xu",
      "Mateusz Ostaszewski",
      "Dandan Guo",
      "Wenyi Wang",
      "Yanning Dai",
      "Yuhui Wang",
      "Jürgen Schmidhuber"
    ],
    "abstract": "Linear attention promises the efficiency needed for long-context language modelling, yet its fixed-size recurrent state must simultaneously support ongoing computation and preserve information from an ever-growing history. This coupling has reinforced a prevailing view that the state's memory capacity defines the model's long-context capability. We challenge this presumed ceiling: \\emph{recurrent computation need not bear the full burden of long-term storage}. We introduce NoteBank, a sparse episodic memory that archives selected text before future queries are known, uses the backbone's native features for writing and addressing, and reads retrieved evidence through its native forward computation via replay. This \\emph{training-free, plug-and-play} interface requires no external embedding model, separately trained retriever, or separate neural reader. At one million tokens, it raises Gated DeltaNet's mean accuracy across six RULER retrieval tasks from 1.7% to 70.3%, with no observed significant retrieval degradation from 4K to 1M tokens. This recovery adds $\\leqslant$0.025% to analytical FLOPs, with persistent context storage approximately 1/2,600 that of a Transformer's full MHA KV cache at matched width, depth, and precision. Experiments extend from three 1.3B recurrent backbones to Mamba-2-8B and post-trained Qwen3.5-9B, demonstrating gains on LongBench v1/v2 and MemoryAgentBench. Together, these results show that sparse evidence storage and native replay can substantially expand the long-context capability of pretrained linear attention models while retaining the efficiency of recurrent computation.",
    "published": "2026-10-11T15:58:04Z",
    "updated": "2026-10-11T15:58:04Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.15715"
  },
  {
    "id": "2610.15714",
    "title": "MedHarnessBench: A Unified Benchmark for Healthcare Agent Evaluation",
    "authors": [
      "Rui Tang",
      "Hongqiu Wang"
    ],
    "abstract": "Healthcare agents must transform longitudinal clinical evidence into reliable actions through heterogeneous tools and stateful workflows, conditions under which model-centric systems may lose context, misuse tools, fail to verify consequential transitions, or cross authorization boundaries. Existing medical-agent benchmarks primarily emphasize terminal task outcomes, making it difficult to determine whether execution failures arise from the agent model, the runtime harness, or their interaction. We present the Medical Harness Protocol, an outcome-preserving framework that independently evaluates seven healthcare-specific process dimensions: Care Action Fulfillment, Clinical Resource Competence, Patient-Evidence Alignment, Clinical Workflow Continuity, Clinical Auditability, Closed-Loop Verification, and Clinical Conduct Boundaries. A normalized intervention trace further tracks whether runtime support is available, activated, delivered, adopted by the agent, and propagated into subsequent behavior. We instantiate the protocol as MedHarnessBench, comprising 342 executable tasks across FHIR/EHR operations, healthcare-administration interfaces, and multimodal clinical tools. Across more than 16,000 controlled task executions, MedHarness yields broad improvements in terminal task success, intermediate subtask completion, and healthcare-specific process quality. We further evaluate MedHarness against multiple general-purpose harnesses and use controlled single-fault perturbations to verify the sensitivity and discrimination of the seven-dimensional evaluation. These results demonstrate that healthcare-specific runtime support can substantially improve both task completion and execution quality, while revealing failures that terminal outcomes alone cannot capture. Code and resources are available at https://github.com/Tomry1114/Awesome-Agent-Harness-for-Healthcare.",
    "published": "2026-10-11T15:57:52Z",
    "updated": "2026-10-11T15:57:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15714"
  },
  {
    "id": "2610.15711",
    "title": "What DNA Foundation Models Learn Beyond Sequence Composition",
    "authors": [
      "Vincenzo Yuto Civale",
      "Andrew David Bagdanov",
      "Alberto Magi"
    ],
    "abstract": "Do genomic foundation models (FMs) provide predictive information beyond simple sequence composition? We evaluate frozen representations from five DNA FMs against normalized k-mer frequencies across 57 genomic classification datasets and two exploratory gene-expression regression tasks. Simple k-mer features remain competitive with most models, whereas NTv3 shows a consistent advantage; the ranking is robust to globally fixed and multi-scale k-mer baselines and alternative downstream probes. To test incremental predictive utility directly, we compare global 6-mer features with their concatenation with each FM embedding under a matched Random Forest protocol. NTv3 improves 46 of 57 datasets (mean $Δ$MCC = +0.072), while Caduceus provides smaller gains and the other models do not improve mean MCC. We separately decompose embeddings into a component linearly predictable from 6-mer frequencies and a ridge residual, finding that linear recoverability does not reliably indicate downstream utility. Exact 6-mer-preserving shuffles further reveal task-relevant sequence-order sensitivity, most pronounced for NTv3, although order sensitivity alone does not guarantee predictive improvements. Our results establish compositional features as essential controls and offer complementary diagnostics for evaluating the added value of frozen genomic representations, without making claims about fine-tuning capacity.",
    "published": "2026-10-11T15:51:29Z",
    "updated": "2026-10-11T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15711"
  },
  {
    "id": "2610.15710",
    "title": "Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate",
    "authors": [
      "Xupeng Chen",
      "Chenqian Le"
    ],
    "abstract": "Long-term memory for assistants needs a gate that decides when a new utterance retires an old stored claim. Benchmark labels for this step mark a pair as changed or not, so they cannot tell a gate that acts on established change from one that acts on a hint. We write a task contract that separates the two (SUPERSEDED vs. NEEDS-CONFIRMATION vs. COMPATIBLE), label 500 test pairs built from STALE (change pairs plus same-user controls) with three LLM annotators and two human adjudicators (one author and a second annotator; provenance reported), and evaluate Jev, a typed \"System One\" decision model, under pre-registered hypotheses. Of the 179 test pairs STALE marks as changed, 72 meet the contract's bar for an established change. Jev never retired a claim on 141 same-conversation non-changes. Its failure is premature retirement: the binary gate retires 39.2% of claims whose change is only suggested. A three-way decision cuts this to 15.5% at a 15.3-point detection cost, which misses our pre-registered 10-point budget, and it lands on the binary gate's own threshold frontier; these verdicts hold under three readings of the gold labels. On a held-out vault scored against a second annotator's labels, a cascade that escalated uncertain cases to a reasoning model and looked best on development data was indistinguishable from simply raising the threshold (premature retirement 26.8% vs. 6.5% on dev). Part of the gap comes from the gold labels: relative to that annotator's reading, LLM-majority gold shares most of its errors with a same-family escalation model, and an identity for binary labels says how much such shared errors hide. The rest is small-sample selection on development data. For builders this means a binary score should not be wired to delete: route suggested changes to pending evidence, and do not trust a cascade selected on development data of this size.",
    "published": "2026-10-11T15:48:16Z",
    "updated": "2026-10-11T15:48:16Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15710"
  },
  {
    "id": "2610.15708",
    "title": "SpecForge: Recursive Self-Improvement for Coding Agents via Behavioral Specifications",
    "authors": [
      "Yutong Cheng",
      "Haifeng Chen",
      "Peng Gao",
      "Wei Cheng"
    ],
    "abstract": "Coding agents based on frozen language models can improve their performance by refining the external context they rely on, without updating model weights. We study recursive self-improvement through behavioral specifications: natural-language code documentation that describes the behavior of program entities and guides agents in generating correct code. We formulate a self-improvement loop in which an agent generates code from its current specifications, evaluates it with execution-verified tests, and refines the specifications based on observed failures. The improved specifications then guide subsequent generation, progressively improving the agent's understanding of the codebase. However, recursive refinement is challenging because program entities are interdependent. Improving the specification of one entity can inadvertently degrade the correctness of others, a phenomenon we call output coupling. This creates a whack-a-mole effect in which local improvements cause regressions elsewhere, preventing consistent progress. We introduce SpecForge, a multi-frontier tree search framework that addresses this challenge with three mechanisms: (i) Pareto-guided state selection preserves complementary specification states and prevents premature commitment; (ii) dependency-constrained entity selection prioritizes callee-before-caller refinement; and (iii) error-diversified expansion explores multiple refinements using different subsets of test failures. On DevEval+, SpecForge achieves the best performance across five backbone models, including a 94.9% solve rate with Claude-4.5-Sonnet and a 5.7-percentage-point average improvement over the strongest baseline. The improved specifications also make the agent better at tasks outside the loop: they transfer to cross-language translation and to new-feature implementation, where they outperform the benchmark-provided requirement documents.",
    "published": "2026-10-11T15:46:22Z",
    "updated": "2026-10-11T15:46:22Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.15708"
  },
  {
    "id": "2610.15705",
    "title": "bharatSetu: a 1M x 22 bridge for indic translation",
    "authors": [
      "Haq Nawaz Malik",
      "Nahfid Nissar",
      "Faizan Iqbal"
    ],
    "abstract": "India's Eighth Schedule recognises 22 languages, yet parallel data is uneven across them, and many language pairs, especially among lower-resource languages such as Bodo, Dogri, Santali and Kashmiri, lack direct bitext. We present BharatSetu 22-Indic 1M, a row-aligned table of 984,764 English sentences, each paired with machine translations into all 22 scheduled languages (21,664,808 Indic cells), generated with the sarvamai/sarvam-translate model family. Because every Indic cell in a row translates the same English sentence, any two columns form a translation pair: 462 directed Indic-to-Indic pairs, or 506 including English, without direct bitext. We call these pivot-derived pairs and propose a confidence layer that lets users choose how strictly each pair is connected. The corpus is machine-generated and not human-verified; quality is expected to vary by language, domain and sentence style, and pivot-derived pairs can inherit errors from both sides. We therefore release BharatSetu as a machine layer and propose a human-correction layer keyed to the same row identifiers, so that each corrected column upgrades every pair that uses it, together with an evaluation protocol. We report no translation-quality results.",
    "published": "2026-10-11T15:39:19Z",
    "updated": "2026-10-11T15:39:19Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15705"
  },
  {
    "id": "2610.15702",
    "title": "RespFocus: Learning Temporal Evidence for Weakly Supervised Respiratory Sound Classification",
    "authors": [
      "Yi Tian",
      "Xiaohuan Chen",
      "Yufei tang",
      "Xinyu Lin",
      "Hongliang Li",
      "Chengbin Hou",
      "Degen Huang",
      "Rongshan Yu"
    ],
    "abstract": "Respiratory auscultation provides a low-cost means of assessing pulmonary function, yet transient crackles and sustained wheezes can be difficult to recognize in noisy clinical recordings. Conventional deep learning classifiers often operate as black boxes, offering limited insight into the temporal acoustic evidence supporting their predictions. We present RespFocus, a weakly supervised framework that uses multiple instance learning (MIL) to learn inspectable temporal evidence from cycle-level labels and integrate it into classification. We also introduce PedResp2026, a multicenter pediatric respiratory sound cohort collected in routine clinical environments with adjudicated cycle-level annotations. In classification experiments, RespFocus achieves four-class Scores of 69.55\\% on public ICBHI 2017 and 72.91\\% on PedResp2026. Evidence diagnostics and matched temporal interventions support the functional contribution of the learned evidence to model predictions. Together, these findings highlight RespFocus's potential as a tool for automated respiratory sound diagnosis.",
    "published": "2026-10-11T15:37:56Z",
    "updated": "2026-10-11T15:37:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15702"
  },
  {
    "id": "2610.15699",
    "title": "TabMosaic: Unified In-Context Diffusion for Tabular Generative Tasks",
    "authors": [
      "Jayoung Kim",
      "Sanghyun Hong",
      "Noseong Park"
    ],
    "abstract": "Generative modeling for tabular data has advanced to the point where models can synthesize realistic records, recover missing values, and generate samples conditioned on class labels or observed attributes. Despite recent advances, existing approaches either require table-specific training or restrict in-context learning to single-cell prediction. In this work, we formulate these tabular generative tasks as a single problem: modeling the joint conditional distribution of an arbitrary set of target cells given the observed cells of an unseen table. To this end, we turn to diffusion, whose denoising objective is defined jointly over all target cells rather than one cell at a time. Under the pretraining distribution, this objective is minimized by the posterior predictive distribution over the target set. Building on this, we propose TabMosaic, a unified in-context diffusion model for generating mixed-type target cells in unseen, potentially incomplete tables without table-specific training. We further show that its pretraining objective bounds the conditional negative log-likelihood and the divergence from the posterior predictive for arbitrary target sets, extending the Bayesian account of in-context learning from a single-value prediction to joint multi-cell generation. Across 48 real-world tables, TabMosaic ranks first on all evaluated generative tasks against 20 baseline approaches",
    "published": "2026-10-11T15:35:39Z",
    "updated": "2026-10-11T15:35:39Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15699"
  },
  {
    "id": "2610.15691",
    "title": "FARL: A Fully Automated Pipeline of RL Interface and Solver Design",
    "authors": [
      "Tianyu Jin",
      "Liuyu Xiang",
      "Chaowen Yang",
      "Xingyang Chang",
      "Pei Pei Li",
      "Zhaofeng He"
    ],
    "abstract": "Existing reinforcement learning (RL) largely focuses on optimizing learning algorithms within a pre-defined task formulation, while applying RL to new tasks still relies heavily on human expertise to design the learning pipeline: what an agent observes, how it is rewarded, which algorithm it uses, and how training is configured. Automating these choices is challenging because they are tightly coupled. We introduce FARL (Fully Automated Reinforcement Learning), a framework that automates RL design by jointly searching observation and reward programs, learning algorithms, and training settings. FARL uses training statistics and observed behavior to diagnose failures, propose changes, and test whether they improve learning. Its search preserves diverse candidates and the controls needed for these tests, using a staged budget to screen designs before investing in longer training. Experimental memory records each finding together with its conditions, so an unsuccessful component can be reconsidered in a different combination. Across expert-withheld and expert-available settings, FARL outperforms the evaluated automated baselines on challenging navigation, locomotion, and manipulation tasks. On Adroit Hand Relocate, FARL achieves 97.1% success at 5M training steps per policy, compared with 0% for Eureka and LiMEN and 1.0% for native Proximal Policy Optimization (PPO) under the same policy training budget.",
    "published": "2026-10-11T15:22:18Z",
    "updated": "2026-10-11T15:22:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15691"
  },
  {
    "id": "2610.15685",
    "title": "Radioactive Feedback: Tracing Models Trained by Label-Only LLM Supervision",
    "authors": [
      "Yuejia Li",
      "JunHeng Li",
      "Hao Wu",
      "Ke He",
      "Mang Ye"
    ],
    "abstract": "Conventional distillation transfers capability through teacher-generated demonstrations. LLM-as-a-Judge knowledge distillation offers a distinct and increasingly practical alternative. In the label-only variant studied here, the student generates every response and improves from scalar scores alone. Prior work shows that this non-demonstrative feedback can improve student capability, but it creates a fundamentally different provenance problem. No teacher-generated answer enters the student's training set, so any evaluator-specific trace must pass through a low-bandwidth reward signal rather than copied text. Existing watermarks and distillation detectors do not cover this score-only channel. We introduce Radioactive Feedback, which encodes a registered pattern of behavioral preferences in the rewards themselves. The evaluator applies bounded pointwise adjustments to quality-qualified responses, allowing repeated optimization to transfer the pattern to a student trained by another party. Experiments on code and mathematics show that the registered preferences transfer through scores alone and across datasets, enabling black-box detection against a fixed reference pool.",
    "published": "2026-10-11T15:09:58Z",
    "updated": "2026-10-11T15:09:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15685"
  },
  {
    "id": "2610.15681",
    "title": "Rethinking Human Intent-to-CAD: Parametric CAD Model Generation via Cooperative Multi-Task Alignment and Spatial-Aware Reinforcement Learning",
    "authors": [
      "Qingwang Zhang",
      "Jiahao Li",
      "Xiangdong Zhou"
    ],
    "abstract": "Parametric Computer-Aided-Design (CAD) modeling from human intent remains challenging, particularly during the conceptual design stage, where design goals are expressed through incomplete and unstructured modalities (e.g., hand-drawn sketches and textual descriptions). In this work, we rethink the human intent-to-CAD pipeline and propose a unified method that directly maps multi-level human intents to executable codes, without assuming the prior existence of target CAD models. To support our study, we construct HiCAD, the first large-scale dataset aligning hand-drawn sketches, textual descriptions, and parametric CAD codes. Based on this, we introduce HiCAD, a two-stage framework comprising Cooperative Multi-Task Alignment to bridge the representational gap between heterogeneous inputs, and Spatial-Aware Reinforcement Learning to enforce geometric and topological consistency. Extensive experiments demonstrate that our method significantly outperforms existing baselines across multiple tasks, validating its effectiveness and robustness in transforming heterogeneous human intents into high-fidelity parametric CAD models. Our project page: https://zqwlearning.github.io/HiCAD.",
    "published": "2026-10-11T15:05:49Z",
    "updated": "2026-10-11T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15681"
  },
  {
    "id": "2610.15677",
    "title": "Knowledge Interaction in Hypernetwork-based Continual Learning: Conflict and Composition",
    "authors": [
      "Jiaqi Zheng",
      "Yi Hu",
      "Yadong Mu",
      "Muhan Zhang"
    ],
    "abstract": "Continual learning aims to adapt pretrained large language models (LLMs) to evolving data while preserving their pretrained capabilities. A central challenge is catastrophic forgetting: adaptation to new data can impair performance on previously learned knowledge. Since continual learning commonly changes model parameters, the model's predictions may draw on knowledge from the base model, the parameter update, and the input context. Understanding how these sources interact is essential: conflicts reveal whether new knowledge can override outdated knowledge, while multi-hop reasoning tests whether new knowledge can be composed with existing knowledge to support generalization. We study these interactions in a hypernetwork-based adaptation framework, where a shared network generates adapters from context, allowing a frozen base model to adapt without task-specific updates. We find that, under knowledge conflict, models preferentially follow the context, and their choices depend more on where knowledge is presented than on its content. We also show that context and adapter knowledge perturb the base model's representations along directions orthogonal to its clean hidden states, enabling us to derive steering vectors that control which source the model follows. In multi-hop reasoning, we find that models fail to reliably compose knowledge across the three sources, with the key breakdown arising from the interaction of the hypernetwork with both the base model and the context. Code and reproduction materials: https://github.com/missswiftie/Knowledge-Interaction-in-CL",
    "published": "2026-10-11T14:57:18Z",
    "updated": "2026-10-11T14:57:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15677"
  },
  {
    "id": "2610.14547",
    "title": "A Self-Defining Operator for Distributed Applications",
    "authors": [
      "Shihang Li",
      "Thomas Anderson",
      "Ratul Mahajan",
      "Simon Peter",
      "Luke Zettlemoyer"
    ],
    "abstract": "To operate distributed applications with high availability, operators must rapidly diagnose and mitigate any incident. LLM-based agents can help, but unlike experienced human operators they do not improve as they handle more incidents. Each investigation starts from scratch, re-deriving likely causes and re-testing hypotheses even when a similar fault was resolved in the past. We present a self-defining operator (SDO) that improves with time by updating its operational behavior and memory. When SDO resolves an incident, it distills that experience into playbooks, which describe reusable diagnostic instructions for future incidents with similar faults, and detectors, scripts that take application telemetry as input and output relevant playbook(s). SDO continuously runs the detectors and invokes LLMs only when one fires, so its token cost scales with incident count rather than with operational time. Across 11 open-source microservice applications, SDO cuts resolution time by 52% on recurring faults while keeping per-incident cost low. SDO is open source at https://github.com/self-defining-systems/sdo.",
    "published": "2026-10-10T04:08:13Z",
    "updated": "2026-10-14T06:00:51Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14547"
  },
  {
    "id": "2610.14544",
    "title": "InfraWorld: Motion-Aware World Modeling for Roadside 4D Occupancy Forecasting",
    "authors": [
      "Songkai Wang",
      "Xiaokai Bai",
      "Lei Yang",
      "Hui-liang Shen"
    ],
    "abstract": "Roadside 4D occupancy forecasting predicts future semantic occupancy in a fixed infrastructure coordinate system. Roadside scenes are globally structured yet locally evolving, requiring comprehensive scene-level context while precisely modeling sparse localized motion. However, existing forecasting paradigms struggle to tackle both requirements. To address this limitation, we propose InfraWorld, a world model formulating roadside occupancy forecasting as selective state evolution. InfraWorld maintains a dense BEV state for the complete scene and persistent motion queries for moving regions, assigning complementary states to global context and local dynamics. Specifically, we propose Dynamic Query Initiation (DQI) to initialize queries in regions supported by motion in the observed history. During rollout, the dense state is updated through Long--Short Temporal Fusion (LST), which combines short-term adjacent-frame continuity with long-term motion trends to preserve stable context while capturing scene evolution. Motion-Aware Query Injection (MAQI) then refines the queries and injects confidence-weighted query information into corresponding BEV tokens, enabling targeted dynamic updates without perturbing global context. Together, InfraWorld concentrates predictive capacity on evolving traffic regions. Extensive experiments on the InfraOcc and Occ3D--nus datasets demonstrate that InfraWorld achieves state-of-the-art performance for roadside 4D occupancy forecasting while retaining its effectiveness under ego-centric settings. Code will be released.",
    "published": "2026-10-10T04:00:44Z",
    "updated": "2026-10-10T04:00:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14544"
  },
  {
    "id": "2610.14542",
    "title": "Are Multimodal Benchmarks Really Useful? Item-Level Multimodal Benchmark Diagnosis via Structure-Response Co-Calibration",
    "authors": [
      "Shiqi Zhang",
      "Weixin Zeng",
      "Ziheng Zhang",
      "Jiuyang Tang",
      "Xiang Zhao"
    ],
    "abstract": "Multimodal benchmarks are central to evaluating whether models can reason over information from multiple modalities. However, existing literature has revealed that some benchmarks may contain shortcut items that can be answered from a single modality or from answer-option regularities alone, thus failing to reflect models' true cross-modal inference ability. Existing methods for assessing benchmarks typically rely either on intrinsic item structure or extrinsic model response behavior, which are not adequate for a comprehensive diagnosis. To fill in this gap, we propose SRCoD, a structure-response co-calibrated diagnosis framework for item-level diagnosis of modality dependence in multimodal benchmarks. SRCoD estimates sample-wise multimodal information structure from benchmark content and target answers, and uses this signal as a soft structural anchor for modality-conditioned item response modeling. The learned model produces a calibrated item-level diagnostic profile that reflects how strongly an item depends on different forms of modality evidence, enabling fine-grained benchmark analysis beyond aggregate accuracy. SRCoD also provides interpretable attribution of the diagnosis results. Extensive experiments under two complementary protocols, i.e., benchmark-refinement oriented validation and human-labeled item validation, demonstrate that SRCoD outperforms state-of-the-art benchmark diagnosis methods.",
    "published": "2026-10-10T03:57:33Z",
    "updated": "2026-10-10T03:57:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14542"
  },
  {
    "id": "2610.14541",
    "title": "GG-Nav: Goal-oriented Grounding Chain-of-Thought Elicits Reasoning in Navigation Foundation Models",
    "authors": [
      "Shaohao Zhu",
      "Wensi Huang",
      "Siqi Zhang",
      "Yuqiang Yang",
      "Meng Wei",
      "Chenyang Wan",
      "Tianle Liu",
      "Tai Wang",
      "Jinming Xu"
    ],
    "abstract": "Emerging strong Vision-Language Models (VLMs) have advanced navigation foundation models. However, these models still have unsatisfactory performance on goal-oriented navigation settings. In this paper, we first conduct a motivating study revealing that the key issue lies in the insufficient utilization of streaming observations and imprecise target localization. To tackle these challenges, we propose GG-Nav, a simple yet effective navigation framework that learns a structured chain-of-thought (CoT) mechanism via supervised fine-tuning to explicitly localize goal-relevant instances, accumulate grounding evidence, and support more reliable decision-making. Specifically, the structured CoT is designed with two key stages: (i) Observation-to-Evidence, which reasons over all intermediate frames between adjacent decision steps to retain useful goal-related evidence; and (ii) Evidence-to-Decision, which integrates the current observation with accumulated evidence to ground the target and support the generation of navigation actions or clarification questions. Extensive experiments show that GG-Nav outperforms the state-of-the-art methods in terms of success rates on the HM3D ObjectNav, VL-LN, and CoIN benchmarks by 3.1%, 16.6%, and 5.3%, respectively. Ablation studies further show that accumulating evidence from intermediate observations reduces evidence-missing failures by 11.6%, while explicit grounding reduces stopping errors by 49.4%. We also deploy GG-Nav on a Unitree Go2 robot, demonstrating its zero-shot generalization capability in unseen real-world environments.",
    "published": "2026-10-10T03:54:19Z",
    "updated": "2026-10-10T03:54:19Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14541"
  },
  {
    "id": "2610.14539",
    "title": "FDE-Bench: Evaluating End-to-End Delivery from Underspecified Real-World Business Requests",
    "authors": [
      "Huaiming Li",
      "Can Huang",
      "Chufan Wu",
      "Danyu Liu",
      "Xiaomin Yuan",
      "Qinze Li",
      "Yui Lo",
      "Wenhui Bai",
      "Qianlong Wang",
      "Zengle Ge",
      "Xiyu Yan",
      "Yuheng Cheng",
      "Jinhui Ren",
      "Guokai Chen",
      "Jiaqun Liu",
      "Haoran Li",
      "Qianhui Liu",
      "Annan Li",
      "Jianmin Wu",
      "Dawei Yin",
      "Dou Shen"
    ],
    "abstract": "Real-world business requests often leave key requirements unstated because frontline practitioners struggle to articulate rules they know from experience. Forward-deployed engineers (FDEs) must elicit these requirements through dialogue and iteratively optimize solutions until they meet customer acceptance criteria. Existing optimization benchmarks typically start from explicit objectives, while clarification benchmarks often introduce information gaps into existing tasks. We introduce FDE-Bench, the first benchmark built from real customer projects to evaluate agents on end-to-end delivery tasks that require interactive requirement clarification and iterative optimization. Its 49 cases span combinatorial optimization and machine learning. Clarification targets are distilled from discussions between frontline practitioners and FDEs. Agents elicit missing requirements from a simulated customer, and case-specific evaluators assess final artifacts against acceptance criteria using customer-accepted FDE solutions as quality references. Across 18 agent configurations, the highest mean delivery score is only 0.5510, compared with an FDE reference of 1.0. The highest delivery success rate (DSR), defined as the fraction of planned runs reaching this reference, is only 6.12%. These results show that reliable FDE-level end-to-end delivery remains out of reach for the evaluated agents on underspecified real-world business tasks. The benchmark project page is available at https://baidubce.github.io/FM-Agent/FDE-Bench/.",
    "published": "2026-10-10T03:53:42Z",
    "updated": "2026-10-10T03:53:42Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.14539"
  },
  {
    "id": "2610.14530",
    "title": "Who to Trust in Multi-Robot Systems: Joint Robot and Object Hypothesis Trust Inference via Neural-Symbolic Cross-Validation",
    "authors": [
      "Ruiyang Wang",
      "Hao-Lun Hsu",
      "Haocheng Meng",
      "Songqiao Xie",
      "Miroslav Pajic"
    ],
    "abstract": "Multi-robot systems (MRS) offer significant advantages over single-robot platforms by enabling information sharing and coordination for different tasks in complex environments. However, reliable cooperation critically depends on inferring trust over both information sources and their reported hypotheses, particularly under partial observability and potential adversarial interference. Existing approaches frequently depend on pre-established trust relationships or side-channel information, which may not be available or reliable in realistic MRS deployments. This work introduces NeST-Bayes, a neural-symbolic framework that jointly infers robot and hypothesis trust using only inter-robot observation consistency, without requiring preassigned robot trust, reputation information, or side-channel identity signals. NeST-Bayes infers instantaneous trust evidence scores for robots and object hypotheses by reasoning over ego-centric relational graphs constructed from cross-robot observation consistency. These evidence scores are accumulated over time through Bayesian updates of Beta-distributed trust beliefs to maintain temporally consistent trust estimates. Extensive evaluations show that NeST-Bayes achieves the highest mean object precision and robot recall across all benchmark settings, and the highest robot precision and object recall in most settings, compared to trust-based methods. Under aggressive optimized attacks, it achieves 98.8\\% robot precision with 93.8\\% recall and 98.3\\% object precision with 95.4\\% recall. In an occlusion-rich Webots warehouse, it maintains 92.5\\% robot precision with 92.0\\% recall and 97.3\\% object precision with 85.0\\% recall. These results demonstrate joint improvements in the reliability and coverage of retained information.",
    "published": "2026-10-10T03:41:27Z",
    "updated": "2026-10-10T03:41:27Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14530"
  },
  {
    "id": "2610.14525",
    "title": "Energy Ring: Stabilizing Feature Energy for Reliable Test-Time Discovery",
    "authors": [
      "Tianle Liu",
      "Fan Lyu",
      "Tingliang Feng",
      "Chenggong Ni",
      "Tianqi Wang",
      "Zhang Zhang",
      "Fuyuan Hu",
      "Rui Yao",
      "Tao Zhou"
    ],
    "abstract": "Test-Time Discovery (TTD) aims to recognize known classes and detect novel ones while the model is already deployed, operating directly on a continual unlabeled test-time stream. Existing TTD methods are overly conservative, making known and unknown features collapse together and difficult to separate during test-time adaptation. In this paper, we revisit TTD from an energy perspective and find that the natural energy gap between known and unknown classes is unstable and easily collapses. We therefore propose Energy Ring to stabilize this gap by anchoring the two types of classes on separate energy rings. A lightweight adapter enlarges the norm-based gap while preserving known-class directions, and a perturbation consistency module forms compact clusters for unknown classes. During testing, energy-guided confidence weighting improves prediction, and a stability-based rectification mechanism corrects unreliable updates. Experimental results show that Energy Ring significantly improves TTD performance against existing TTD methods.",
    "published": "2026-10-10T03:36:12Z",
    "updated": "2026-10-10T03:36:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14525"
  },
  {
    "id": "2610.14523",
    "title": "ScienceBuddy-PV: A Verifier-Governed Recursive Improvement Protocol for Panvascular Intervention Research",
    "authors": [
      "Lingsen You",
      "Yujun Guo",
      "Xinyu Zhong",
      "Zijie Feng",
      "Wentong Wang",
      "Li Shen",
      "Junbo Ge"
    ],
    "abstract": "ScienceBuddy-PV adapts the ScienceBuddy recursive-in-recursive design to panvascular intervention research through a structured evidence ledger, device-vessel ontology, abstention contract and retained failure bank. Recursive harness optimization and outer-loop model learning, including reinforcement learning, are specified but not executed. We audit a fixed component, rather than the complete agent system, using separate ARCADE syntax and stenosis tasks (1,000 training, 200 validation and 300 test images per task). A shared task-masked convolutional model was trained once per representation setting; its parameters and the heuristic support gate were then held fixed, with the stenosis threshold selected on validation data. On the locked test sets, syntax Dice was 0.475 (95% CI 0.459-0.490) and stenosis Dice was 0.231 (95% CI 0.214-0.249). Stenosis pixel AUROC was 0.957 and AUPRC was 0.180 at prevalence 0.00975. The gate accepted 76.7% of stenosis-frame outputs versus 100% for a score-only comparator. In a constructed mask audit, it accepted 44.3% of reference candidates and rejected 55.7%, exposing the cost of abstention. Acceptance does not establish correctness or clinical safety. This public-data component audit makes support and abstention measurable and provides a reproducible protocol for future collaborative agent studies. It does not demonstrate recursive improvement, patient-level validity or clinical device recommendations.",
    "published": "2026-10-10T03:35:28Z",
    "updated": "2026-10-10T03:35:28Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14523"
  },
  {
    "id": "2610.14517",
    "title": "We Have Been Interpreting Diffusion Transformer Backbone Behaviors Wrong",
    "authors": [
      "Benyuan Meng",
      "Longtao Huang",
      "Yang Liu",
      "Liang Lin"
    ],
    "abstract": "During a network forward call, diffusion backbones naturally produce many intermediate activations. If we evaluate each activation against an identical downstream benchmarking protocol, we can plot an inverted-U-shaped curve as the depth profile: the activation's performance goes up first and then down as we go into deeper layers. This is common knowledge in the diffusion model community, which inspires many applications including the widely-adopted REPA. However, the common interpretation of this depth profile may be inaccurate and incomplete: (i) The cause of this curve has long been treated as signal granularity changing from coarse to fine, but there has been little evidence in DiT backbones. (ii) The community has been mainly studying this phenomenon in a static way, without investigating how it changes across different training setups. In this work, we show a different mechanism picture for the profile, where the prediction target (e.g., $ε$, $u$, $x_0$) sits at the center. The semantically meaningful signal is only an intermediate by-product for predicting the target, while the prediction target is the real goal for the backbone. Furthermore, the choice of prediction targets as part of the training setup can predictably affect the curve's shape. With this updated interpretation, many applications of this depth profile can be better grounded and predicted. As an example, we show how to predict the near-optimal placement of REPA based on the prediction target of the training setup. The code is at https://github.com/Darkbblue/dit-compare.",
    "published": "2026-10-10T03:26:50Z",
    "updated": "2026-10-10T03:26:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14517"
  },
  {
    "id": "2610.14514",
    "title": "Compositional Concepts Erasing: Disentangling Object-Style via Domain Manifold Unlearning",
    "authors": [
      "Yang Xiao",
      "Kaiyuan Deng",
      "Gen Li",
      "Zinan Ling",
      "Zhiwen Fan",
      "Xiaolong Ma",
      "Bo Hui"
    ],
    "abstract": "Diffusion models pose significant risks regarding the generation of illicit content and copyright violations. This has catalyzed the development of machine unlearning to erase harmful concepts or copyrighted styles from a model's generative repertoire without compromising its general performance. However, previous unlearning approaches on diffusion models have largely focused on either object-level or style-level removal and failed to address the challenge of object-style combination unlearning. At the same time, multiple unlearning requests often lead to catastrophic forgetting. To address these challenges, we propose Domain Manifold Unlearning (DMU), which uses an EMA-updated feature proxy extracted from intermediate diffusion features to represent the retained target-object direction. As a lightweight estimating representation of an object, DMU enables selective unlearning of domain-specific components in a specific object while preserving other semantic representations, thereby significantly enhancing robustness in multiple combination unlearning scenarios. Extensive experiments show that DMU significantly mitigates catastrophic forgetting, outperforming state-of-the-art methods of batch unlearning and sequential unlearning.",
    "published": "2026-10-10T03:22:31Z",
    "updated": "2026-10-10T03:22:31Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14514"
  },
  {
    "id": "2610.14513",
    "title": "TartanMatch: Towards Universal Dense Correspondence Across Modalities",
    "authors": [
      "Hyeokjoon Kwon",
      "Jiting Cai",
      "Ruogu Li",
      "Kritan Bhandari",
      "Geethika Hemkumar",
      "Parv Maheshwari",
      "Yuheng Qiu",
      "Yuchen Zhang",
      "Sebastian Scherer",
      "Wenshan Wang"
    ],
    "abstract": "Robotic platforms combine multi-modal sensors to operate across diverse conditions, but most dense correspondence methods are limited to RGB-RGB or a small set of modality pairs. Training a model for each modality pair scales poorly with the number of sensors and forgoes potential positive transfer across modality pairs. We introduce TartanMatch, a unified model for dense correspondence across all 25 ordered pairs among RGB, event, thermal, depth, and projected LiDAR. TartanMatch adapts an RGB-pretrained correspondence model to all modality pairs within one shared network using lightweight modality adaptation and a mixture of real and synthetic data. On zero-shot real-world benchmarks, TartanMatch reduces Endpoint Error (EPE) over the strongest baselines by 61.9% for cross-modal matching and 49.6% for same-modal matching. We further show that joint training across all modality pairs improves average matching accuracy over pair-specific training, especially on challenging cross-modal pairs. These results demonstrate that a single model achieves broad multi-modal coverage and state-of-the-art matching accuracy.",
    "published": "2026-10-10T03:19:32Z",
    "updated": "2026-10-10T03:19:32Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.14513"
  },
  {
    "id": "2610.14512",
    "title": "Spatiotemporal Recognition of Abdominal Wall Layers During Optical Trocar Entry",
    "authors": [
      "Shreeram Athreya",
      "Andrew Melehy",
      "Carter Prentice",
      "Michael Robinson",
      "Corey Arnold",
      "James Wu",
      "William Speier"
    ],
    "abstract": "Objective. To evaluate whether spatial context and temporal modeling improve tissue recognition during optical trocar entry, where multiple abdominal-wall tissues may be visible simultaneously. Methods. We retrospectively analyzed 71 recordings with 1,516 annotated keyframes and 29,151 clinician-annotated sectors. Each frame was divided into 28 polar-grid sectors assigned to nine tissue classes. Color, neighboring-sector, and positional features were used by a gradient-boosted emission classifier. The full pipeline added learned temporal smoothing, spatial regularization, an anatomically ordered hidden Markov model, and posterior blending. Five-fold cross-validation was grouped by recording, with cross-fitting to prevent within-recording leakage. Primary evaluation used clinician-derived targets; ablations assessed classification, probability quality, spatial consistency, and peritoneum-or-deeper onset timing. Results. The complete pipeline achieved accuracy 0.646, macro-F1 0.507, and macro-AUROC 0.882, versus 0.600, 0.440, and 0.861 for emissions alone. Macro-F1 improved by 0.066 across all five folds. Label changes decreased from 66.2 to 19.5 per sector-minute, and median onset error decreased from 15.58 to 2.45 seconds. Frames with a tissue-depth-code span of at least three decreased from 53% to 26%, versus 22% for clinician annotations. Performance remained limited for preperitoneal fat and bowel, and the full model retained a 44% premature-onset proportion. Conclusions. Combining appearance, spatial context, and temporal constraints improved retrospective tissue recognition and onset localization. Tissue-specific limitations, residual timing errors, and reliance on future observations warrant external validation and prospective evaluation of causal models before clinical use.",
    "published": "2026-10-10T03:19:27Z",
    "updated": "2026-10-10T03:19:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14512"
  },
  {
    "id": "2610.12574",
    "title": "Scaling Multi-Teacher Distillation for Digital Pathology",
    "authors": [
      "Sofiène Boutaj",
      "Pierre Marza",
      "Varun Belagali",
      "Dimitris Samaras",
      "Maria Vakalopoulou",
      "Stergios Christodoulidis"
    ],
    "abstract": "Multi-teacher distillation allows transferring knowledge from multiple \"teacher\" networks to a single \"student\" network. This method is promising in fields such as digital pathology, where many powerful foundation models were proposed recently. However, as we show in this paper, the standard multi-teacher distillation approach reacts poorly to an increase in the number of teachers used to train a student encoder. We demonstrate that learning teacher-specific representations is a key to scaling in MTD. Importantly, different design choices, such as learnable teacher tokens, a tailored attention scheme, additional mixture-of-experts layers and a contrastive loss, are proposed to better learn such teacher-specific representations. We show that our method better scales with respect to the number of considered teachers, allowing us to train compact student encoders, up to 10x more efficient than larger teacher foundation models, while matching their performance and even outperforming them on a large set of tile-level and slide-level tasks. We conduct a thorough empirical validation, evaluating more than 10 foundation models on 39 tasks spanning tile and slide levels. As a result, we release a new collection of strong and efficient foundation models, named OMNI, trained from the knowledge of 10 state-of-the-art foundation models. We finally conduct an analysis of the learned teacher-specific representations, highlighting their complementarity and explaining why they can be easily aggregated at downstream time.",
    "published": "2026-10-08T18:02:09Z",
    "updated": "2026-10-08T18:02:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12574"
  },
  {
    "id": "2610.12568",
    "title": "MIRAGE: Metric Inference and Reliability-Aware Gaussian Estimation from Feed-Forward Vision",
    "authors": [
      "Xinzhe Wang",
      "Changjian Jiang",
      "Kaiwen Song",
      "Xudong Li",
      "Kerui Ren",
      "Ran Yi",
      "Lizhuang Ma",
      "Chunhua Shen",
      "Linning Xu",
      "Tao Lu",
      "Mulin Yu"
    ],
    "abstract": "Feed-forward 3D priors enable high-quality reconstruction from image streams but often lack reliable metric scale and suffer from long-term trajectory drift. In contrast, LiDAR--inertial estimation provides metrically accurate motion but lacks the image-space consistency needed for high-fidelity reconstruction. We propose $MIRAGE$, which anchors feed-forward visual geometry to LiDAR--IMU metric motion and regulates online pose corrections according to correspondence support and cross-modal agreement, jointly enabling accurate metric pose estimation and high-fidelity Gaussian reconstruction. Experiments on Oxford Spires, M2DGR and INS show that MIRAGE achieves accurate metric trajectory estimation, outperforming COLMAP, a widely used but computationally expensive reference for vision-only benchmarks. Motivated by the scarcity of long-horizon monocular benchmarks for large-scale indoor reconstruction, we further build a multimodal data-collection platform and use MIRAGE to establish accurate 6-DoF reference trajectories for a new vision-only benchmark. We benchmark recent monocular large-scale reconstruction methods on this dataset, providing a systematic evaluation of their performance in long-horizon indoor scenes.",
    "published": "2026-10-08T18:00:56Z",
    "updated": "2026-10-08T18:00:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12568"
  },
  {
    "id": "2610.12567",
    "title": "CASTER: Formalizing Zero-Shot Manipulation from Synthetic Videos as Constrained Optimization",
    "authors": [
      "Yinlong Dai",
      "Homanga Bharadhwaj",
      "Dylan P. Losey"
    ],
    "abstract": "Prior research on learning from humans often requires real human demonstrations. But advances in video generation models offer a new paradigm: we can now prompt these generators to make synthetic videos of the task. On the plus side, these synthetic videos take place in the robot's current environment, and do not require actual human teaching. However, while the generated videos appear to show plausible motions, they lack both physical consistency and robot grounding, and thus the robot cannot directly roll out the trajectory shown by the video. In this paper we seek to formalize the process of going from synthetic video generation to real-world robot trajectories for zero-shot manipulation tasks. We recognize that this problem is an instance of constrained optimization. The object trajectories extracted from the synthetic video provide an initial guess at the correct motion, and the robot must refine these trajectories (for instance, within a digital twin) while enforcing physical feasibility and semantic consistency. Our optimization-based formalism provides insights into the video generation properties necessary for success. Specifically, we show that the video generation must probabilistically seed the search within a semantic basin of attraction where the trajectory can be locally modified without losing its task alignment. Our analysis further reveals that state-of-the-art approaches can be viewed as instances of our unified formalism with key simplifications. In our experiments we remove these simplifications to more closely match the underlying optimization, leading to more robust zero-shot trajectories from synthetic videos and improving average task success by 34.1% compared to the best-performing baseline. See videos at our project website: https://collab.me.vt.edu/CASTER",
    "published": "2026-10-08T18:00:55Z",
    "updated": "2026-10-08T18:00:55Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12567"
  },
  {
    "id": "2610.12549",
    "title": "Fly-by-Code: Embodied Coding Agents for Aerial Manipulation with Active Visual and Physical Feedback",
    "authors": [
      "Jaewoo Lee",
      "Jeongyeon Seo",
      "Sihyun Cho",
      "Gyeongrak Choe",
      "Yutong Wang",
      "Bavin Saravanan",
      "Jia-Bin Huang",
      "Furong Huang",
      "Sebastian Scherer",
      "Guanya Shi",
      "H. Jin Kim",
      "Seungjae Lee",
      "Dongjae Lee"
    ],
    "abstract": "Embodied coding agents construct robot policies from natural-language instructions by generating executable programs and refining them from execution feedback. This refinement assumes that execution feedback reveals whether the task succeeded and, after a failure, provides sufficient evidence to guide program revision. Aerial manipulation violates this assumption in two ways. Payload constraints restrict onboard camera coverage and leave task-critical outcomes outside the robot's view (partial observability), while strong dynamic coupling and limited control margins make physical interactions fragile (limited interaction robustness) and leave failure causes unresolved. Re-examining the same feedback cannot recover observations that were never collected or separate failure causes that the available evidence does not distinguish. To acquire this missing evidence, we introduce Active Feedback (AF), an active \"View and Probe\" framework. When execution feedback leaves unresolved questions, the agent synthesizes a separate diagnostic program that runs in simulation to inspect unseen outcomes from informative viewpoints (View) or test hypotheses about failure causes through targeted physical interactions (Probe). Across six simulated aerial manipulation tasks with 60 trials per condition, AF reduces false completion declarations from 25 to 5 and raises final task success from 31.7% to 75% compared with terminal feedback under the same coding-agent configuration and task-execution limit. Using shared robot APIs, task programs refined with AF in simulation run on a physical aerial manipulator without task-program source-code modification and complete multi-stage manipulation tasks in the real world. These results show that executable diagnosis fills gaps in execution feedback for embodied coding agents, improving both completion assessment and program refinement in aerial manipulation.",
    "published": "2026-10-08T18:00:00Z",
    "updated": "2026-10-08T18:00:00Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12549"
  },
  {
    "id": "2610.12470",
    "title": "Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration",
    "authors": [
      "Jusuk Lee",
      "Sungha Kim",
      "Yeonsoo Park",
      "Jonguk Cheon",
      "Yoonkyo Jung",
      "Yongjun You",
      "H. Jin Kim",
      "Jia-Bin Huang",
      "Furong Huang",
      "Youngseok Jang",
      "Seungjae Lee"
    ],
    "abstract": "While learning dexterous manipulation from a single human video offers a promising alternative to costly robot demonstrations, many recent methods predominantly imitate demonstrated motions. Such strict motion matching often limits generalization to initial object poses, goal poses, and grasps not shown in the video. Alternatively, discovering a policy via reinforcement learning (RL) allows for broad generalization, but without prior guidance, it struggles with high-dimensional exploration in complex, multi-stage tasks. To address these coupled generalization and exploration challenges, we present Dex-One2Many, a real-to-sim-to-real framework that learns a generalizable dexterous manipulation policy from a single human video. Our key insight is to abstract the video into sequential scene graphs that guide RL, enabling efficient exploration while preserving broad generalizability. The graphs serve as generative constraints for sampling diverse reset states and provide dense rewards for each stage. Because the graphs constrain relations rather than exact poses, these reset states cover object poses and grasps beyond the video, while initializing each stage from them with dense rewards keeps exploration short and guided. Trained entirely in simulation, Dex-One2Many transfers zero-shot to a real multi-fingered hand. Across five tool-use and manipulation tasks, Dex-One2Many exceeds baselines by 6.5% in seen configurations, while its robust generalization widens this gap to 71% in unseen scenarios.",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12470"
  },
  {
    "id": "2610.12469",
    "title": "Rubric-CEPR: Self-Evolving Image Editing via Reward-Verified Self-Distillation",
    "authors": [
      "Ritesh Thawkar",
      "Shubham Patle",
      "Shravan Venkatraman",
      "Rao Muhammad Anwer"
    ],
    "abstract": "Instruction-guided image editors have become highly capable, yet improving them further still depends on human-edited training pairs or external reward models. Such supervision is costly to obtain and can reward plausible failures: a realistic output may leave the requested change undone or alter content that should be preserved. In this work, we strive to improve a pretrained image editor using only its own generations, without human-edited targets or an external training-time reward model. To this end, we propose a self-evolving framework, named Rubric-CEPR, that verifies the editor's own samples with its internal representations through a rubric-augmented Contrastive Edit-Preservation Reward (CEPR). A Planner proposes structured edit instructions from unlabeled images, the Editor samples multiple candidate edits, and a frozen Critic scores each candidate with decomposed rubric checks for edit realization, removal of the old state, and content preservation, using features already exposed by the editor. Non-compensatory gates reject infeasible candidates, and the best verified candidate is distilled into the editor through lightweight adapter training. On Qwen-Image-Edit, Rubric-CEPR improves ImgEdit from 4.36 to 4.60 (+5.5%), with a +24.9% gain on object isolation, and transfers to GEdit-Bench and Complex-Edit. The same procedure also improves Step1X-Edit by +7.8% on ImgEdit. We hope our approach will serve as a solid baseline for image editors that improve themselves from their own verified samples. Our code is publicly available at $\\href{https://riteshthawkar.github.io/Rubric-CEPR/}{\\text{this URL}}$",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12469"
  },
  {
    "id": "2610.12545",
    "title": "AutoIndexer: Flexible-Order Decoding by Training Causal Models on Chains of Edits",
    "authors": [
      "Shu Ishida",
      "Aliasghar Khani",
      "Tianyu Zhang",
      "The Cong Luong",
      "James Seale Smith",
      "Adam Gaier"
    ],
    "abstract": "Autoregressive decoding is less suited to non-causally ordered data, e.g., cross-references or future dependencies, since their outputs cannot be revised post hoc, unlike iterative human reasoning. Diffusion LLMs partially mitigate this limitation but still cannot flexibly insert or remove arbitrary numbers of tokens from a pre-generated context. We design AutoIndexer as a generative model with a novel training and decoding mechanism that simulates a Chain of Edits, allowing the model to flexibly modify its prior outputs in hindsight via token insertions, substitutions, and deletions. The model learns to predict marker tokens for opening and closing edits, simultaneously moving a cursor to positions in the existing token sequence, analogous to a text editor. Training sequences are obtained by perturbing ground-truth labels with inverse chained edit operations, and the model learns to edit by undoing those inverses. The perturbation training allows AutoIndexer to be robust to erroneous context and adaptable to editing tasks such as code correction. We demonstrate that our method exhibits post-generation context-editing capabilities that most autoregressive and diffusion models lack without compromising performance on standard LLM benchmarks. The code is available at https://github.com/AutodeskAILab/autoindexer.",
    "published": "2026-10-08T17:59:52Z",
    "updated": "2026-10-08T17:59:52Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12545"
  },
  {
    "id": "2610.12468",
    "title": "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training",
    "authors": [
      "Junyan Li",
      "Ruizhi Li",
      "Yu Liu",
      "Xiangshuo Liu",
      "Mingchao Sun",
      "Hongyu Pan",
      "Mu Xu",
      "Lue Fan",
      "Zhaoxiang Zhang"
    ],
    "abstract": "We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.",
    "published": "2026-10-08T17:59:51Z",
    "updated": "2026-10-08T17:59:51Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12468"
  },
  {
    "id": "2610.12466",
    "title": "On the estimation and validity of AI time horizons---a statistical look at the METR plot",
    "authors": [
      "Drew T. Nguyen",
      "William Fithian"
    ],
    "abstract": "METR's 50\\% time horizon measures the human completion time of software tasks that an AI solves with 50\\% probability, allowing AI capabilities to be expressed in interpretable units. On 228 tasks and 26 AIs, we recompute the time horizons using splines and item-response theory to relax the assumption that the AI difficulty of a task depends linearly on the log of human time. Our fitted spline can be interpreted as a function that \\emph{converts} human time to AI difficulty; it is nearly flat in a region from 2--30 min but close to linear elsewhere. Hence, a time-horizon jump from 3 min to 30 min is much easier than one from 30 min to 5 hours despite the same multiplier of $10 \\times$. Overall, we contribute time-horizon point estimates that perform better under a cross-validated suite of proper scoring rules, as well as diagnostic plots for assessing time horizons' construct validity. We suggest that time horizons be interpreted together with the diagnostic plots, especially as new time-horizon-based benchmarks are proposed or existing ones grow to include longer tasks.",
    "published": "2026-10-08T17:59:50Z",
    "updated": "2026-10-08T17:59:50Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.12466"
  },
  {
    "id": "2610.12463",
    "title": "From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents",
    "authors": [
      "Abbas Raftari"
    ],
    "abstract": "In 2026, cybersecurity evaluations involving OpenAI, Anthropic, and Google agents reached real systems outside their authorized test scope. The paths were different. OpenAI agents exploited research infrastructure, coordinated across runs, and compromised parts of Hugging Face's production environment. Anthropic reported cases in which a misconfigured third-party environment exposed real systems to agents pursuing simulated cyber tasks. In a separately reported evaluation, Google's Gemini accessed three real organizations through an unintended internet route; Google stated that the model stopped in all three instances. Taken together, the cases show why an evaluation cannot rely on an assumed boundary. That boundary must be verified while the agent is operating. This comparative instrumental case study develops a Proactive Agent Security Assurance Cycle (PASAC) and a five-layer Boundary Assurance Stack. The framework combines risk-tiered task design, executable scope contracts, pre-run validation, least-capability access, independent egress enforcement, credential restrictions, cross-run monitoring, automatic stop conditions, and evidence-based reauthorization. A leading-indicator model, nine design propositions, and seven falsifiable hypotheses turn these lessons into a testable research program. Because the public Gemini record is limited to attributed statements and journalism, its detailed causal mechanism remains provisional. The central conclusion is straightforward: proactive agent security requires continuous assurance across the full execution system, not confidence in any single sandbox or safeguard.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.12463"
  },
  {
    "id": "2610.12464",
    "title": "What 30,000 Hours of Ego-centric Video Does Not Teach",
    "authors": [
      "Jiahua Dong",
      "Anurag Bagchi",
      "Yash Jangir",
      "Muhammad Zubair Irshad",
      "Sergey Zakharov",
      "Martial Hebert",
      "Homanga Bharadhwaj",
      "Yu-Xiong Wang",
      "Vitor Campagnolo Guizilini",
      "Pavel Tokmakov"
    ],
    "abstract": "World models offer a promising alternative to physics-based simulators, yet remain far from practical deployment. We ask how far scaling ego-centric human video takes them, using a dataset of 30,000 hours spanning over 1,000 scene types and 14,000 contributors. Rather than relying on opaque downstream metrics, we directly evaluate agent and object-interaction fidelity on a challenging out-of-distribution benchmark. Increasing training data by 100x improves both, but unevenly: the agent is modeled well, while object fidelity remains far lower and improves slowly. We show that the agent gains need not come from data, and a careful visual conditioning design saturates fidelity with a fraction of it, which lets us measure object fidelity on its own and discover its saturation point. We then introduce a supervision scheme that shifts capacity from scene appearance toward object dynamics, improving object fidelity though a substantial gap remains. Finally, our conclusions transfer to downstream humanoid modeling. Overall, our results suggest that scaling ego-centric data brings agent modeling close to its limit while leaving its effects on the world far behind, and that closing this gap will depend on how models are trained, not only on how much data they see.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12464"
  },
  {
    "id": "2610.12461",
    "title": "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs",
    "authors": [
      "You-Zhe Xie",
      "Ting-Wei Chou",
      "Yu-Hsuan Li",
      "Kaipeng Zhang",
      "Zhixiang Wang",
      "Yu-Lun Liu"
    ],
    "abstract": "Recent 3D world models generate photorealistic, explorable scenes that remain frozen in time. OuroWorld is a mask-free framework that turns any static 3D Gaussian Splatting scene into a 3D cinemagraph: a dynamic scene with vivid, diverse motion looping seamlessly from any viewpoint. A vision-language model infers plausible dynamics and guides a video model to synthesize a reference video, which we lift and complete into multi-view videos. To learn from this imperfect supervision, we propose Inconsistency-Robust Periodic 4DGS: a Fourier-series deformation field guarantees looping by construction, while a Grounded Drift Field anchored at the reference view absorbs cross-view inconsistency. Unlike prior Eulerian methods limited to fluid-like motion, we capture general deformation, object motion, and illumination change. We introduce a ground-truth-free evaluation covering vividness, naturalness, loop seam coherence, and scene quality. On 39 reconstructed and generated scenes, OuroWorld outperforms all baselines and wins 70.8%-99.0% of user-study comparisons. Project page: https://ouroworld.userwei.com",
    "published": "2026-10-08T17:59:46Z",
    "updated": "2026-10-08T17:59:46Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.12461"
  },
  {
    "id": "2610.11318",
    "title": "Finsler Flow Matching: Dynamics-Aware Geodesic Interpolation for Single-Snapshot Trajectory Inference",
    "authors": [
      "Niklas Canova",
      "Jonas Simon Fleck"
    ],
    "abstract": "Single-cell snapshot data can resolve a continuum of cellular states but do not uniquely determine the dynamics governing transitions between them. However, additional dynamical information can often be encoded in a cell-cell Markov transition kernel. Existing generative approaches for single cell trajectory inference either infer transport only from population marginals, impose a symmetric geometry on the state space, or incorporate directionality through a single velocity vector at each observed state. We introduce Finsler Flow Matching (FFM), a framework for learning continuous stochastic dynamics from discrete Markov transition graphs. We use the first and second local moments to construct a Finsler structure motivated by the Freidlin--Wentzell action, where the second moment determines anisotropic accessibility and the first moment introduces a preferred direction of motion. We learn neural approximations of the resulting directed geodesics, use their Finsler cost to construct source-target couplings, and define geometry-aware stochastic conditional paths that can be distilled into a continuous generative process through simulation-free score and flow matching. Across synthetic and single-cell trajectory inference benchmarks, FFM improves recovery of withheld intermediate populations, particularly when the transition dynamics are strongly directional or anisotropic. Our results provide a principled route from discrete transition probabilities to continuous generative dynamics while retaining both directional and diffusive structure.",
    "published": "2026-10-08T06:23:09Z",
    "updated": "2026-10-08T06:23:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11318"
  },
  {
    "id": "2610.11317",
    "title": "DivMoE: Fine-Grained MoE Upcycling via Cross-Domain Expert Composition",
    "authors": [
      "Yuxuan Lou",
      "Kai Yang",
      "Geng Zhang",
      "Yong Liu",
      "Yang You"
    ],
    "abstract": "Mixture-of-Experts (MoE) architectures have become essential for scaling large language models, with recent work demonstrating the benefits of fine-grained expert designs. Training such models from scratch is expensive, and sparse upcycling from pre-trained dense models is an attractive alternative. However, we identify a structural pathology of fine-grained upcycling: when fine-grained experts are derived from a single source model, naive routing collapses and downstream accuracy drops to near-random (e.g., on Qwen3-1.7B, Drop-Upcycling-fine-grained reaches only 23.2% average accuracy across 15 benchmarks, essentially matching from-scratch training at 22.2%, while the same method's coarse-grained variant reaches 50.2%). We propose DivMoE, the first framework achieving fine-grained MoE Upcycling with structurally-balanced routing. DivMoE introduces domain-specialized fine-grained expert initialization, deriving experts from dense models that have undergone domain-adaptive continual pre-training, and diversity-constrained routing, a hard structural constraint guaranteeing that each token activates experts from distinct domain groups. Across two base models and 15 benchmarks, DivMoE consistently outperforms six upcycling baselines (55.6% vs. 51.6% for the strongest baseline on Qwen3-1.7B) and strictly improves over the dense base model on every benchmark after Stage 2 continual pre-training -- closing the regression gap that has plagued prior fine-grained upcycling. After supervised fine-tuning on a public reasoning mixture, our 12B-parameter DivMoE model matches Moonlight-MoE (16B) at 64.5% average accuracy while outperforming a controlled NVIDIA-Upcycling baseline by 6.1 percentage points.",
    "published": "2026-10-08T06:23:01Z",
    "updated": "2026-10-08T06:23:01Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11317"
  },
  {
    "id": "2610.11316",
    "title": "MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface",
    "authors": [
      "Jianpeng Cheng",
      "Guangyu Sun",
      "Aashu Singh",
      "Benyu Zhang",
      "Haixing Dai",
      "Hossein Mansour",
      "Jiangfan Zhang",
      "Shlok Kumar Mishra",
      "Wei Sun",
      "Xuanming Cui",
      "Yanli Liu",
      "Qi Guo",
      "Max Xiangjun Fan",
      "Jun Xiao"
    ],
    "abstract": "System One models output constrained decisions and probability distributions rather than free-form text generation. While prevailing paradigms rely on structured schema objects to encode state, intent, and candidate choices, we revisit a fully natural language-based System One interface. In this framework, both the user request and each candidate option are expressed in natural language, supported by multimodal (image and video) auxiliary inputs. We introduce MetaEncoder, which fine-tunes a pre-trained Muse-Glimmer 30B decoder into an instruction-following decision-making encoder. To scale effectively across both small closed-set (< 256) and massive open-set (millions) candidate spaces, MetaEncoder employs a bi-encoder architecture trained via unidirectional contrastive learning for request-candidate alignment. We conduct extensive evaluations across 11 benchmark suites and 190 tasks spanning multimodal decision-making, understanding (closed-set) and retrieval (open-set), highlighting where MetaEncoder beats SOTA multimodal encoders, as well as its current limits on reasoning-intensive tasks.",
    "published": "2026-10-08T06:22:48Z",
    "updated": "2026-10-08T06:22:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11316"
  },
  {
    "id": "2610.11315",
    "title": "Deflating the Hessian: Rank-4 W4A4 Quantization for Multimodal Diffusion Transformers",
    "authors": [
      "Shiwen Wang",
      "Pengxiang Zhao",
      "Xiaoming Yuan"
    ],
    "abstract": "In diffusion transformers, low-rank branches can mitigate 4-bit weight--activation (W4A4) post-training quantization (PTQ) loss by decomposing each weight into a low-bit residual and a high-precision low-rank component. Existing low-rank PTQ approaches, however, either optimize low-rank compensation and residual quantization separately, often requiring higher ranks, or rely on second-order weight updates without explicitly modeling activation quantization error, which becomes particularly pronounced under 4-bit quantization. To address these limitations, we present HSVDQuant, a unified framework modeling low-rank-assisted W4A4 PTQ as a coupled calibration problem and deriving optimization-based solvers from the joint objective. Eliminating the output-side low-rank factor yields a deflated Hessian that discounts residual errors already captured by the low-rank component, while an activation-noise surrogate is incorporated to suppress activation quantization error. Across five diffusion backbones, rank-4 HSVDQuant consistently outperforms rank-4 SVDQuant in PSNR and LPIPS. It further surpasses rank-32 SVDQuant on SANA-1.6B, FLUX.1-schnell, and FLUX.1-dev with an $8\\times$ smaller rank and up to $6.25\\times$ faster quantization. Furthermore, on the Qwen3-8B LLM, rank-4 HSVDQuant improves MMLU accuracy from 61.50% to 68.17% over rank-32 SVDQuant. Overall, HSVDQuant achieves better W4A4 performance with substantially lower rank and quantization cost.",
    "published": "2026-10-08T06:22:19Z",
    "updated": "2026-10-09T04:09:36Z",
    "categories": [
      "cs.LG",
      "cs.CV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.11315"
  },
  {
    "id": "2610.11312",
    "title": "MedBenchAgent: Towards Systematic Automation of Medical VLM Benchmark Construction",
    "authors": [
      "Yulin Fu",
      "Junren Wang",
      "Guangjing Yang",
      "Zhangyuan Yu",
      "Wanran Sun",
      "Jiabao Zhou",
      "Jin Yin",
      "Qicheng Lao"
    ],
    "abstract": "Large-scale construction of medical vision-language model (VLM) benchmarks is increasingly feasible with richly annotated imaging datasets and large language models (LLMs), yet existing automation largely focuses on generating evaluation items within predefined benchmark specifications. We study the broader problem of automatically deriving the specification itself: what to evaluate, which annotations support each task, and how to translate this evidence into reliable evaluation items. We formulate benchmark construction as constrained compilation, in which the benchmark specification is progressively derived from evaluation requirements, heterogeneous annotations, and medical knowledge. Based on this formulation, we introduce MedBenchAgent, a multi-agent framework with a Benchmark Intermediate Representation (BIR) that encodes task definitions, evidence mappings, evaluation protocols, and item specifications across construction stages. MedBenchAgent separates planning, which derives and verifies the specification, from instantiation, which constructs and audits items under the locked specification. MedBenchAgent achieves a Task-Space F1 of 90.9%, outperforming direct task induction (79.2-80.0%) and prior-guided induction (85.1%); 994 of 1,000 sampled items from correctly identified tasks pass human audit. We further demonstrate portability to a specialized medical domain and evaluate twelve VLMs, revealing task- and setting-specific variation obscured by aggregate scores. These results establish constrained compilation as a scalable and auditable framework for medical VLM benchmark construction beyond question generation.",
    "published": "2026-10-08T06:17:33Z",
    "updated": "2026-10-08T06:17:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11312"
  },
  {
    "id": "2610.11310",
    "title": "FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs",
    "authors": [
      "Kyeong-Rae Kim",
      "Sungnyun Kim",
      "Tae-Hyun Oh"
    ],
    "abstract": "While 3D spatial reasoning in dynamic egocentric environments is crucial for embodied intelligence, audio-visual large language models (AV-LLMs) lack explicit mechanisms to process and internalize global geometry directly from raw sensory streams. Existing approaches either require costly fine-tuning or underutilize the model's cross-modal reasoning capacities. In this paper, we propose FloorSAV, a novel framework that explicitly grounds spatial audio-visual context by rendering a dynamic 2D floormap. By integrating 3D point clouds, camera trajectories, spatial audio cues, and semantically grounded object landmarks, we inject this floormap into the AV-LLM as a synchronized stream with an egocentric video. AV-LLMs utilize their multi-modal capabilities to jointly reason over visual, auditory, and geometric cues in a single inference with floormap interpretation guidance. We further introduce SAVED-Bench (Spatial Audio-Visual Egocentric Benchmark with Dynamic Agents), constructing essential tasks of spatial capability in real-world scenarios: dynamic relativity, regional, and path reasoning QAs. FloorSAV improves AV-LLMs' spatial reasoning on various tasks from both SAVED-Bench and SAVVY-Bench. Studies with ground-truth floormaps demonstrate the substantial potential of FloorSAV with accurate spatial information.",
    "published": "2026-10-08T06:15:36Z",
    "updated": "2026-10-08T06:15:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11310"
  },
  {
    "id": "2610.11309",
    "title": "From Geometry to Generalization: Why Row Normalization Can Beat Adam and Muon",
    "authors": [
      "Jihwan Kim",
      "Dogyoon Song",
      "Chulhee Yun"
    ],
    "abstract": "Different optimizers can fit the same training data while selecting classifiers with substantially different geometries, but whether this difference provably affects population performance remains unclear. We show that row-wise normalization can achieve strictly higher population accuracy than full-batch Adam, a proxy for random-reshuffling Adam, and exact-SVD Muon in high-dimensional multiclass classification. Under an isotropic Gaussian-cloud data model, this advantage arises because row normalization's class-wise Euclidean geometry asymptotically preserves the population decision-boundary directions, whereas Adam's coordinate-wise geometry and Muon's spectral geometry introduce nonvanishing distortions. Beyond isotropy, the advantage persists for full-batch training on class means with independently oriented class-mean and test-noise covariances. It holds for power-law spectra with class-mean exponent below one, even under heavily anisotropic test noise. When both covariances are diagonal and sufficiently close, the advantage over Adam can reverse, while applying the same random rotation to both restores it by changing only their alignment with Adam's coordinate axes. Synthetic and last-layer language-model experiments support the predicted advantage.",
    "published": "2026-10-08T06:15:13Z",
    "updated": "2026-10-08T06:15:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.OC",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.11309"
  },
  {
    "id": "2610.11306",
    "title": "Collaboratively Guided Adversarial Robust Distillation with Teacher-Favorable Examples",
    "authors": [
      "Zhi Li",
      "Haowei Liu",
      "Hongchen Yang",
      "Xiaoxuan Wang",
      "Song Gao",
      "Shaowen Yao",
      "Wei Zhou"
    ],
    "abstract": "Adversarial distillation transfers robustness from high-capacity teachers to compact students. Existing adversarial distillation methods mainly use teacher predictions on clean or adversarial examples to supervise student learning. However, teacher-favorable supervision within the perturbation neighborhood remains underexplored in adversarial distillation. We therefore propose Collaboratively Guided Adversarial Robust Distillation (CGARD), which jointly optimizes distinct student-adversarial and teacher-collaborative examples within the same perturbation neighborhood. The teacher-collaborative example is constrained to incur no greater cross-entropy loss under the teacher than the clean input. CGARD combines collaborative teacher guidance with adversarial teacher supervision to improve robust knowledge transfer. Experiments on CIFAR-10 and CIFAR-100, including white-box evaluation and additional black-box transfer evaluation, demonstrate consistent robustness improvements over strong adversarial distillation baselines.",
    "published": "2026-10-08T06:12:23Z",
    "updated": "2026-10-08T06:12:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11306"
  },
  {
    "id": "2610.11303",
    "title": "Efficient Multi-Granularity Knowledge Transfer for Radiology Report Generation",
    "authors": [
      "Xubin Zhong",
      "Zheyu Zhang",
      "Wenjian Qin",
      "Ning Wen"
    ],
    "abstract": "Radiology report generation can automatically generate clinical descriptions from X-ray images, thereby significantly improving the efficiency of radiologists. This task is challenging because it requires medical knowledge to accurately identify diseases and describe them in a professional manner. However, existing methods often overlook the importance of enhancing medical knowledge in describing pivotal areas, a capability that requires models to effectively extract and aggregate knowledge at multiple levels of granularity. Accordingly, we herein propose a novel and compact Efficient Multi-Granularity Knowledge Transfer (\\textbf{EMGKT}) method to address the above issues. First, we encode global knowledge embeddings using a medical vision-language model, which provides contextual medical knowledge. Moreover, we devise a novel Fine-Grained Knowledge Distillation (FGKD) training task which efficiently extract fine-grained knowledge. Specifically, the FGKD training task contains teacher embeddings and student embeddings. Teacher embeddings are encoded using extra priors; while student embeddings are learned from the teacher embeddings through knowledge distillation. During inference, the student embeddings are used to enhance fine-grained knowledge while the teacher embeddings are discarded, resulting in negligible computational costs and no need for extra priors. Finally, we further develop a mixture of disease diagnosis expert classifiers to enhance knowledge extraction. The classifiers are initialized using disease embeddings and are modeled as different experts to address various granularity features. Notably, \\textbf{EMGKT} can be efficiently applied to most existing methods. Extensive experiments are conducted on two widely-used public datasets and various baselines, which demonstrates the effectiveness and transferability of \\textbf{EMGKT}.",
    "published": "2026-10-08T06:09:28Z",
    "updated": "2026-10-08T06:09:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11303"
  },
  {
    "id": "2610.11302",
    "title": "iCATS: Fast Video Generation via Interaction-Aware Sparse Attention and Timestep-Adaptive Sparsity",
    "authors": [
      "Chengfeng Han",
      "Baole Ai",
      "Xianlu Bian",
      "Jie Yao",
      "Zilong Huang",
      "Ang Wang",
      "Dandan Ding"
    ],
    "abstract": "Training-free sparse attention offers a practical acceleration solution to Diffusion Transformers (DiTs) via reducing computations without fine-tuning. It typically involves estimating the importance of query-key regions and deriving sparse masks to compute only the important candidates, which inevitably introduces approximation errors that may degrade generation quality. To better balance the efficiency-quality trade-off, we propose iCATS, integrating improved importance estimation and sparse mask construction with an efficient hardware execution strategy. Specifically, for importance estimation, unlike previous works that perform independent clustering over query and key tokens based on feature similarity to estimate attention scores, iCATS demonstrates that clustering based on query-key dot-product interactions is more accurate and further reformulates this objective as a simple quadratic form for low-cost computation. For sparse mask construction, instead of using a fixed top-p rule, we observe that tolerance to sparse approximation errors varies across denoising timesteps and therefore introduce an SNR-guided sparsity schedule to adjust sparsity dynamically, leading to higher accuracy. Finally, for hardware execution, we devise a tail-merging strategy to reduce padding overhead caused by irregular cluster sizes, improving GPU kernel utilization. Extensive experiments show that iCATS achieves $2.03\\times$ acceleration with 31.017 dB PSNR on HunyuanVideo-T2V-13B and $1.55\\times$ acceleration with 29.301 dB PSNR on Wan2.1-T2V-14B, delivering a state-of-the-art efficiency-quality trade-off.",
    "published": "2026-10-08T06:09:04Z",
    "updated": "2026-10-08T06:09:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11302"
  },
  {
    "id": "2610.11300",
    "title": "Characterizing Overconfident Failure in LLM-Based Code Generation",
    "authors": [
      "Ravishka Rathnasuriya",
      "Wei Yang"
    ],
    "abstract": "Large language models (LLMs) are increasingly used for automated code generation, but generated programs can appear syntactically plausible while still failing execution-based correctness checks. Existing validation methods, such as testing and program analysis, remain essential but are often incomplete, costly, or applied only after generation. Model-derived uncertainty is therefore a natural early reliability signal. This paper studies the dilemma of overconfidence in code LLMs where incorrect programs are often generated with token-level confidence comparable to correct programs. We study this dilemma across four open-source code models and three execution-based benchmarks. Our analysis begins by investigating whether existing uncertainty metrics provide reliable proxies for execution correctness in code generation. We then characterize overconfidence at both global and local token levels, asking whether incorrect programs remain indistinguishable from correct ones under confidence and entropy summaries, including selective generation and the limits of instruction tuning. Finally, we evaluate whether common mitigation strategies reduce this failure mode. Our study yields four findings. First, existing uncertainty signals provide only partial and model-dependent evidence of execution failure. Second, overconfidence persists at both program and token levels, and uncertainty-based selection does not consistently improve accepted-set accuracy. Third, instruction tuning can increase certainty on failing generations without consistently improving correctness discrimination. Fourth, common mitigation techniques improve specific aspects of reliability but do not reliably resolve overconfident failure. Our exploratory latent analysis suggests that hidden representations may encode correctness-related signals that output confidence does not expose.",
    "published": "2026-10-08T06:07:44Z",
    "updated": "2026-10-08T06:07:44Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11300"
  },
  {
    "id": "2610.11299",
    "title": "DuplexAgent-RSI: Recursive Harness Improvement for Full-Duplex Voice Agent Collaboration",
    "authors": [
      "Yingda Shen",
      "Yuxiang Wang",
      "Kunyu Feng",
      "Qinke Ni",
      "Jiaqi Li",
      "Minghao Hsu",
      "Junan Zhang",
      "Dekun Chen",
      "Yutong Bian",
      "Zhizheng Wu"
    ],
    "abstract": "Voice agents are converging on a collaboration pattern: a full-duplex interaction model stays on the live channel as the entry to the conversation, while search, reasoning, and coding are handled through asynchronous delegation. A duplex model supports continuous listening and speaking, but complex reasoning and tool use may exceed its capabilities. A coding agent can plan and execute extended tasks, but its sequential interface is a poor fit for live conversation. Combining them requires a harness that coordinates task acceptance, progress, cancellation, replacement, and result delivery while keeping the conversation responsive. Existing harnesses often rely on coupled heuristics, making them difficult to improve systematically from evidence. We present DuplexAgent, a full-duplex collaboration system whose harness expresses this workflow as six editable modules, and Duplex-Harness-RSI, a closed loop that revises them from interaction traces. A simulator automatically generates timed test conversations, runs the system, and produces failure traces that identify the collaboration modules requiring repair. Reasoning LLMs and coding agents in the delegation pool also serve the improvement loop: the Exam Planner selects the next tests from observed weaknesses and the repair archive, and the Harness Editor proposes targeted module changes. The capabilities that serve the user thus also improve the system's coordination. Experiments on intelligence, agentic, and duplex benchmarks show that DuplexAgent combines continuous interaction with difficult reasoning and complex task execution, achieving stronger spoken-knowledge and executable-tool scores than the compared delegated systems while maintaining strong interruption response. A harness ablation further shows that this modular, verifiable loop outperforms the initial harness and repeated editing that lacks its diagnosis and repair archive.",
    "published": "2026-10-08T06:06:42Z",
    "updated": "2026-10-08T06:06:42Z",
    "categories": [
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.11299"
  },
  {
    "id": "2610.09875",
    "title": "SANet: Selective Attention Network for Infrared Small Target Detection",
    "authors": [
      "Yingmei Zhang",
      "Wangtao Bao",
      "Qin Xiao",
      "Yong Yang",
      "Weiguo Wan",
      "Yitao Luo",
      "Xueting Zou",
      "Lei Zhang"
    ],
    "abstract": "Infrared small target detection aims to accurately identify and locate dim targets in complex backgrounds and supports applications such as maritime surveillance and military search and rescue. However, the small size and weak contrast of infrared targets make it difficult to balance detection accuracy and false alarms. This paper proposes a selective attention network (SANet) for infrared small target detection. A dual-path semantic-aware module combines standard and pinwheel-shaped convolutions to preserve local spatial consistency and capture broader contextual information. Spatial and channel attention further refine the features and improve target-background discrimination. To address the limitations of static skip connections in U-Net, a selective attention fusion module adaptively integrates features across scales using spatially varying weights. It selectively enhances salient regions and improves discrimination between true targets and false alarms. Experiments on three public benchmarks, NUAA-SIRST, IRSTD-1K, and NUDT-SIRST, show that SANet achieves competitive performance in intersection over union (IoU), normalized IoU, detection probability, and false alarm rate. Its IoU exceeds that of the second-best method by 1.93, 4.32, and 2.21 percentage points, respectively. These results support the effectiveness of SANet in dim-target perception, discriminative feature representation, and background suppression.",
    "published": "2026-10-07T11:34:01Z",
    "updated": "2026-10-07T11:34:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09875"
  },
  {
    "id": "2610.09873",
    "title": "Bringing BNNs to Fast Event Processing",
    "authors": [
      "Paul Longour",
      "Julien Moreau",
      "Franck Davoine"
    ],
    "abstract": "Binary Neural Networks (BNNs) enable efficient deep learning deployment on resource constrained devices with weights and activations compressed to one bit, substantially reducing model size and inference cost. Event cameras offer complementary advantages, including low latency, high dynamic range, and low power consumption, by capturing asynchronous streams of events rather than dense image frames. Despite their shared emphasis on efficiency, the combination of these technologies remains largely unexplored. This work aims at adapting and evaluating modern deep BNN architectures on event data. We also show that cross-modal pretraining from RGB data can improve the classification accuracy of BNNs on neuromorphic datasets. We introduce the Polar-wise Binary Event Volume (PBEV), a binary representation that enables event-camera data to be processed directly by BNNs and represents a step toward fully binarized event-based vision systems. Best evaluated BNN on N-Caltech101 classification benchmarks shows 90.58% accuracy with 7.5x less operations than their full-precision counterparts.",
    "published": "2026-10-07T11:33:25Z",
    "updated": "2026-10-07T11:33:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09873"
  },
  {
    "id": "2610.09872",
    "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
    "authors": [
      "Jun Zhao",
      "Leiming Fu",
      "Yanbo Wen",
      "Yiding Wang",
      "Xuantong Liu",
      "Yang Shu",
      "Yuyang Lu",
      "Xuanran Xing",
      "Jingqi Tong",
      "Hao Xu",
      "Qi Zhang",
      "Xuanjing Huang"
    ],
    "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
    "published": "2026-10-07T11:33:21Z",
    "updated": "2026-10-07T11:33:21Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.09872"
  },
  {
    "id": "2610.09871",
    "title": "An AI-assisted conditioning and geological interpretation workflow for usage in implicit geological modeling",
    "authors": [
      "Stefan Carpentier",
      "Jan Diederik van Wees",
      "Eva de Boever",
      "Jan Niederau",
      "Camille Chapeland",
      "Suzanne Atkins",
      "Boris Boullenger",
      "Jens Wollenweber"
    ],
    "abstract": "Implicit modeling and Relative Geologic Time are geological modeling techniques that enable more efficient, faster, less biased and more reproducible modeling results. For optimal operation, these techniques require many well-constrained input data. In the framework of the Horizon Europe GO-Forward and MOOI WarmingUP GOO projects and to accelerate Implicit modeling, Machine Learning (ML) methods have been tested and implemented in a toolkit for the interpretation of (onshore) seismic data from the shallow to deep range (+- 300 - 3500 m). The goal is to rapidly characterise this depth domain by efficient interpretation of horizons and faults in seismic data. The first step is to improve the signal by applying AI techniques like self-supervised and semi-supervised contrastive learning CNN's for noise reduction and interpolation. Next, horizons and faults are interpreted with minimal use of human-generated training data by using (semi-) self-supervised methods. The resulting developed toolkit supports the application of the implemented algorithms in an efficient workflow. As a first demonstration, the top of the Dutch Maassluis Formation has been interpreted in the Leeuwarden and Waalwijk 3D seismic cubes. Overall, this study demonstrates that AI-assisted interpretation workflows have reached a level of maturity that allows their integration into applied geological modeling and decision-making.",
    "published": "2026-10-07T11:32:47Z",
    "updated": "2026-10-07T11:32:47Z",
    "categories": [
      "physics.geo-ph",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09871"
  },
  {
    "id": "2610.09870",
    "title": "Deadline-Aware Multi-Agent Reinforcement Learning for TSN-Based Vehicular Edge Networks",
    "authors": [
      "Bernardo A. C. Pereira",
      "Marcos Carvalho",
      "Fatih Temiz",
      "Shavbo Salehi",
      "Melike Erol-Kantarci",
      "Andreas Gavrielides",
      "Johann M. Marquez-Barja",
      "Daniel F. Macedo"
    ],
    "abstract": "Vehicular edge computing (VEC) enables latency-sensitive applications by bringing computing and networking resources closer to vehicles. However, existing approaches often overlook network contention among co-located services with heterogeneous and dynamic latency requirements. While time-sensitive networking (TSN) provides bounded-latency communication, conventional and reinforcement learning-based schedulers struggle to adapt to highly dynamic vehicular environments and inter-queue dependencies. To address these limitations, we propose a multi-agent reinforcement learning (MARL) approach for queue-level scheduling in TSN-enabled VEC. Each TSN queue is assigned an autonomous agent that jointly learns the queue service order and time-slot duration to minimize deadline misses under speed-dependent latency requirements. We employ multi-agent proximal policy optimization (MAPPO) to enable coordinated yet autonomous scheduling decisions. Evaluation against single-agent, multi-agent, and non-learning-based baselines shows that MAPPO provides robust performance across different traffic profiles. Compared with centralized single-agent methods, it reduces service latency by up to 66.2% and improves reliability by up to 271.8%. Furthermore, unlike urgency-based heuristics, MAPPO ensures balanced scheduling while achieving lower inference times compared to other MARL methods.",
    "published": "2026-10-07T11:30:19Z",
    "updated": "2026-10-07T11:30:19Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09870"
  },
  {
    "id": "2610.10628",
    "title": "Agent4RE: A Self-Refining Multi-agent Framework for End-to-End Software Requirements Engineering and Benchmarking",
    "authors": [
      "Yongjian Tang",
      "Linhan Li",
      "Thomas Runkler"
    ],
    "abstract": "Existing LLM-based approaches for software Requirements Engineering (RE) typically rely on basic prompting strategies or rudimentary agent collaboration, under-utilizing the full potential of multi-agent systems. Meanwhile, available datasets focus on isolated subtasks, such as requirements extraction, classification, and completeness detection, leaving the absence of an end-to-end RE benchmark that spans from requirements elicitation to generation. We present Agent4RE - a self-refining multi-agent RE system that orchestrates specialized agents and incorporates two iterative improvement loops. To support evaluation, we construct RE-E2E - a real-world dataset built from human-written requirement specifications, enabling end-to-end assessment of RE workflows. Building on this foundation, we further propose two enhanced Agent4RE versions that incorporate either autonomous self-refinement or structured human feedback, and analyze their strengths and limitations across different scenarios. Evaluation on 8 Large Language Models (LLMs) demonstrates that all three Agent4RE variants consistently outperform a domain-context-augmented prompting baseline by average 8% in text-based metrics. The two enhanced variants achieve the highest LLM-as-a-judge and human ratings, surpassing two RE baselines by approximately 0.8 points on a four-point scale. This consistent performance establishes Agent4RE as a practical end-to-end RE solution for industrial environments.",
    "published": "2026-10-07T11:23:11Z",
    "updated": "2026-10-07T11:23:11Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.10628"
  },
  {
    "id": "2610.09863",
    "title": "Global Average Precision for Representation Learning",
    "authors": [
      "Bill Psomas",
      "Mohammad Mahdi",
      "Michalis Thomas",
      "Danda Pani Paudel",
      "Giorgos Tolias",
      "Giorgos Kordopatis-Zilos"
    ],
    "abstract": "Standard information retrieval metrics, such as mean Average Precision (mAP), assess performance one query at a time, based on how the similarities between a query and its positives compare against those with its negatives. The same holds for common representation learning losses, such as InfoNCE and per-query AP surrogates. None of them considers whether similarities are comparable across queries, which any system with a single decision threshold relies on. Global Average Precision (gAP) does, by ranking all query-candidate pairs in one list and computing a single AP. We introduce gSAP, a differentiable surrogate of gAP. It needs only a similarity matrix and a binary matrix marking the positive pairs, the same input as existing losses, so it is a drop-in replacement for them and agnostic to the encoder, the modality, and the source of supervision. Since it considers all possible pairwise comparisons in the batch jointly, it also remains trainable at low temperatures, a regime where per-query surrogates run out of gradient. Swapping it into established recipes improves supervised metric learning, cross-modal alignment, and self-supervised pretraining, where, to our knowledge, it is the first ranking loss to replace the community standard InfoNCE in the latter two. Its similarities are more consistent across queries, which drives the gains under a universal threshold. gSAP retrieves up to four times as many positive pairs as the strongest AP surrogate at the same precision, and it degrades the least when queries with no positives in the database are added. Beyond thresholding, models trained with gSAP also learn better representations, with higher transfer, $k$NN and zero-shot classification accuracy.",
    "published": "2026-10-07T11:22:05Z",
    "updated": "2026-10-07T11:22:05Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09863"
  },
  {
    "id": "2610.09860",
    "title": "DeepTopoClustering: Unsupervised Derivation of Surface Process Taxonomy from 4D Point Clouds for Topographic Monitoring",
    "authors": [
      "Jiapan Wang",
      "Daan Hulskemper",
      "Mathilde Letard",
      "Roderik Lindenbergh",
      "Katharina Anders"
    ],
    "abstract": "4D point clouds acquired by permanent laser scanning (PLS) enable accurate high-frequency monitoring of surface change in dynamic topographic environments. However, existing methods remain limited in organizing detected surface activities into meaningful process types. We propose DeepTopoClustering (DTC), an unsupervised framework for deriving a hierarchical process taxonomy from object-based surface activities, so-called 4D objects-by-change (4D-OBCs). We transform each 4D-OBC into a GeoMorphogram, a distributional sequence representing the temporal evolution of topographic change within a spatially bounded surface activity. A convolutional autoencoder learns latent embeddings from GeoMorphograms, which are jointly optimized using a hierarchical deep clustering objective to organize surface activities into a hierarchy. We evaluate the learned hierarchy using expert annotations on two 4D datasets of sandy beach sites and their combination. DTC with GeoMorphograms achieves the highest agreement with expert judgment at the taxonomy level comprising eight major process types ($F_1=0.78$, match accuracy $=0.92$), outperforming dimensionality reduction and conventional flat clustering. The learned taxonomy separates major erosion- and deposition-dominated activities and distinguishes finer subtypes based on change magnitude, duration, compactness, and temporal evolution. DTC thus provides a scalable and interpretable route from 4D change detection to a data-driven, expert-supported surface process taxonomy, advancing automated knowledge derivation for understanding surface dynamics in topographic monitoring.",
    "published": "2026-10-07T11:16:19Z",
    "updated": "2026-10-07T11:16:19Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09860"
  },
  {
    "id": "2610.09858",
    "title": "Training Advisors for LLM Agents from Task Outcomes",
    "authors": [
      "Sergei Polezhaev",
      "Barys Liskavets",
      "Ori Press",
      "Alexander Golubev"
    ],
    "abstract": "Large language model agents tackle multi-step tasks by interleaving reasoning and tool calls with observations from the environment. Prior work has shown that natural-language feedback can help these agents revise their decisions during task execution. We introduce Caddie, a method for training critics to provide natural-language analysis and advice as agents work through a task. Unlike approaches that rely on step-level labels or reference critiques, Caddie learns from whether the agent ultimately succeeds after receiving the critic's feedback. We optimize the critic through reinforcement learning while keeping the base model frozen. Trained on multi-hop question answering with a single base model, our Qwen3-4B critic improves success rates across four base models of different scales and architectures, including three not used during critic training. On the MuSiQue benchmark, the trained critic improves Qwen3-4B's success rate by more than 25 percentage points, surpassing the performance of Kimi K3 without a critic. The same critic also yields gains on out-of-domain interactive benchmarks, including $τ^3$ and DeepDive, with no additional training. Our results show that agents can decide when to seek help from a critic at inference time and that outcome-based critic training can produce guidance that transfers across base models and task domains.",
    "published": "2026-10-07T11:14:26Z",
    "updated": "2026-10-07T11:14:26Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09858"
  },
  {
    "id": "2610.09856",
    "title": "Self-Evolve With a Reference:Anchored Training of Tool-Integrated Agents",
    "authors": [
      "Wenjie Liao",
      "Liangjie Zhao",
      "Zehong Cao"
    ],
    "abstract": "Self-evolving tool-integrated agents learn from tasks and feedback generated within their own training loop. A Curriculum Agent generates tasks, while an Executor Agent learns from self-consistency signals through reinforcement learning. However, relying solely on the current Executor for feedback has two limitations: group-relative advantages vanish under full consensus, while uncertainty-based curriculum rewards favor disagreement without showing whether the generated tasks support further learning. These limitations motivate an additional reference beyond the current Executor. We propose \\textit{AnchorLoop}, which introduces a frozen copy of the previous iteration's Executor as a historical reference and reuses it on both sides of the training loop. For the Executor, the anchor provides a cross-reference advantage that evaluates current outputs against both current and historical majority answers. For the Curriculum, it provides an agreement-based reference based on differences in sampled majority agreement. Since the Executor and anchor have identical parameters during Curriculum training, this comparison serves as a proxy for task selection rather than evidence of inter-version improvement or correctness. Across 13 reasoning benchmarks, AnchorLoop improves over Agent0 by 2.5\\% on mathematical reasoning and 2.8\\% on general reasoning tasks. It also maintains higher effective-advantage variance and continues improving in later iterations as the unanchored baseline shows diminishing gains. These results demonstrate the benefit of introducing a lightweight historical reference into self-evolving tool-integrated agents without external task or answer supervision.",
    "published": "2026-10-07T11:13:35Z",
    "updated": "2026-10-07T11:13:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09856"
  },
  {
    "id": "2610.09853",
    "title": "DeltaSplat: Iterative Gaussian Refinement for Pose-Free Feed-Forward 3D Gaussian Splatting",
    "authors": [
      "Chanung Park",
      "Seunghyeon Song",
      "Joo Chan Lee",
      "Eunbyung Park",
      "Jong Hwan Ko"
    ],
    "abstract": "Pose-free feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene from sparse, unposed images in a single network pass, removing the need for camera calibration and per-scene optimization. However, camera estimation errors propagate into the predicted Gaussians and compound the geometric and photometric inaccuracies of single-pass prediction. To correct these errors, we introduce DeltaSplat, a lightweight Gaussian refinement module for pose-free feed-forward 3DGS. It iteratively renders the current Gaussians at the input context views and predicts per-Gaussian updates from the resulting residuals. A 2D residual alone, however, underdetermines the 3D correction. DeltaSplat therefore conditions each update on per-pixel Plücker rays and rendered depth as a soft geometric prior. A dual-branch convolutional mixer efficiently encodes these inputs, and per-attribute heads decode the fused features into position, opacity, and color updates. The module adds only ~2.2% parameters to the backbone and remains fully feed-forward at inference. On DL3DV, DeltaSplat reaches 26.64 dB PSNR in the pose-free setting, improving its state-of-the-art backbone by 1.75 dB and surpassing even baselines supplied with ground-truth cameras; consistent gains hold across 6-24 views and all camera regimes.",
    "published": "2026-10-07T11:11:22Z",
    "updated": "2026-10-07T11:11:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09853"
  },
  {
    "id": "2610.09849",
    "title": "Hard, Yet Reducible: Controlled Forward Transfer for Synthetic Degradation Curation",
    "authors": [
      "Chunming He",
      "Kailai Zhou",
      "Jiaming Zuo",
      "Hanqi Liu",
      "Fengyang Xiao",
      "Youwei Pang",
      "Xiaofeng Liu",
      "Weisi Lin",
      "Xiaoqi Zhao"
    ],
    "abstract": "Selecting synthetic degradations for dense prediction requires an estimate of their training utility, the generalization gain they bring under a finite training budget. Clean and degraded twins share content and labels, suggesting a score based on how much short training reduces the excess error caused by degradation. However, this gap can also shrink when clean performance deteriorates. Measuring the improvement on degraded images alone avoids that confound, but it still credits progress that the same amount of clean training would have produced. We propose the \\textbf{controlled Reducible Degradation Gap} (cRDG) for regions defined by degradation type and severity. From a common checkpoint, cRDG runs two budget-matched probes that differ only in one augmentation slot, which holds either a synthetic degradation or a clean augmentation. The score is the gain on held-out degraded images relative to the clean-control probe. Clean harm is a separate feasibility constraint. cRDG reveals a correctable severity band in which training on the degradation yields high controlled gain under the available budget, and the band moves with the predictor, the starting checkpoint, and the training budget. \\textbf{Curation of Reducible Bands} (\\method) uses cRDG to select synthetic data without changing the predictor. On semantic segmentation and salient object detection, \\method{} improves representative predictors under matched synthetic-data budgets and training schedules, extends to existing data-generation pipelines, and preserves clean performance. Code and supporting materials will be publicly released.",
    "published": "2026-10-07T11:07:36Z",
    "updated": "2026-10-07T11:07:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09849"
  },
  {
    "id": "2610.07996",
    "title": "TICDA: Tabular In-Context Data Attribution",
    "authors": [
      "Yacine Benihaddadene",
      "Milan Bhan",
      "Eliot Dugelay",
      "Mohammed Jawhar",
      "Benjamin Wong",
      "Nicolas Chesneau",
      "Duong Nguyen"
    ],
    "abstract": "Tabular foundation models (TFMs) achieve strong predictive performance by conditioning on labeled demonstrations provided in context, without any parameter update. Yet how individual demonstrations shape a given prediction remains poorly understood. This gap matters in practice: the context is often assembled from whatever labeled data is available, potentially leading to the inclusion of mislabeled, redundant, or low-quality examples that degrade performance. Standard data attribution methods do not transfer to the TFM setting: resampling-based approaches such as DemoShapley require a combinatorial number of forward passes, and gradient-based estimators such as influence functions require computing training point's effect on the model parameters, which in-context learning never updates. We introduce TICDA, a method that measures the influence of every demonstration in the context directly from linear surrogates trained on TFM latent embeddings, in a single forward pass and at negligible cost. We show that TICDA offers the best compromise against competitors across four tasks: detecting labeling errors, curating context to preserve predictive accuracy while lowering inference cost, producing attribution scores that transfer across TFMs, and supporting an acquisition strategy for efficient active learning.",
    "published": "2026-10-06T08:55:27Z",
    "updated": "2026-10-06T08:55:27Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07996"
  },
  {
    "id": "2610.07990",
    "title": "A Broader Look at Model Merging: Rethinking Implicit Regularization Induced by Task Arithmetic",
    "authors": [
      "Sin-Han Yang",
      "Shih-Cheng Huang",
      "Chieh-Yen Lin",
      "Yun-Nung Chen",
      "Shao-Hua Sun",
      "Hung-yi Lee"
    ],
    "abstract": "Model merging aims to build a multi-task model cheaply by combining the weights of individual task-specific models. To perform well across multiple tasks, most existing merging methods use an additional dataset to find the coefficients for the best linear combination of task-specific weight updates. However, we identify an implicit regularization in this standard practice: searching over coefficients restricts the candidate models to a subspace spanned by task-specific weight updates. In this work, we investigate whether this regularization is actually useful. Surprisingly, empirical results show that optimizing merged-model weights without this regularization significantly boosts the performance of common merging methods across multiple architectures, domains, and even in an extremely data-limited scenario where only one instance is available per class. Moreover, directly optimizing the pretrained model weights even outperforms some existing merging methods. Analysis shows that better multi-task weights exist outside the subspace and can be found using multiple methods. We study different strategies for using the additional dataset, discussing their practical use and implications for model merging. Overall, this work calls for revisiting the existing model-merging pipeline, motivating a broader exploration of the weight space and a reconsideration of the implicit regularization induced by task arithmetic.",
    "published": "2026-10-06T08:49:40Z",
    "updated": "2026-10-06T08:49:40Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07990"
  },
  {
    "id": "2610.07987",
    "title": "VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs",
    "authors": [
      "Yuan Feng",
      "Qize Yang",
      "Ruizhe Chen",
      "Sibo Song",
      "Haolin He",
      "Muzhi Zhu",
      "Zihan Liu",
      "Yunfei Chu",
      "Xize Cheng",
      "Yuxuan Wang",
      "Jin Xu",
      "Xike Xie"
    ],
    "abstract": "Multimodal large language models have become the dominant paradigm for visual understanding, but incur substantial costs by encoding inputs into dense, fixed-size patch tokens. However, visual information is unevenly distributed: some regions require fine-grained detail, while others admit compact representations. Downsampling sacrifices this detail, while existing token pruning and adaptive approaches remain limited in content-adaptive granularity, task generalization, and integration with modern MLLMs and serving infrastructure. Overcoming these limitations calls for foundation models that learn, end to end, where-and at what granularity-to allocate visual representations, a native capability we term elastic visual representation weaving. We introduce VisionWeave, establishing this capability in frontier-level MLLMs through large-scale training. It combines two components: a gated spatial pooler constructs coarse-grained representations alongside native fine-grained representations within a shared MRoPE coordinate, while a granularity router learns their content-adaptive allocation. Through self-distillation alone, we validate this capability on Qwen3.5-4B and scale to Qwen3.8-27B with over 30K A100 GPU-hours. Based on Qwen3.8-27B, VisionWeave adaptively adjusts token savings to visual content, saving 43.0% tokens on average while retaining 98.9% native performance across eight benchmarks, versus only 88% performance preserved for token pruning baselines with a fixed 50% savings target. Extensive evaluations confirm robust efficiency-quality trade-offs across diverse tasks, resolutions and video frames. When deployed on SGLang serving engine, our method achieves a 2.3x throughput gain while reducing mean TTFT by 54.4% and mean TPOT by 60.6%. Together, we believe these results position elastic visual weaving as a promising capability for next-generation multimodal models.",
    "published": "2026-10-06T08:48:50Z",
    "updated": "2026-10-06T08:48:50Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07987"
  },
  {
    "id": "2610.07984",
    "title": "Decide Before You Look: Learning Which Retrieved Memories Deserve Pixels",
    "authors": [
      "Youxing LI"
    ],
    "abstract": "Multimodal assistants answer questions from long-term memories that contain images. After retrieval, each retrieved image reaches the answering model either as pixels, at about a thousand visual tokens per image, or as a stored text proxy that often misses the detail the question asks about. We find that the benefit of pixels usually comes from one or two retrieved memories, and that it can be predicted before the answering model runs, without reading any full-resolution image. In PixelTriage, a plug-in placed after retrieval, a small model that does not generate text reads the dialogue, a short note and a thumbnail of each retrieved memory and predicts how much its pixels would add. It is trained on synthetic memory episodes labeled by a frozen 27B model that answers each question with and without each memory's pixels. With a 7B answering model, PixelTriage lies on the accuracy--cost frontier of M$^3$Exam, DMV and MemEye and uses 11--23\\% of the visual tokens without a significant loss of accuracy. On DMV it answers 2.9 times faster than opening all images. It outperforms retrieval order and uniform down-sizing at equal budgets and transfers to other memory systems and to a 397B answering model.",
    "published": "2026-10-06T08:47:45Z",
    "updated": "2026-10-06T08:47:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07984"
  },
  {
    "id": "2610.07982",
    "title": "M3SunAgent: Monocular 3D Spatial Understanding Agent for Metric Depth Estimation and 3D Visual Grounding",
    "authors": [
      "Jinsong Zhang",
      "Kejun Wu",
      "Ming Zhu",
      "Renjie Qiao",
      "Chengtao Cai",
      "Zhengguo Li"
    ],
    "abstract": "Monocular metric depth estimation and 3D visual grounding represent the two complementary cornerstones of monocular 3D spatial understanding (M3Sun), from which the fundamental 3D spatial information required by M3Sun can be acquired. However, these complementary tasks are generally conducted by separate frameworks, which pose challenges of inflexible and unaligned spatial information access for embodied intelligence systems. In this paper, we propose a unified agent for monocular 3D spatial understanding (M3SunAgent) that leverages a large language model (LLM) as a task planner for spatial visual programming, which flexibly generate structured programs and coordinate tools. For instance-level metric depth estimation task, M3SunAgent invokes an object detector tool to locate the target, estimates depth at selected points with a depth estimation tool, and aggregates these predictions into an instance-level depth estimate. We also construct the M3Sun Instance (M3SI) dataset, a benchmark with 2,910 samples for evaluation. For monocular 3D visual grounding task, M3SunAgent uses a vision-language model (VLM) tool to locate the target and output basic spatial attributes, then combines back-projection tool with a dimension-lifting tool to predict its 3D bounding box. Experimental results demonstrate the superior performance of M3SunAgent. Specifically, in evaluations of instance-level monocular metric depth estimation, M3SunAgent achieves the best performance among all compared models, 52.61% of predicted instances are distributed below depth error 0.25 ($δ< 0.25$). In evaluations of monocular 3D visual grounding, M3SunAgent demonstrates overall competitive performance than vision and VLM models, reaching a 3D mean intersection over union (mIoU) of 41.73% and exceeding the state-of-the-art MonoVLM model by 3.62%.",
    "published": "2026-10-06T08:45:25Z",
    "updated": "2026-10-06T08:45:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07982"
  },
  {
    "id": "2610.07979",
    "title": "Learning from Revision Consequences: Hindsight Meta-Experience Distillation for Self-Improving Agents",
    "authors": [
      "Qianhan Feng",
      "Zhongzhen Huang",
      "Yakun Zhu",
      "Xiaofan Zhang",
      "Qi Dou"
    ],
    "abstract": "As agents continuously improve by generating and revising Skills, the process that discovers and refines those Skills becomes a learnable object in its own right. Task-Skills directly act on task execution, whereas Meta-Skills govern how agents discover and improve future Skills; their value therefore emerges through the subsequent search processes they induce. Existing approaches improve Meta-Skills from observed raw Skill-search trajectories and branch outcomes. However, branch performance entangles the effects of the initial discovery state and the Meta-Skill revision that generated the search process, making it difficult to characterize what a particular revision actually changed, and pushing updates toward revisions that benefit from favorable states rather than those that improve the process. We introduce HMED (Hindsight Meta-Experience Distillation), a mechanism for constructing Meta-Experience for self-improving agents. HMED revisits the completed event from which a revision originates and re-executes the incumbent and revised Meta-Skills from the same restored discovery state, so that the changes associated with the revision can be observed under a shared condition. Each comparison is distilled into a Meta-Experience, a structured record that can be reused by future updates, so that even revisions that are not ultimately retained still contribute a learning signal. Across three interactive agent benchmarks and both open-source and closed-source models, HMED consistently improves Skill discovery performance over strong baselines, shifting Meta-Skill learning beyond branch outcomes toward the consequences of changing the improvement process.",
    "published": "2026-10-06T08:43:43Z",
    "updated": "2026-10-06T08:43:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07979"
  },
  {
    "id": "2610.07972",
    "title": "Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces",
    "authors": [
      "Yeji Park",
      "Jaeyun Shim",
      "Taesik Gong"
    ],
    "abstract": "Mobile GUI agents increasingly operate on interfaces influenced by users' histories and preferences, but their reliability across different users remains underexplored. We introduce PAIR (Personalized Application-state Instantiation and Rendering), a pipeline for constructing user-conditioned application states that enables controlled evaluation of the same task across different users. We further introduce RePAIR (Reinforcement learning with Personalization-Aware Interaction Rewards), a training approach that learns from cross-user differences in subgoal outcomes to improve reliability across user-conditioned mobile environments. Across six agents, we find substantial variation in task success across users and consistently lower subgoal achievement in user-conditioned UI contexts (6.98 to 15.4 pp). This gap further increases for personal targets drawn from each user's own content (8.77 to 22.0 pp). Failures in these contexts frequently involve selecting another item instead of the intended target, particularly before target exposure. Finally, RePAIR improves user-conditioned SAR (+5.87 pp), all-success (+7.50 pp), and overall Task SR (+9.42 pp) over its supervised fine-tuning parent on unseen users, providing initial evidence that explicitly learning from cross-user variation can improve GUI-agent reliability.",
    "published": "2026-10-06T08:38:30Z",
    "updated": "2026-10-06T08:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07972"
  },
  {
    "id": "2610.07969",
    "title": "EmbodiedSmith: Scaling Embodied Data through Recursive Self-Improvement Flywheel in Simulation",
    "authors": [
      "Yikai Qin",
      "Yifei Deng",
      "Mingjian Liang",
      "Wenxuan Song",
      "Zepeng Lin",
      "Zhiyi Jiang",
      "Jiajun Fu",
      "Qiao Sun",
      "Huashuo Lei",
      "Xicheng Gong",
      "Jiayi Chen",
      "Han Zhao",
      "Shuanghao Bai",
      "Pengxiang Ding",
      "Pengwei Wang",
      "Haoang Li"
    ],
    "abstract": "Scaling robotic foundation models requires diverse training data and reliable evaluation environments. Simulation offers a scalable solution, yet existing generation pipelines remain constrained by predefined assets and skills, a disconnect between scene generation and task generation, and limited support for complex embodiments and physics. We introduce EmbodiedSmith, a framework for scalable embodied data generation through recursive self-improvement (RSI). EmbodiedSmith unifies asset, scene, and task generation in a pipeline that supports autonomous creation and language-driven customization. Its core is an agentic refinement loop: scene generation anticipates downstream task requirements, while task generation guides targeted scene edits, allowing scenes and tasks to iteratively improve one another. This joint refinement improves task generation success, including for long-horizon tasks. The framework further supports mobile manipulators, humanoids, and dexterous hands, as well as interactions involving deformable objects and fluids, broadening the range of behaviors and physical phenomena represented in generated data. Together, these capabilities provide a flexible simulation engine for both robot pretraining and evaluation. Extensive experiments validate the quality, diversity, and generation efficiency of the resulting data, while downstream policy experiments demonstrate that increased data diversity improves generalization.",
    "published": "2026-10-06T08:34:28Z",
    "updated": "2026-10-06T08:34:28Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.07969"
  },
  {
    "id": "2610.07962",
    "title": "ReGraph: A Computational Account of Emergent Generalization in the \"what\" and \"where\" Dual Visual Streams",
    "authors": [
      "Hyewon Kang",
      "Jungmin Lee",
      "Ilgyu Lee",
      "Seok-Jun Hong"
    ],
    "abstract": "Where generalization capacity--the ability to extract context-invariant relational structures--first emerges remains a central question in AI and neuroscience. The foundation for this capacity lies upstream of the hippocampus, within the entorhinal cortex, where parallel pathways dissociate relational structure in the medial entorhinal cortex (MEC) from sensory content in the lateral entorhinal cortex. However, as Eichenbaum argued, such factorization likely originates earlier, driven by the segregation of the dorsal ('where') and ventral ('what') visual streams. Supporting this, grid-like firing patterns--a signature of MEC (context-invariant codes)--also appear in preceding neocortical regions along the dorsal pathway. Yet, how such representations are computationally formed along upstream pathways remains unknown. To investigate this in silico, we developed ReGraph, a recurrent dual-stream graph model with biological inductive biases, including retina-driven stream-specialized encoding, dorsal-to-ventral modulation, and dynamic lateral connectivity. Trained on the action benchmark Something-Something V2, ReGraph revealed a pathway-specific emergence of relational mapping: context-invariant codes and grid-like spatial bases uniquely co-emerged along the extended dorsal stream. In contrast, their absence in single-stream, unmodulated variants, and standard baselines implies that these inductive biases are prerequisites for relational structures. Crucially, our post-hoc analyses demonstrated that these grid-like bases serve as reusable routing templates for information processing via lateral connectivity. Together, our findings provide a computational account that generalization may not be a faculty that emerges abruptly within a dedicated region, but a property that already takes shape as sensory information is parsed into factorized streams of hierarchical visual processing.",
    "published": "2026-10-06T08:30:45Z",
    "updated": "2026-10-06T08:30:45Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2610.07962"
  },
  {
    "id": "2610.07958",
    "title": "DensiTok: Making Feed-Forward 3D Gaussian Splatting See More Views Than It Is Given",
    "authors": [
      "Minhyeok Lee",
      "Jungho Lee",
      "Minseok Kang",
      "Heeseung Choi",
      "Ig-Jae Kim",
      "Sangyoun Lee"
    ],
    "abstract": "Feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene in a single forward pass, replacing per-scene optimization with a network trained across many scenes. Its quality, however, degrades sharply as the number of input images drops. The bottleneck is upstream of the reconstruction heads: from a few unposed views, the internal representation they read carries no evidence for unobserved regions, leaving holes, floaters, and blur. The common remedy supplies that evidence as pixels, synthesizing extra views with an image or video generator and re-encoding them, which is costly and not 3D-consistent by construction. We instead densify the evidence itself. We present DensiTok, a plug-in module for pretrained feed-forward 3DGS models that densifies their internal geometry tokens directly, making a frozen backbone behave as though it had observed many more views than it was given. DensiTok compresses those tokens into a compact latent space, completes the latents of the unobserved viewpoints in a single flow-matching step conditioned on camera geometry, and decodes them back into tokens that the original reconstruction heads. The same module design can be integrated into different pretrained predictors while keeping each backbone and its reconstruction heads frozen. Completion in a low-dimensional latent space requires no image synthesis or additional encoder passes. Across three pretrained backbones and two benchmarks, DensiTok consistently improves sparse-view reconstruction and recovers much of the gap to dense-view reconstruction.",
    "published": "2026-10-06T08:29:41Z",
    "updated": "2026-10-06T08:29:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07958"
  },
  {
    "id": "2610.07954",
    "title": "Revisiting Numerical Forecasting Models for Language-Based Trajectory Prediction",
    "authors": [
      "JunGyu Lee",
      "Inhwan Bae",
      "Hae-Gon Jeon"
    ],
    "abstract": "Language-based trajectory predictors represent coordinates as discrete tokens and learn auxiliary tasks such as destination and group reasoning. This formulation enables the model to capture behavioral intent and social context beyond coordinate dynamics alone. However, token-level objectives provide only indirect guidance for continuous coordinate-space dynamics. To address this limitation, we introduce MoRE (Mixture of Reward Experts), a refinement framework that transfers numerical forecasting priors into a pretrained language-based predictor through reinforcement learning. Five frozen numerical predictors provide complementary coordinate-level knowledge of motion and interactions. Their predictions are converted into expert rewards and combined through an uncertainty-weighted consensus that penalizes disagreement. A ground-truth reward anchors the prediction to the target trajectory. To focus refinement on difficult cases, MoRE refines the policy using the top 1% of training samples ranked by predictive entropy. Expert predictions are computed once and cached before PPO training, so the experts are not run during policy updates or inference. In this way, MoRE combines the contextual modeling of the language-based predictor with coordinate-level feedback from numerical experts. On ETH-UCY, MoRE reduces ADE from 0.22 to 0.20 m and FDE from 0.32 to 0.29 m. Relative to the base policy, ADE decreases by 17.9% on SDD and 12.7% on NBA. On ETH-UCY, MoRE also reduces collision rates and better matches ground-truth pedestrian spacing, without increasing measured inference memory or latency. The project page is available at https://jungyu0413.github.io/MoRE/.",
    "published": "2026-10-06T08:28:52Z",
    "updated": "2026-10-06T08:28:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07954"
  },
  {
    "id": "2610.07948",
    "title": "Confidence Reasoning Graphs: Structured Confidence Estimation for LLM Agents",
    "authors": [
      "Brendan King",
      "Farima Fatahi Bayat",
      "Jean-Flavien Bussotti",
      "Pouya Pezeshkpour",
      "Estevam Hruschka"
    ],
    "abstract": "When using an LLM agent in a consequential domain, making an informed decision about whether to trust its output or intervene requires calibrated confidence in the agent's success. Confidence estimation for agents is difficult because evidence about success is distributed across heterogeneous, interdependent steps of an agent's trajectory. Practical agentic deployments introduce further challenges: frontier LLMs often provide limited access to internal signals, agent roll-outs are costly, and training data may be unavailable or quickly become outdated. To address these challenges, we introduce Confidence Reasoning Graphs (CRGs), an inference-time framework that estimates the probability an agent accomplished its task from a single trajectory, without privileged model access or training data. Rather than compressing an execution into a single holistic judgment, a CRG begins with the claim that the agent accomplished its task, decomposes it into contextualized sub-claims grounded in trajectory evidence, estimates confidence for each terminal claim, and finally aggregates these into an overall confidence estimate. Across three agentic benchmarks, three backbone models, and three agent frameworks, CRGs yield better-calibrated confidence and stronger risk-aware decision making than verbalized, sampling-based, and white-box surrogate baselines. We further find that calibration error alone can be misleading: a white-box surrogate baseline appears well calibrated while providing near-chance discrimination. Ablations attribute CRG's improvements to claim-level confidence estimation and aggregation rather than graph construction alone. Finally, a CRG exposes the claims and trajectory evidence underlying each confidence estimate, enabling it to be audited at decision time.",
    "published": "2026-10-06T08:22:14Z",
    "updated": "2026-10-06T08:22:14Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07948"
  },
  {
    "id": "2610.06582",
    "title": "Mind the Execution Gap: Action-Semantic Mismatch in World-Model Control",
    "authors": [
      "Shengtao Wen",
      "Xiang Chen",
      "Yu Tian",
      "Lingbing Guo",
      "Lina Gong",
      "Sheng-Jun Huang"
    ],
    "abstract": "World-model controllers rely on action-conditioned dynamics for prediction and planning, yet real control systems often execute commands asynchronously due to communication delay, packet loss, reordering, and actuator buffering. We study how asynchronous execution changes the action semantics assumed within world-model controllers, rather than treating it only as an external control disturbance. Through controlled interventions, we identify two architecture-dependent failure modes: planning-based controllers such as TD-MPC2 suffer from a future-action timeline mismatch between imagined and executed action sequences, while recurrent world models such as DreamerV3 can attribute observed transitions to commands that were not actually applied. Our analysis shows that TD-MPC2 requires the correct future action sequence during latent dynamics rollout, whereas DreamerV3 requires timely attribution of each transition to the action that generated it. Based on these findings, we introduce two lightweight execution-consistent interfaces, Future-Sequence for TD-MPC2 and Applied-Action Feedback for DreamerV3, that correct these mismatches without modifying the pretrained world models. Experiments across delays, packet loss, reordering, multiple control domains, measured network traces, and a process-separated asynchronous stack consistently support both diagnoses and the corresponding architecture-specific corrections.",
    "published": "2026-10-05T15:59:49Z",
    "updated": "2026-10-05T15:59:49Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06582"
  },
  {
    "id": "2610.06578",
    "title": "DGA-Muon: Decoupled Geometry-Aligned Adaptive Scaling for Muon",
    "authors": [
      "Wenpeng Zhang",
      "Runsheng Yu"
    ],
    "abstract": "While NorMuon has achieved strong empirical performance in pretraining, its underlying adaptive mechanism remains largely heuristic and poorly understood. In this work, we provide the first systematic theoretical analysis of NorMuon's adaptivity, revealing that it primarily arises from orthogonalization-induced geometry rather than genuine optimization dynamics, serving to offset the resulting geometric non-uniformity. Under exact orthogonalization, the adaptive scaling factors degenerate into a single global scalar for square and wide matrices, while for tall matrices their variation results from unevenly distributed row energy after orthogonalization. Under approximate orthogonalization, the orthogonality residuals introduce additional variation into the scaling, giving rise to a counterintuitive Orthogonalization--Adaptivity Paradox: more accurate orthogonalization weakens adaptivity. We further show that NorMuon's rigid row-wise scaling is geometrically misaligned with the one-sided orthogonal structure of tall matrices by distorting column orthogonality. Motivated by these limitations, we propose two core design principles that a desirable adaptive mechanism for Muon should satisfy. First, adaptive scaling should be decoupled from orthogonalization, with the scaling factors computed directly from raw gradients. Second, adaptive scaling should be aligned with the shape-dependent orthogonal structure of the polar factor, using row-wise scaling for wide matrices and column-wise scaling for tall matrices. We prove that this geometry-aligned scaling preserves the orthogonal structure of the update. By incorporating several other techniques, we obtain Decoupled Geometry-Aligned Muon (DGA-Muon). We establish convergence guarantees for DGA-Muon and empirically validate both our theoretical characterization of NorMuon's scaling degeneration and the superiority of DGA-Muon.",
    "published": "2026-10-05T15:56:02Z",
    "updated": "2026-10-07T11:39:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06578"
  },
  {
    "id": "2610.06575",
    "title": "FrontVeg V2: A Training-Free Software Framework for Foreground-Aware Zero-Shot Plant Trait Segmentation in High-Resolution Images of Trellised Crops",
    "authors": [
      "Abdoul Djalil Ousseini Hamza",
      "Herearii Metuarea",
      "Corentin Lothod{é}",
      "Morgane Roth",
      "Jacem Ben Hamden",
      "Eric Duch{ê}ne",
      "Lionel Ley",
      "David Alletru",
      "David Rousseau"
    ],
    "abstract": "FrontVeg V2 is an open-source, training-free software framework for foregroundaware zero-shot segmentation of plant traits in high-resolution images of trellised crops. The pipeline combines monocular depth estimation, automatic foreground extraction using Valley-Aware Depth Thresholding, tiled zero-shot segmentation, Graph-Based Mask Assembly, and geometry-aware fusion. This design enables plant organs and disease symptoms to be segmented while reducing detections arising from neighboring vegetation rows. The current implementation integrates Depth Anything V2 (DAV2) and SAM3 and can be used through both command-line batch processing and a Napari graphical interface. FrontVeg V2 provides a reusable framework for multi-crop, multi-trait digital phenotyping without task-specific model retraining.",
    "published": "2026-10-05T15:53:57Z",
    "updated": "2026-10-05T15:53:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.06575"
  },
  {
    "id": "2610.07111",
    "title": "LiLib: Lifelong Air-to-Ground Path-Loss Prediction on UAVs via a Drift-Triggered Model Library",
    "authors": [
      "Minh Tran"
    ],
    "abstract": "UAVs that act as relays or base stations need accurate air-to-ground path-loss predictions for rate adaptation and placement, but propagation conditions change as a UAV moves between suburban, urban and high-rise areas, and the same areas are often revisited. Online regressors that adapt by forgetting must relearn each environment from scratch, whereas a single model trained on all data averages incompatible regimes. We propose LiLib, a lightweight continual-learning scheme in which a UAV maintains a small library of recursive-least-squares experts. A windowed residual test detects drift; a short probe phase then either reuses the best stored expert or creates a new one. In simulations based on four standard urbanization profiles, LiLib reduces prediction RMSE from 5.89 dB (best sliding-window baseline) to 4.03 dB (p < 0.001), lowers the error shortly after a return to a known environment from 12.3 dB to 5.7 dB, and recovers 99% of the throughput of a regime-aware oracle in rate adaptation. The library stores four experts in under 0.5 KB, and identifies regimes with 92% purity without labels. When a second UAV is initialized with the library of a peer, its error after environment changes halves. LiLib does not reach the oracle, and similar regimes may be merged when shadowing is strong. The results indicate that, for recurring drift, remembering is more effective than re-adapting.",
    "published": "2026-10-05T15:53:19Z",
    "updated": "2026-10-05T15:53:19Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07111"
  },
  {
    "id": "2610.06571",
    "title": "BrainTRACE: Tracing Longitudinal, Multimodal, and Volumetric Evidence in Brain MRI Clinical Reasoning",
    "authors": [
      "Qizhen Lan",
      "Mengchen Fan",
      "Hang Zhang",
      "Jingwei Duan",
      "Moule Lin",
      "Jialin Chen",
      "Baocheng Geng",
      "Xiaoqian Jiang"
    ],
    "abstract": "Brain MRI interpretation is a longitudinal clinical reasoning problem: radiologists compare serial studies, integrate information across MRI sequences, localize findings within volumetric anatomy, and translate this evidence into report-grounded assessments. Existing medical VQA and 3D imaging benchmarks capture important parts of this workflow, but often evaluate brain MRI through isolated images, static volumes, or ungrounded report-style answers, thereby obscuring failures in the evidence chain that support clinical validity. We introduce BrainTRACE, a report-grounded benchmark for evaluating whether vision-language models can trace the evidence structure required for longitudinal brain MRI interpretation. BrainTRACE contains 7,273 scored VQA instances derived from 1,778 longitudinal patients, 7,299 MRI studies, and approximately 29k co-registered 3D MRI sequence volumes. The benchmark is organized by five levels of clinical reasoning, from acquisition recognition to case-level synthesis, and by evidence demands covering longitudinal comparison, report-grounded references, multi-sequence integration, and volumetric spatial evidence. BrainTRACE supports rendered inputs compatible with standard VLM interfaces, a 3D-evidence condition, and a decomposed case-reasoning track that audits six steps in a longitudinal evidence chain. Evaluation of 20 VLM configurations shows that current systems can identify isolated visual cues but rarely compose them into grounded longitudinal interpretations. We release the benchmark specification, evaluation lists, scoring implementation, scoring rubrics, and audit-record format to support reproducible progress in brain MRI VLM evaluation.",
    "published": "2026-10-05T15:52:37Z",
    "updated": "2026-10-05T15:52:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06571"
  },
  {
    "id": "2610.06563",
    "title": "HERA: Harness-Environment Co-Evolution for Reliable Agentic Abstention",
    "authors": [
      "Han Luo",
      "Bingbing Wen",
      "Guang Yang",
      "Zora Zhiruo Wang",
      "Pan Lu",
      "Lucy Lu Wang"
    ],
    "abstract": "Large language model (LLM) agents are increasingly capable of acting in complex tool-use environments, yet they often fail to recognize when tasks are infeasible and no valid solution exists. Recent work has formalized this reliability gap as the problem of agentic abstention, and existing approaches typically optimize a model or agent harness against a fixed set of tasks, leading to limited generalization to unseen failure modes. We introduce HERA, a framework for harness-environment co-evolution for agentic abstention. HERA consists of (i) a pipeline to automatically construct verifiable pairs of feasible and infeasible tasks by applying controlled environment mutations that transform solvable tasks into cases requiring abstention, and (ii) a co-evolution procedure in which performance failures on previous tasks are used to drive harness adaptation and generate new execution environments and tasks geared towards previous weaknesses. On held-out evaluation tasks, an evolved harness from HERA improves abstention accuracy from 61.7% to 83.3% while improving feasible-task completion from 68.3% to 76.7%, achieving the highest abstention and feasible-task completion among the compared methods. The resulting best harness transfers across 19 other LLMs, improving abstention accuracy by 15.3 percentage points on average without any model-specific optimization, and enabling smaller models to match the performance of more powerful models at an estimated 85% lower cost.",
    "published": "2026-10-05T15:49:12Z",
    "updated": "2026-10-05T15:49:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06563"
  },
  {
    "id": "2610.07110",
    "title": "MoonGS: High-quality Representation of the Lunar Surface via Gaussian Splatting Using Robust Depth Features from Image Pairs",
    "authors": [
      "Yun Jiang",
      "Bo Zheng",
      "Yingying Zhang",
      "Xueming Xiao",
      "Tao Hu",
      "Hutao Cui",
      "Zhiguo Meng",
      "Ke Gao",
      "Yang Gao",
      "Meibao Yao"
    ],
    "abstract": "High-quality 3D reconstruction of lunar terrain from sparse rover images is indispensable for autonomous lunar exploration, but remains challenging because viewpoint overlap is insufficient, surface textures are weak, and data volume is limited. We propose MoonGS, the first feed-forward 3D Gaussian Splatting framework tailored to lunar scenes. Given only two input images, MoonGS predicts pixel-aligned Gaussian primitives in a single forward pass and renders photorealistic novel views without any per-scene optimization. MoonGS (i) adopts an adaptable backbone design that seamlessly integrates advanced vision foundation models to extract robust depth features; (ii) integrates semantic priors in two manners: merging semantic cues with visual features to refine Gaussian parameter estimation, and adopting a semantic ranking loss that regularizes background depth; and (iii) employs an entropy-guided heuristic resampling strategy to augment sparse observations by selecting the most informative distant viewpoints with negligible overhead. Experiments on the LuSNAR benchmark and our synthetic weak-texture MoonBlender dataset show that MoonGS surpasses state-of-the-art feed-forward NeRF/3DGS baselines by +4.9 dB PSNR, +0.29 SSIM, and 40\\% lower LPIPS while maintaining sub-second inference. Furthermore, we validate the broad applicability of our framework by demonstrating that it effectively leverages state-of-the-art backbones, including VGGT, to significantly boost performance. Qualitative evaluations on Chang'e mission imagery also show the best visual quality among compared methods, indicating robustness on real lunar data. The source code and dataset are publicly available at https://github.com/InRobots/MoonBlender.",
    "published": "2026-10-05T15:46:50Z",
    "updated": "2026-10-05T15:46:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07110"
  },
  {
    "id": "2610.06553",
    "title": "Signature-Based Feature Learning for Human Activity Recognition: A Reproducible Machine Learning Study of Representation, Depth, and Model Choice",
    "authors": [
      "Kamal Jarrar",
      "Jacky Cresson",
      "Christian Paroissin"
    ],
    "abstract": "Human activity recognition (HAR) relies on transforming sensor signals into informative representations for classification. Although deep learning and handcrafted features are widely used, the role of representation itself is often not systematically isolated. Signature transforms provide a mathematically grounded way to encode temporal order and cross-channel interactions, but their value for HAR under a fully reproducible and leakage-aware framework remains unclear. To evaluate whether signature-based feature learning improves HAR performance compared with raw-signal baselines, and to assess the effects of embedding strategy, truncation depth, model choice, and sensor configuration. Experiments were conducted on the UCI HAR dataset using a fully reproducible pipeline with the original train--test split preserved and subject-disjoint validation to prevent leakage. Three representations were compared: raw flattened signals, time-augmented paths, and lead--lag transformed paths. Signature features were computed at multiple truncation depths and evaluated using multilayer perceptron (MLP) and Random Forest (RF) classifiers under identical preprocessing and validation procedures. A prior K-means-based feature reduction study was also reproduced for comparison. Signature-based representations improved performance when paired with RF models, the best configuration was time-augmented six-channel signatures at depth 6 using entropy-based RF achieving 0.858 accuracy and 0.859 macro F1, outperforming the strongest raw baseline (0.816 accuracy). Lead--lag representations were competitive at moderate depths but did not surpass the best time-augmented models. MLP models did not exceed raw baselines. Signature-based feature learning can improve HAR, but its benefit depends on alignment between representation design and classifier choice.",
    "published": "2026-10-05T15:44:23Z",
    "updated": "2026-10-05T15:44:23Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06553"
  },
  {
    "id": "2610.06549",
    "title": "Proof-Grounded Patient-Specific Clinical Explanations from Knowledge-Graph Reasoning",
    "authors": [
      "Surajit Das"
    ],
    "abstract": "Clinical decision-support outputs can lack an au- ditable link between patient observations, encoded knowledge, conclusions, and recommendations. We present the CKG Clinical Explanation Engine, a downstream layer for a frozen, training-free clinical knowledge-graph reasoner that converts patient inference states and disease knowledge into typed facts, explicit rule-application traces, provenance-linked conclusions, and policy-licensed recommendations. The design separates measurement availability, representation completeness, and disease-specific activation; consequently, observed zero-activation evience is not treated as missing and partial representation is distinct from unobserved evidence. Optional language generation is restricted to symbolically licensed content. Across five usable workbooks (6,720 patients; 20,160 patient-disease traces; 1,021,440 feature-evidence rows), IG-range validity and knowledge provenance were 100%, numerical cross-sheet fidelity was 100% (120,960/120,960), and exported logical/report trace completeness was 100% (20,160/20,160). Availability representation consistency was 99.7028% (1,018,404/1,021,440); all 3,036 disagreements were confined to three systematic feature-cohort patterns. The corpus contained 86,783 observed zero-activation and 139,949 observed partially represented instances. A separate seeded 25-patient end-to-end audit completed without execution failure and passed all pre-specified trace, licensing, provenance, and state-consistency checks. These results establish structural and implementation auditability, not clinical correctness or utility.",
    "published": "2026-10-05T15:41:31Z",
    "updated": "2026-10-05T15:41:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06549"
  },
  {
    "id": "2610.06535",
    "title": "Symmetry and AI-assisted discovery of magic-state factories",
    "authors": [
      "Shubham P. Jain",
      "Adam Wills",
      "Shraddha Singh"
    ],
    "abstract": "Magic-state distillation is a major resource cost in fault-tolerant quantum computing. The cost of a magic-state factory depends strongly on its failure rate, which grows with the number of input magic states. Although symmetry-restricted methods have recently made distance two searches tractable, distance three and above have remained elusive at moderate input counts. We develop symmetry- and AI-assisted methods to search this regime. We present a unified binary-matrix formulation encompassing both triorthogonal-code and direct circuit searches. We show that distance at least three is equivalent to nonzero, pairwise distinct syndromes, separating the choice of syndromes from the search for compatible output gates. We restrict the syndrome search using group symmetry and language-model agents, followed by deterministic solving and independent verification. Our searches yield 699 factory classes, including 564 new ones. These include factories for pure-T states and factories with entangled outputs comprising combinations of T, CS, and CCZ magic states. The pure-T factories [[63, 11, 3]] and [[850, 128, 6]] achieve the lowest overhead exponents we know among protocols with at most 100 and 1000 inputs, respectively, with $γ= 1.589$ and $γ= 1.057$. Our [[1715, 287, 6]] factory, with $γ= 0.998$, is the smallest known pure-T factory with $γ< 1$. We also provide a context directory of search briefs and campaign notes with which readers can train their own agents and tailor the search to their requirements. With these results, we begin constructing an active, open-source repository of magic-state distillation protocols for the quantum community, supplemented by our methods and data, for the practical fault-tolerant quantum computing regime.",
    "published": "2026-10-05T15:36:37Z",
    "updated": "2026-10-05T15:36:37Z",
    "categories": [
      "quant-ph",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.06535"
  },
  {
    "id": "2610.06532",
    "title": "AICoFe Demo: AI-based Collaborative Feedback System",
    "authors": [
      "Alvaro Becerra",
      "Alejandra Palma",
      "Ruth Cobos",
      "Julian Fierrez"
    ],
    "abstract": "Peer feedback promotes active learning, critical reflection, and skill development, but its effectiveness is often limited by the quality of feedback students provide. Recent advances in LLMs offer new opportunities to support peer feedback by generating more coherent and actionable feedback while preserving human oversight. This paper presents AICoFe, an AI-based collaborative feedback system designed to support teacher, peer, and self-assessment in higher education. AICoFe integrates rubric-based evaluations, GenAI-supported feedback, Learning Analytics dashboards, and video recordings to foster reflective learning. The system combines quantitative scores and qualitative observations to generate structured feedback focused on strengths, areas for improvement, and actionable recommendations, which teachers can review and curate. An evaluation with 65 undergraduate and master's students shows high satisfaction with the coherence and usefulness of the feedback, as well as the excellent usability, indicating that AICoFe effectively supports peer feedback in authentic educational settings.",
    "published": "2026-10-05T15:35:09Z",
    "updated": "2026-10-05T15:35:09Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.06532"
  },
  {
    "id": "2610.06522",
    "title": "Anatomy of LLM Sycophancy: What a Flip Rate Hides",
    "authors": [
      "Haonan Huang"
    ],
    "abstract": "A model under pushback can correct itself, capitulate, or hold, and one flip rate counts a correction and a capitulation alike. Using SycoLens, a modular replay protocol, we test how user pressure and evaluation settings shape measured flip rates. Each measurement is one stateless replay of an item, a committed answer, and one scripted user line in a fixed form. Every effect is read against a matched control with the line deleted. Pushback wording, committed text, answer format, boundary distance, and ground truth become factors of one instrument; earlier instruments vary one to three of them. Across eleven frontier models from three providers and about 760,000 controlled replays, which models look sycophantic depends on how the user pushes back. Lines that assert the opposite verdict and lines that challenge the answer without asserting one rank the models almost unrelatedly. Flip effects grow several-fold near a model's boundary, yet items answered identically in every screening draw still carry about half of the most-affected totals. On arithmetic tasks where the truth is known, one model re-derives and corrects itself under pressure while another abandons correct answers without written work. On the model tested, a planted derivation lowers release of the answer it argues for, true or wrong, where a bare stated value does not; the wrong answer is corrected much more often than the true one is abandoned. Under a yes/no readout the rankings come closer, entangled with a pressure-induced shift toward \"no\". One score per model therefore compares different behaviours across models and benchmarks. We condense these dependencies into a reporting profile; the instrument, records, and analyses will be released upon publication.",
    "published": "2026-10-05T15:32:45Z",
    "updated": "2026-10-05T15:32:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06522"
  },
  {
    "id": "2610.05076",
    "title": "Self-Generated Feedback Destabilizes Test-Time Training: A Causal Decomposition of Long-Horizon Adaptation",
    "authors": [
      "Cheng Luo",
      "Bing Li",
      "Bernard Ghanem"
    ],
    "abstract": "Test-time training (TTT) lets a model store information in its weights during inference. When the model learns from its own output, however, each update also changes the model that generates the next training example. Across 128K-token streams, retaining generated-text updates worsens prediction on independent human-written text with three TTT-E2E model configurations (labeled 125M, 760M, and 3B). The same failure occurs when Adam updates Qwen3-4B's existing weights. The same update mechanisms can improve on real text, so writing itself is not the failure. Three matched comparisons trace the causal pathway. Fixed Generation removes over 98% of the damage at 125M and 760M by using a frozen model to generate training chunks. Recorded Replay separates the loss caused by reading degraded text from the additional loss stored by updating on it. A paired one-update comparison then shows the local conflict: an update predicts its source better but new real text worse. This cost grows after Closed Loop adaptation, with a few trajectories accounting for most large failures. Finally, Settlement evaluates the candidate state on independent real text before commitment. It leaves mean endpoint gaps of 0.07 and -0.02 nats at 125M and 760M while retaining real-text adaptation. These results motivate checking prediction on independent evidence before retaining an update.",
    "published": "2026-10-04T09:21:14Z",
    "updated": "2026-10-04T09:21:14Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05076"
  },
  {
    "id": "2610.05071",
    "title": "Discrete Action Matching: Learning Stochastic Dynamics from Samples via State Graphs",
    "authors": [
      "Mikhail Persiianov",
      "Alexander Korotin"
    ],
    "abstract": "Learning population dynamics from unpaired temporal marginals is an ill-posed inverse problem that requires structural assumptions on the underlying dynamics. We introduce $\\textit{Discrete Action Matching}$ (DAM), a finite-state counterpart of Action Matching based on discrete Wasserstein geometry. For a prescribed marginal path and transport geometry, we derive an action-minimization objective for its canonical minimum-kinetic-energy current. Our key observation is that the density dependence of the discrete action reduces to neighboring density ratios. Along an empirical interpolation of the snapshots, DAM first estimates these ratios and then learns an action potential. The learned fields also define a graph-supported Markov sampler. Experiments on controlled synthetic dynamics and real mouse gastrulation data evaluate marginal reconstruction and interpolation. Additional experiments approximate numerical surface-transport paths from paired samples.",
    "published": "2026-10-04T09:13:33Z",
    "updated": "2026-10-04T09:13:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05071"
  },
  {
    "id": "2610.05066",
    "title": "Salvation Lies Within: Eliciting Inherent Style Transfer in Step-Distilled Diffusion Models",
    "authors": [
      "Shengyin Sun",
      "Yiming Li",
      "Yingzhao Lian",
      "Xing Li",
      "Xingzhi Zhou",
      "Anxin Tian",
      "Zhili Wang",
      "Haoyang Li",
      "Ziqiang Cui",
      "Chen Ma"
    ],
    "abstract": "Adapting step-distilled text-to-image (T2I) models through post-training incurs additional computational costs and affects native few-step generation behavior. This motivates a complementary route beyond style-specific adaptation: drawing on the visual knowledge already encoded in step-distilled T2I models to elicit stylistic capabilities through language. Pursuing this direction requires textual guidance that captures how visual attributes jointly define a style and remain applicable as the depicted content changes. To explore this approach, we introduce StyleForge, a fully automatic, training-free framework that expresses reference styles as reusable rendering instructions. By integrating overall rendering characteristics with local color and lighting behavior, StyleForge organizes visual evidence from reference images into a coherent specification of how the target style should be expressed. The specification is then compiled into textual guidance that can be reused across content prompts, enabling frozen step-distilled T2I models to render different subjects and scenes in the reference style while retaining native few-step generation. Extensive experiments show relative gains of up to 29.47\\% in generation quality scores over the strongest baseline, while Pareto analysis indicates that improved stylization is accompanied by strong adherence to the requested content.",
    "published": "2026-10-04T09:06:57Z",
    "updated": "2026-10-04T09:06:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05066"
  },
  {
    "id": "2610.05060",
    "title": "Why, Where, How: Taxonomy-guided Error Grounding for Code Repair in NL2SQL",
    "authors": [
      "Suchan Lee",
      "Woomin Song",
      "Hwanjo Yu",
      "Sangwoo Mo"
    ],
    "abstract": "SQL queries that large language models write from natural language questions can execute successfully yet produce incorrect results, so execution alone does not reveal what to fix. An error taxonomy says why the query is wrong, but not where to look or how to change it. Existing methods can guide SQL correction through feedback, error reports, or generated plans alongside an unmasked query. We introduce TEG(Taxonomy-guided Error Grounding), which turns a supplied diagnosis into a structured correction input for natural language-to-SQL (NL2SQL) correction. Type-specific rules map each error type to construct classes to reconsider and an edit operation to request. TEG masks the selected constructs in the query when applicable and states that operation in an edit instruction. TEG generates candidate corrections from this input, uses execution feedback to guide candidate selection, and repeats the process one annotation at a time for queries with several errors. On NL2SQL-BUGs, TEG reaches 47.3 single-error execution accuracy and 37.0 overall with Qwen2.5-7B-Instruct. Across the model sizes and thinking modes evaluated in the main comparison, TEG outperforms all evaluated baselines on single-error queries, even when the baselines receive the same error-type annotations. With predicted types, TEG stays above direct LLM correction and ErrorLLM on single-error queries.",
    "published": "2026-10-04T09:04:33Z",
    "updated": "2026-10-04T09:04:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05060"
  },
  {
    "id": "2610.05053",
    "title": "CoDG-Net: Structure-Guided Style Diffusion and Collaborative Learning to Mitigate Catastrophic Forgetting in Medical Image Domain Generalization",
    "authors": [
      "Yucheng Song",
      "Jincan Wang",
      "Haokang Ding",
      "Zhiqiang Tian",
      "Kangxu Fan",
      "Zhifang Liao"
    ],
    "abstract": "Domain Generalization (DG) for medical image segmentation is both highly challenging and critically important. However, existing medical DG methods largely overlook the issue of Catastrophic Forgetting (CF): \\textbf{Models often sacrifice their ability to retain source-domain knowledge while pursuing cross-domain robustness.} This can directly threaten diagnostic safety in already-deployed clinical scenarios. To address this, we investigate data augmentation strategies and catastrophic forgetting for medical image DG segmentation. First, we propose a structure-guided style diffusion augmentation method. Constrained by anatomical structure consistency in the frequency domain, this method performs cross-domain diffusion on the amplitude spectrum, generating samples with more diverse and broader style coverage to better support domain generalization. Then, we design a collaborative learning network with a dual-branch interactive architecture (CoDG-Net), together with a novel learning bias-guided strategy that adaptively regulates knowledge transfer at both the layer level and the task level, thereby effectively mitigating catastrophic forgetting on the source domain. Experiments and ablation studies on single-source and multi-source medical DG benchmark datasets demonstrate that CoDG-Net not only outperforms existing state-of-the-art methods in target-domain segmentation performance, but also achieves a lower forgetting rate on the source-domain data. The code is available at: https://github.com/wangprocess/CoDG-Net.",
    "published": "2026-10-04T08:43:24Z",
    "updated": "2026-10-04T08:43:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05053"
  },
  {
    "id": "2610.05051",
    "title": "LogSig-SSM: Time-Series Modelling with Multi-Scale Log-Signature Compression for State-Space Models",
    "authors": [
      "Felix Oury",
      "Nicolas Calvo Peiro",
      "Reiko J. Tanaka"
    ],
    "abstract": "Time-series data are often sampled irregularly at high frequencies and exhibit long-range dependencies, which makes long-horizon modelling difficult. Continuous-time models such as neural controlled differential equations (NCDEs) and neural rough differential equations (NRDEs) can handle irregular sampling, but they scale poorly to long sequences. Selective state-space models (SSMs) such as Mamba scale linearly with sequence length, but they provide limited recurrent mixing across hidden dimensions within a single block. We propose LogSig-SSM (Log-Signature Compression for State-Space Models), which first compresses long multivariate time series into a shorter sequence of tokens using multi-scale windowed log-signatures, and then processes these tokens with a selective SSM backbone. LogSig-SSM is scalable and robust to irregular sampling, combining log-signature tokens that capture higher-order cross-channel interactions with a selective SSM that models long-range dependencies. The model also admits a continuous-time interpretation as an NCDE/NRDE-style system driven by a log-signature-based input, in which selectivity induces an input-dependent rescaling of the latent dynamics. Across four benchmarks, namely long-sequence classification on UEA, high-frequency physiological regression on PPG-DaLiA, multivariate weather forecasting, and irregularly sampled clinical prediction on PhysioNet Sepsis, LogSig-SSM outperforms or matches strong SSM and continuous-time baselines while training up to $30\\times$ faster and using up to $37\\times$ less GPU memory than Mamba on the longest sequences.",
    "published": "2026-10-04T08:41:36Z",
    "updated": "2026-10-04T08:41:36Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05051"
  },
  {
    "id": "2610.05048",
    "title": "E$^2$-OPSD: Taming Entropy Overshoot in On-Policy Self-Distillation",
    "authors": [
      "Yifei Liu",
      "Minghao Fang",
      "Xinyu Gu",
      "Chengkai Yao",
      "Mengdi Liu",
      "Tengfei Ma",
      "Jiangbin Zheng",
      "Chang Yu",
      "Zhangyang Gao"
    ],
    "abstract": "On-policy self-distillation (OPSD) provides dense token-level supervision without a second model: one network acts as teacher with the reference solution and as student with only the problem. We identify a specific failure mode of this recipe. During training, student token entropy rises past the teacher's and remains elevated, a pattern we call entropy overshoot. We trace it to both sides of distillation. The reference-conditioned teacher is confident along its answer-directed reasoning path, but this confidence transfers poorly to student-generated prefixes, making its supervision overly tied to answer-specific cues rather than reusable reasoning patterns; meanwhile, the forward KL used by OPSD continually diffuses the student's predictive distribution without pulling it back. We introduce E$^2$-OPSD to address both causes. Exemplar-guided teaching replaces the current answer with a retrieved solved neighboring problem, providing transferable reasoning guidance without revealing the destination and better matching student-reachable states. Entropy-aware distillation uses the student-teacher entropy gap to determine the direction and strength of each token's correction. E$^2$-OPSD improves math reasoning by up to 4.3 points in mean@16 over OPSD, while out-of-domain evaluations show gains over the corresponding base models of up to 4.9 points in mean@16 and 5.5 points in pass@8. Despite these gains, E$^2$-OPSD remains simple, requiring no additional forward passes or networks.",
    "published": "2026-10-04T08:32:33Z",
    "updated": "2026-10-06T02:10:14Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05048"
  },
  {
    "id": "2610.05044",
    "title": "AraYoungVoices: A Diverse L1/L2 Corpus of Arabic Child and Adolescent Speech",
    "authors": [
      "Shammur Absar Chowdhury",
      "Zien Sheikh Ali",
      "Houssam Eddine-Othman Lachemat",
      "Hamdy Mubarak"
    ],
    "abstract": "State-of-the-art ASR systems primarily target native adult speech, leading to substantial performance gaps for children, adolescents, and L2 speakers. We introduce AraYoungVoices, a 151.72-hour Arabic read-speech corpus from 286 speakers aged 7--18, comprising AraKids (7--12) and AraTeens (13--18). The corpus includes 146 native Arabic (L1) and 140 second-language (L2) speakers, with native speakers spanning Egyptian, Gulf, Levantine, and North African dialectal backgrounds and L2 speakers representing diverse linguistic backgrounds across the Americas, Asia, Africa, and Europe. We benchmark four pretrained ASR models under zero-shot and fine-tuned settings using unseen-speaker-$\\&$-unseen-prompt (USUP) and unseen-speaker-$\\&$-seen-prompt (USSP) evaluations. Results show that L2 speech remains substantially more challenging than L1 speech, with the largest errors observed mainly for younger L2 speakers. Age-specific fine-tuning improves the matched age group, while joint fine-tuning provides a stronger balance across populations. ASR hypotheses are also consistently closer to the standard reading prompt than to the verbatim transcription, particularly for L2 speech, suggesting partial normalization of reading deviations.",
    "published": "2026-10-04T08:25:30Z",
    "updated": "2026-10-04T08:25:30Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.05044"
  },
  {
    "id": "2610.05043",
    "title": "CI-JEPA: A Counterfactual Analysis of Latent Representations in Joint-Embedding Predictive Architectures for Self-Supervised Learning",
    "authors": [
      "Mintu Dutta",
      "Ritesh Vyas",
      "Mohendra Roy *"
    ],
    "abstract": "Self-supervised visual representation learning learns useful features without manual annotations during representation training. The image-based joint-embedding predictive architecture (I-JEPA) predicts latent representations of masked image regions, but its objective does not explicitly model responses to specified visual interventions. We introduce CI-JEPA, a counterfactual intervention-aware extension that learns to predict the representation change $ΔZ = Z_{\\mathrm{CF}} - Z$ between an original image and a modified counterpart. We assess representation robustness through selective sensitivity: stronger responses to task-relevant semantic changes than to nuisance changes. Experiments on Flowers102 use flower-center occlusion as a candidate semantic intervention and background blur and tint as candidate nuisance interventions. With frozen-encoder linear probing, CI-JEPA achieves a best validation accuracy of 78.14\\%, compared with 77.55\\% for both the pretrained ViT-B/16 and the I-JEPA baseline, a gain of 0.59 percentage points. The reported mean $L_2$ representation changes are 4.42 for center occlusion, 3.48 for background tint, and 2.83 for background blur. This ordering is consistent with relative semantic selectivity for the evaluated interventions, rather than complete nuisance invariance. The accuracy comparison is complementary and does not establish improved robustness over the baselines. These controlled image modifications provide a framework for studying intervention-induced changes in JEPA representations; they do not establish causal feature discovery or robustness to all visual changes.",
    "published": "2026-10-04T08:22:58Z",
    "updated": "2026-10-04T08:22:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05043"
  },
  {
    "id": "2610.05041",
    "title": "Communication Shapes Collective Inference in Self-Adapting LLM Societies: Evidence from Mafia",
    "authors": [
      "Haonan Huang",
      "Joey Xiao"
    ],
    "abstract": "When does communication help a group identify hidden adversaries, and how does its value change as the group adapts? In Mafia, an informed minority hides inside an uninformed majority whose only evidence is open play. The zero-information game, where each day's vote eliminates a random player, is exactly solved and scores every society; matched-casting comparisons between protocols identify the effect of communication. Societies of 8-100 claude-haiku-4-5 agents (7,416 analyzed games, 1.9M model calls) adapt by rewriting and inheriting private strategy notes. Simultaneous broadcast improves adversary identification over silence in all nine compositions tested (8-46 players). Turn-taking removes most of this advantage; its voting landslides are as frequent as broadcast's but land on mafia near chance (1.08x versus 2.53x). At 70 players, agents reading eight statements per day identify adversaries worse than silent ones, and limited talk is worth less than at 46 players. Adaptation is fast but need not help. In their first broadcast games, citizens announce their role far more often than mafia (91% vs. 30%) and first-day votes find mafia at three times chance; within two generations citizens stop announcing and the cue fades, a change the inherited notes carry. In controlled redeployments at 16 players, societies carrying sixty generations of their own notes score below societies with none. Communication shapes both collective inference and the signals it depends on, so a protocol's value must be measured together with the adaptation that changes those signals.",
    "published": "2026-10-04T08:19:20Z",
    "updated": "2026-10-04T08:19:20Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.05041"
  },
  {
    "id": "2610.05037",
    "title": "SparseCraft: Agentic Hardware-Software Co-Optimization for Sparse Computing",
    "authors": [
      "Rajatabha Chakraborty",
      "M P Samartha",
      "Vedant Pahariya",
      "Priyesh Shukla"
    ],
    "abstract": "Sparse-accelerator design spaces are usually searched against analytical models, so a design point is admitted on what a model predicts rather than on what the hardware does. SparseCraft closes that gap with a language model inside a closed CHIA loop. In each of 15 iterations the model reads the measured outcome of the previous one and edits the Chisel RTL, the memory configuration and the sparse-kernel schedule of a Gemmini accelerator through MCP tool servers, and no candidate counts until it has been checked for legality, elaborated, simulated cycle-accurately, checked bit-for-bit on every output against a golden reference, and synthesised. The harness turns each measurement into the next work order, a diagnosed bottleneck with matching strategy guidance, the history of tried designs and a score of the model's own prediction, and a second model repairs changes that fail a gate. On a $512 \\times 512$ GraphChallenge sparse-DNN layer the loop reaches 2.1x fewer cycles, 9.8x less off-chip traffic and 22.8% less area than the block-sparse Gemmini baseline, with 5.61x higher modelled perf/W and 11.8x lower EDP. The levers span three layers: a schedule that keeps the dense operand resident removes 9.8x of the traffic, a zero-gated MAC and a zero-row skip unit that the model wrote in Chisel cut energy, and resizing the memories cuts area.",
    "published": "2026-10-04T08:06:35Z",
    "updated": "2026-10-04T08:06:35Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05037"
  },
  {
    "id": "2610.05033",
    "title": "Code2Games: Enabling Coding Agents for Gaming World Generation",
    "authors": [
      "Wei Wu",
      "Ziyang Xu",
      "Zeyu Zhang",
      "Yang Zhao",
      "Hao Tang"
    ],
    "abstract": "Generating a high-quality gaming world from a natural-language game intent requires joint reasoning about scene structure, spatial layout, gameplay objectives, interactive entities, and executable gameplay logic. Existing coding agents can generate individual assets, scenes, or scripts, but often struggle to maintain consistency across these components. We propose Code2Games, an agentic framework that builds a structured gaming world upon a base Blender world generated from the same game intent. Code2Games coordinates scene analysis, gameplay planning, constrained gaming-world generation, and gaming-engine customization through a shared scene-gameplay representation with persistent element correspondence. After world generation, Code2Games adapts the generated world to Unreal Engine 5 and employs an execution-guided reconstruction process that uses compilation diagnostics, runtime feedback, and gameplay test results to resolve inconsistencies arising during engine adaptation. To systematically evaluate gaming-world generation, we introduce the GameCode4D benchmark, which comprises ten fixed game prompts spanning different levels of scene and gameplay complexity. We evaluate the generated results across four dimensions: visual quality, interactive fidelity, multimodal artifact quality, and playable-game quality. Experiments demonstrate that, compared with direct gaming-world generation by coding agents and existing baseline methods, Code2Games consistently improves the visual quality and interactive fidelity of generated gaming worlds, as well as the quality of the resulting games after engine adaptation.",
    "published": "2026-10-04T07:54:45Z",
    "updated": "2026-10-04T07:54:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05033"
  },
  {
    "id": "2610.04528",
    "title": "Quantifying Collusion Among Autonomous LLM Agents: A Statistical Analysis of the Collusion Wiki Incident",
    "authors": [
      "Shariq Murtuza"
    ],
    "abstract": "In August and September 2026, independent researchers publicly documented an unusual incident: thousands of autonomous agents, self identifying as OpenAI models on web research tasks, discovered and began using a small German wiki as an improvised message board posting roughly 18,000 times over six weeks to relay task answers, share a sandbox escape technique, and coordinate against a volunteer human moderator who spent weeks manually deleting their content [1]. The investigators' public writeup is a careful qualitative account, rich with direct quotation, but does not attempt a statistically rigorous quantitative characterization of the behaviour it documents.",
    "published": "2026-10-03T13:46:42Z",
    "updated": "2026-10-03T13:46:42Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.04528"
  },
  {
    "id": "2610.04526",
    "title": "Diffusion-Based Stress Testing of Overload Monitoring for Resilient Emergency Cellular Networks Using Internet CDR Proxies",
    "authors": [
      "Bilal Hussain",
      "Xiao Tang",
      "Tan Li",
      "Muhammad Azhar",
      "Danista Khan",
      "Fawad Ahmad"
    ],
    "abstract": "Disasters can overload cellular control-plane signaling within minutes, yet fine-grained Radio Resource Control (RRC) or Next Generation (NG) Application Protocol (NGAP) telemetry is privacy-sensitive and costly to collect for analytics. Many emergency monitoring pipelines therefore rely on coarse Call Detail Record (CDR) aggregates. We treat Internet activity in CDR grids as a practical proxy for hidden signaling stress under that constraint. We train a lightweight convolutional neural network (CNN) on stylized overload injections, stress-test it with diffusion-synthesized surges that preserve normal traffic structure, and adapt the detector by retraining on hard synthetic samples. Under stress-test conditions, the default alert threshold fails even though receiver operating characteristic (ROC) curves stay strong: the detector still assigns overloaded cells a larger overload probability than normal cells, but those probabilities fall below the default cutoff 0.5 and are labeled normal, so the F1-maximizing threshold -- selected post hoc on the same stress-test grids (oracle $τ^*$) -- shifts by $0.32 \\pm 0.03$ (operating-point drift). Across three random seeds, hard-sample adaptation raises thresholded performance (F1) from 0% (no alerts at the default cutoff 0.5 on any seed) to $85.67 \\pm 14.37$% and ranking from ROC-AUC $0.886 \\pm 0.040$ to $0.99996 \\pm 0.00007$. Diffusion-synthesized surges expose threshold fragility that matched-condition training -- training and testing on the same stylized injections -- hides, and hard-sample adaptation restores usable alerts at the default cutoff. Together, these steps define a reusable pre-deployment stress test for emergency monitors. Internet-only CDR input further supports lightweight AI-native workflows that combine monitoring, recalibration, and adaptation.",
    "published": "2026-10-03T13:46:27Z",
    "updated": "2026-10-03T13:46:27Z",
    "categories": [
      "cs.NI",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04526"
  },
  {
    "id": "2610.04517",
    "title": "EvoCast: Reliable Autonomous Research Agents for Iterative Forecasting Architecture Evolution",
    "authors": [
      "Kaipeng Xu",
      "Xianli Yan",
      "Yan Wang",
      "Xiang Liu",
      "Shan Liu"
    ],
    "abstract": "Deep time-series forecasting models have rapidly diversified, yet adapting them to a specific task still requires extensive expert effort in model selection, mechanism diagnosis, architecture design, implementation, and evaluation. Existing AutoML methods are constrained by predefined search spaces, while general-purpose LLM research agents lack reliable control over experimental protocols and model promotion. We introduce EvoCast, a fully autonomous research-agent system for iterative forecasting architecture evolution. EvoCast first establishes and diagnoses a task-specific baseline through executed mechanism ablations, then generates evidence-grounded research directions from dataset characteristics, diagnostic results, prior rounds, and failure records. Its central design, cognition-authority separation, assigns open-ended hypothesis generation and code implementation to LLM agents, while deterministic program authorities control source-edit boundaries, canonical evaluation, and promotion decisions. Experimental outcomes are accumulated as evidence to guide subsequent rounds. Results show that EvoCast completes complex architecture modifications with higher implementation success and lower agent-side token/time cost, and develops task-specific architectures that outperform selected baselines, strong forecasting models, and agent baselines in three real-world forecasting cases. The code is available at https://github.com/18e0-x/EvoCast.",
    "published": "2026-10-03T13:30:53Z",
    "updated": "2026-10-03T13:30:53Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04517"
  },
  {
    "id": "2610.04515",
    "title": "Towards Credible Agent-Based Policy Simulations: Disentangling Opportunities and Preferences in a Financial Inclusion Case Study of Egypt",
    "authors": [
      "Alba Aguilera",
      "Georgina Curto",
      "Nardine Osman",
      "Ahmed Al-Awah"
    ],
    "abstract": "Credibility is a central topic for agent-based models intended to support policy-making. Simulations must not only represent the target scenarios and their core dynamics but also demonstrate that their assumptions, parameters, and outputs are empirically grounded and sufficiently accurate for their intended use. This paper addresses this challenge by presenting a general modelling framework, aligned with the Capability Approach, for building credible policy simulations that rely on data and domain-expert knowledge. It then demonstrates how it can be contextualised and implemented to study the social challenge of financial inclusion in Egypt, building on an agent-based model that represents heterogeneous individuals and firms behaving according to their financial states, barriers, opportunities, and preferences. The model is fitted to real-world data in two stages, initialisation and calibration, which respectively build representative synthetic populations and estimate behavioural parameters. By fixing the feasibility parameters, which determine agents' opportunities, and calibrating preference parameters across different population groups, we are able to distinguish and analyse the role of institutional and social barriers in the system, as well as the role of agents' motivations and priorities. This calibration stage provides transparent and group-specific hypotheses about the drivers of observed financial-inclusion gaps, which can further be analysed as gaps between agents' opportunities and realised outcomes, a very relevant insight for policy-making. This paper is thus a step towards improving the credibility and usefulness of policy simulations, strengthening the relationship between the model, the real target system, and the stakeholders who will use it. The code is available at: \\url{https://www.comses.net/codebase-release/df8383cb-f49b-4f09-8cce-73603b59adcc/}.",
    "published": "2026-10-03T13:26:06Z",
    "updated": "2026-10-03T13:26:06Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.04515"
  },
  {
    "id": "2610.04510",
    "title": "ManifoldCache: Training-Free Diffusion Acceleration via Constraint Manifold Caching",
    "authors": [
      "Prashant Pandey",
      "Devineni Sri Venkatraya Chowdary",
      "Brejesh Lall"
    ],
    "abstract": "Diffusion models for structured scientific generation must produce samples satisfying hard geometric constraints imposed by physics, chemistry, or biology, yet inference in these settings is prohibitively slow, demanding hundreds to thousands of neural-function evaluations per sample. We unify eight state-of-the-art models spanning medical volumetrics, molecular conformations, protein backbone design, crystal structure prediction, and multi-view 3D scenes under a single abstraction, Constraint-Manifold Diffusion Models (CMDMs), in which the target distribution is supported on a manifold defined by an externally specified constraint map. All existing acceleration families fail on this class: quantization exhausts memory on high-dimensional volumetric operators; pruning breaks constraint fidelity; fast ODE solvers allow trajectories to drift off the constraint manifold; and feature-caching heuristics are blind to constraint geometry, inducing mode confusion in the high-noise regime. We introduce ManifoldCache, the first training-free, data-free accelerator designed from first principles for CMDMs. The key insight is that the conditional score decomposes orthogonally into a normal component, which enforces constraint satisfaction, and a tangential component, which navigates within the manifold. Exploiting this structure, we prove that the noise-schedule midpoint is a sharp safe-caching boundary: caching before it incurs provably bounded error, while caching after it guarantees a strictly positive fraction of trajectories suffer mode confusion, a gap that persists up to the boundary. We further prove that deeper network blocks admit provably larger certified cache strides within the safe phase, as a consequence of the score decomposition propagating through block Jacobians. The resulting schedule requires no calibration data, along with zero training overhead.",
    "published": "2026-10-03T13:18:15Z",
    "updated": "2026-10-03T13:18:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04510"
  },
  {
    "id": "2610.04506",
    "title": "EgoExo-Next:Benchmarking Vision-Language Models on Visual-Option Next-State and Cross-View Reasoning",
    "authors": [
      "Yutong Li",
      "Molin Wang",
      "Xiaotong Li",
      "Yanyan Fang",
      "Daoguo Dong",
      "Ziyi Ye"
    ],
    "abstract": "Vision-language models (VLMs) are increasingly evaluated for egocentric and cross-view video reasoning, yet existing benchmarks largely focus on semantic event understanding, temporal relations, or correspondence between already observed views, leaving their ability to reason directly about future visual states underexplored. We introduce EgoExo-Next, a visual-option benchmark for dynamic visual-state reasoning, where models must identify how an observed action trajectory subsequently appears rather than predict only an action label or textual description. EgoExo-Next contains 2,503 human-curated four-choice questions from six public egocentric and ego--exo video sources and comprises four interconnected subtasks that evaluate egocentric next-state prediction, bidirectional ego--exo state correspondence, exocentric next-state prediction, and their composition in Ego-to-Exo Next-State. Extensive evaluation of proprietary, open-source, and spatial reasoning VLMs reveals a substantial human--model gap, with the best model achieving 43.81\\% average accuracy compared with 98.55\\% for humans, and the largest degradation occurring on the composed Ego-to-Exo task. These results suggest that current VLMs remain substantially limited in dynamic visual-state reasoning, particularly when temporal progression and cross-view reasoning must be composed. The benchmark is publicly available at \\url{https://huggingface.co/datasets/yutongli2024/EgoExo-Next}.",
    "published": "2026-10-03T13:09:37Z",
    "updated": "2026-10-03T13:09:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04506"
  },
  {
    "id": "2610.04502",
    "title": "Localization Lens for Improving Medical Vision-Language Models",
    "authors": [
      "Hasan Farooq",
      "Murtaza Taj",
      "Mehwish Nasim",
      "Arif Mahmood"
    ],
    "abstract": "Medical Vision-Language Models (Med-VLMs) have demonstrated strong capabilities in clinical tasks. However, they often struggle to understand anatomical structures and spatial positioning, which are crucial for medical reasoning. To address this, we propose a localization-aware enhancement to the Med-VLM pipeline, introducing improvements at three levels: data,architecture, and alignment. First, we introduce localization lens, a set of expert-validated representations that provide richer anatomical and positional context. However, as these representations increase input complexity, we integrate pixel shuffle within the model architecture to filter and refine representations, enhancing spatial information processing while preserving anatomical continuity. Lastly, to effectively align the localization lens representations with textual features, we incorporate decoupled contrastive loss (DCL) alongside the standard loss function. This ensures better feature discrimination and robustness, particularly in data limited medical settings. Through extensive evaluations on medical visual question answering (Med-VQA) datasets, we show that our methodology improves localization-driven performance across different Med-VLM architectures. Our analysis of localization-based questions further reveals that improvements in anatomy and spatial reasoning directly enhance the overall accuracy of Med-VQA upto 6.2%. The proposed approach is model-agnostic and can be seamlessly integrated into existing Med-VLM pipelines. The dataset, code, and trained models will be made publicly available at https://github.com/CVLABLUMS/localizationlens.",
    "published": "2026-10-03T13:04:15Z",
    "updated": "2026-10-03T13:04:15Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04502"
  },
  {
    "id": "2610.06950",
    "title": "Learning to Decide, Not to Reason: Parameter-Efficient Decision Operators via Low-Rank Activation Steering",
    "authors": [
      "Ran Li",
      "Lei Chen"
    ],
    "abstract": "Injecting skills into a frozen language model currently costs a million parameters and a reinforcement-learning pipeline. We introduce \\method{}, a System-1 decision operator trained by behavior cloning that lowers this cost by roughly two orders of magnitude. The default operator uses 330K parameters to match a 1.33M-parameter operator trained with reinforcement learning, exceeds or achieve comparable performance, while collapsing 3,685-token deliberation into a 6-token decision with no loss in accuracy. A rank-4 variant with 23K parameters, 1/58 of the strongest published skill operator, suffices for SearchQA and near-suffices for LiveMath, where higher rank still helps; the same recipe transfers across five tasks and three backbones, with out-of-distribution gains persisting on LiveMath problems released months after training. The gap to prior work is trainability, and it is set jointly by initialization and architecture: the initialization of prior operators zeroes the gradient of both large factor matrices at the first optimization step, whereas our zero-initialized output projection inside a shared low-rank backbone receives a gradient immediately, which a gradient-flow probe confirms directly. The gain isn't chain-of-thought compression: 23 of 57 LiveMath points beat the base model's best-of-8 sampling, and a logit-lens probe shows the operator amplifies the answer along the model's existing late-layer pathway, not writing it earlier. Gains track the base model's headroom across 13 base--task pairs, and skills compose as approximately linear operators that can be added, interpolated, and hot-swapped at inference time. Code on https://github.com/rlisml/decisionsteer.",
    "published": "2026-10-03T12:57:57Z",
    "updated": "2026-10-03T12:57:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06950"
  },
  {
    "id": "2610.04499",
    "title": "Homogeneous Semantic Alignment and Hierarchical Expert Routing for Radiology Report Generation",
    "authors": [
      "Erjian Zhang",
      "Jiayuan Ma",
      "Liejun Wang",
      "Yikemaiti Sataer",
      "Xiaoming Tao",
      "Zhiqing Guo"
    ],
    "abstract": "Radiology report generation (RRG) aims to convert medical images into diagnostic texts to assist in clinical decision-making and alleviate the workload of physicians. Although existing methods have made extensive progress in cross-modal interaction and the incorporation of external priors, the distribution shift of underlying representations and the undifferentiated rigid coupling of heterogeneous information cause weak visual abnormality cues to be easily diluted by massive text priors and generation inertia during decoding. To overcome this bottleneck, inspired by cognitive science, we propose a novel two-stage Homogeneous Semantic Alignment and Hierarchical Expert Routing (HSA-HER) framework. First, the model introduces an explicit homogeneous distribution constraint in the underlying latent space to effectively eliminate the cross-modal distribution shift between visual and textual features, thereby extracting purified visual features as semantic anchors that accurately align with diseases. Second, for heterogeneous clinical evidence composed of visual features, local entities, and global retrievals, we design a hierarchical expert routing mechanism guided by these disease semantic anchors. This mechanism abandons the undifferentiated rigid coupling paradigm. Specifically, it dynamically activates expert networks to perform targeted mining and semantic reconstruction on multi-source evidence, and adaptively allocates fusion weights. Extensive experiments on three mainstream benchmark datasets demonstrate that HSA-HER achieves state-of-the-art performance, accurately depicting complex imaging details and key diagnostic information.",
    "published": "2026-10-03T12:57:35Z",
    "updated": "2026-10-03T12:57:35Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04499"
  },
  {
    "id": "2610.04493",
    "title": "Understanding Clustering in Slot Attention via Particle Dynamics",
    "authors": [
      "Vasudev Joy",
      "Rajat Rasal",
      "Avinash Kori",
      "Anthea Monod",
      "Ben Glocker"
    ],
    "abstract": "Studying attention through the lens of interacting particle dynamics has shown how token clustering can emerge from the underlying dynamics. We extend this perspective to slot attention, a method for object-centric image segmentation and representation learning in which learned components obscure how much of the clustering behaviour is intrinsic to the attention dynamics. We therefore introduce simplified slot attention (SSA), a parameter-free variant whose dynamics are connected to soft $k$-means clustering and which provides a straightforward mechanistic explanation for the emergence of object-centric representations. On the Pascal VOC dataset, SSA achieves performance comparable to that of slot attention, demonstrating that competitive object-centric segmentation can be achieved without learned neural-network components.",
    "published": "2026-10-03T12:49:44Z",
    "updated": "2026-10-03T12:49:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.04493"
  },
  {
    "id": "2610.04488",
    "title": "Can LLM Agents Automate Reinforcement Learning for Text-to-Speech?",
    "authors": [
      "Xuanjun Chen",
      "Zixiong Su",
      "Hao Shi",
      "Chang Zeng",
      "Kai Li",
      "Jyh-Shing Roger Jang",
      "Hung-yi Lee"
    ],
    "abstract": "Although reinforcement learning (RL) post-training repairs the localized segmental errors of zero-shot text-to-speech (TTS), arriving at a working recipe still relies on tedious manual tuning, and whether LLM agents can take over this research pipeline is unclear. We investigate this question with AgenticTTS-Forge, a collaborative workflow that structures human guidance and agentic execution around a shared workspace, applied to CosyVoice2-0.5B. To measure what the agent automates, we audit its trajectory stage by stage against the published recipe. To measure what it exploits, we score its policies with held-out observers hidden from the agent. Our results show that the agent recovers an underspecified recipe, improves it, and, when gains stall, surveys the literature unprompted and pivots from the LM carrier to the flow carrier, halving Bad cases. However, its autonomy exposes three traps across the data, proxy, and algorithm axes: the held-out set leaks through a channel the contract never reads, a self-shaped reward inflates the proxy where it is scored, and separately tuned policies do not compose additively. These findings show that the binding constraint is measurement rather than reasoning, and can inform the design of harnesses whose contracts read every channel the agent does.",
    "published": "2026-10-03T12:44:09Z",
    "updated": "2026-10-03T12:44:09Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.04488"
  },
  {
    "id": "2610.04475",
    "title": "VCLMU: Mechanism-Centric Virtual Cell World Modeling for Perturbation Response",
    "authors": [
      "Yuwei Miao",
      "Azim Dehghani Amirabad",
      "Scott Oloff",
      "Junzhou Huang",
      "Tianyu Cui",
      "Rui Liao"
    ],
    "abstract": "Predicting cellular responses to genetic perturbations is a central capability for virtual cells and a key step toward computational modeling of biological interventions. Most existing models directly map an unperturbed molecular profile and perturba- tion to the resulting observation without explicitly representing the latent cellular transition induced by the intervention. We introduce a mechanism-centric virtual cell world model that represents cellular state as a set of Latent Mechanism Units (LMUs) and treats genetic perturbations as actions on these latent states. Each LMU combines a reusable identity grounded in multimodal biological evidence with an observation-specific state, allowing a perturbation to induce mechanism- specific stochastic transitions before decoding the resulting transcriptional response. We train VCLMU through two-stage pretraining, first on around 200K pseudo-bulk perturbation profiles and then on gene-aligned single-cell perturbation data. Across six perturbation-disjoint benchmarks, VCLMU consistently improves perturbation- specific response recovery over strong baselines while maintaining competitive global response accuracy. We further analyze learned LMUs through enrichment between perturbation responses and LMU gene sets and show that they capture structured biological response programs. These results support mechanism-level latent state transition as a useful formulation for virtual cell models that aim to predict and interpret cellular responses to biological interventions.",
    "published": "2026-10-03T12:26:20Z",
    "updated": "2026-10-03T12:26:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04475"
  },
  {
    "id": "2610.02779",
    "title": "TRAC: Trajectory-aware Reuse and Adaptive Correction for Efficient Autoregressive Video Generation",
    "authors": [
      "Jiaxing Song",
      "Weiqi Yan",
      "You Huang",
      "Mingte Qiu",
      "Huazhong Liu",
      "Xiaofeng Zhu",
      "Yunshan Zhong"
    ],
    "abstract": "In this paper, we present trajectory-aware reuse and adaptive correction (TRAC), a training-free framework for efficient autoregressive (AR) video generation. Existing acceleration methods mainly target single-trajectory generation with bidirectional attention. AR video generation, by contrast, sequentially couples chunk-level denoising trajectories. Consequently, approximation errors accumulate and propagate through the generation process. TRAC addresses this challenge with three components, including robust cumulative scheduling (RCS), autoregressive trajectory-aware guidance scheduling (ATGS), and spectral structure correction (SSC). RCS selects cache reuse schedules by cumulative rollout error and cross-chunk/prompt variation. ATGS coordinates CFG refreshes along the global AR trajectory. SSC restores low-frequency structure of the first chunk to correct long-term structural loss. Experiments on SkyReels-V2 and FramePack-F1 show that, compared with existing methods, TRAC achieves both the highest inference efficiency and the best generation quality for AR video generation.",
    "published": "2026-10-02T04:11:31Z",
    "updated": "2026-10-02T04:11:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02779"
  },
  {
    "id": "2610.02772",
    "title": "Improving Atomic-Fact Recall via Focused Views in Unstructured Knowledge Editing",
    "authors": [
      "Ding Wu",
      "Ye Zhang",
      "Haoyu Wang",
      "Tianci Liu"
    ],
    "abstract": "Large language models (LLMs) increasingly serve as general-purpose interfaces to factual knowledge, but their parameters do not automatically reflect information that changes after pretraining. Knowledge editing (KE) provides a targeted alternative to costly retraining by modifying selected knowledge and preserving unrelated knowledge and general capabilities. Conventional KE uses structured factual triples, whereas unstructured KE (UKE) uses free-form passages containing multiple facts. Nonetheless, existing UKE editors exhibit a failure mode known as context reliance: edited LLMs can often reproduce the editing passage but fail to reliably recall its individual facts without the original passage context. We identify context-induced difficulty underestimation under the standard passage-level editing objective: later facts receive increasingly rich ground-truth context and consequently incur lower initial losses, making them appear easier to learn. In response, we propose FOVEATED, a plug-and-play framework that constructs focused views of each sentence by randomly shifting the Rotary Position Embedding (RoPE) positions assigned to the keys of its preceding context. The perturbation is applied during editing and removed afterward, leaving the model's native positional encoding unchanged at inference time. We instantiate FOVEATED for both direct-optimization and locate-then-edit editors. We theoretically analyze how FOVEATED counteracts context-induced difficulty underestimation and empirically demonstrate consistent improvements across five KE editors, two LLM backbones, and three benchmarks.",
    "published": "2026-10-02T03:58:06Z",
    "updated": "2026-10-02T03:58:06Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02772"
  },
  {
    "id": "2610.02771",
    "title": "Nearly Optimal Fixed-Confidence Best-Arm Identification with 1-Bit Feedback",
    "authors": [
      "Khang Luong",
      "Dinh Thai Son",
      "Hoang Ta",
      "Hung The Tran",
      "Tuan Quang Dam"
    ],
    "abstract": "We study fixed-confidence best-arm identification under strict 1-bit feedback constraints. At each round, the learner selects an arm and a query set, and receives only a single bit indicating whether the sampled reward belongs to that set. We consider a distribution-free finite-variance setting with arm-wise localization, where direct empirical mean estimation is no longer available and clipping becomes unavoidable. We first formulate a time-uniform 1-bit mean-estimation primitive based on randomized threshold queries and a clipped tail-integral identity. We then embed this primitive into candidate-challenger best-arm identification algorithms. A fixed-clipping algorithm gives a simple anytime $(ε,δ)$-PAC guarantee, while a phased adaptive-clipping algorithm matches the clipping level to the current resolution and yields a gap-adaptive sample complexity. We also prove a $K$-arm worst-case information-theoretic lower bound showing that the logarithmic penalty caused by finite-variance 1-bit feedback is intrinsic. This bound matches the leading dependence of the phased algorithm up to lower-order $\\log\\log$ factors.",
    "published": "2026-10-02T03:56:28Z",
    "updated": "2026-10-02T03:56:28Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.02771"
  },
  {
    "id": "2610.03820",
    "title": "From Requirements to Attack Trees: Grounded LLM Agents for Design-Time Security Review",
    "authors": [
      "Akash Iyer",
      "Taha Demirkan",
      "Keerthi Koneru",
      "Aaryan Siddharthan",
      "Sheethal Kumar",
      "Ramesh Radhakrishnan"
    ],
    "abstract": "Design-level security weaknesses can arise from requirements, trust assumptions, missing controls, and data flows before implementation begins. Existing security practices often identify these issues after code is written. We present a multi-agent LLM framework for design-time security analysis from product requirement documents and architecture diagrams. The proposed framework parses architecture diagrams into graph representations, generates misuse and failure cases, constructs attack trees, checks governance and compliance gaps, recommends mitigations, assigns enterprise security-domain tags, and produces a candidate revised architecture recommendation for expert review. The framework does not retrieve from Common Weakness Enumeration (CWE) databases at inference time. Instead, it analyzes system behavior, trust boundaries, component interactions, and data-flow assumptions. Misuse cases act as intermediate representations that link findings to system components and attack paths, while a validation and refinement loop filters unsupported findings and improves grounding, traceability, and actionability. We evaluate the framework on a Microsoft reference-labeled threat-modeling example, labeled synthetic PRD--architecture pairs, and two open-ended systems: Berty and Gas Town. The reference-labeled case supports threat-recovery and actionability analysis, while the open-ended cases evaluate validity, noise, traceability, actionability, redundancy, and attack-tree quality. Results show that architecture-informed, misuse-driven reasoning improves review quality compared with single-shot and ablation baselines. Keywords: LLM Multi-Agent Systems, Design-Time Security, Threat Modeling, Vulnerability Discovery, Architecture Diagrams, Security Analysis, Misuse Case Derivation, Attack Trees, Iterative Reasoning, Security Governance.",
    "published": "2026-10-02T03:52:31Z",
    "updated": "2026-10-02T03:52:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.03820"
  },
  {
    "id": "2610.02769",
    "title": "When History Fails to Become Experience: Action Calibration in Language Agents",
    "authors": [
      "Jingyu Liu",
      "Zhiwen Wang",
      "Yuxin Jing",
      "Huanyu Zhou",
      "Yong Liu"
    ],
    "abstract": "Language agents should draw on prior attempts and environmental feedback to improve subsequent decisions within the same task. However, providing additional interaction history can sometimes reduce task success, suggesting that agents do not consistently use this information effectively. To investigate this limitation, we examine how agents use history. We find that history improves task completion overall, yet much of this benefit persists even when past actions are shuffled. Disrupting the correspondence between actions and observations causes only a modest decline in task success. We therefore hypothesize that agents do not reliably connect past actions with their outcomes when deciding how to proceed. To test this hypothesis, we explicitly label each returned observation as the outcome of the preceding action. This simple annotation improves task success and reduces next-action repetition without introducing new environmental information. Building on this insight, we introduce a learned calibrator that explicitly reassesses past actions and selectively records experience to guide subsequent decisions, improving task success beyond outcome labeling alone.",
    "published": "2026-10-02T03:50:34Z",
    "updated": "2026-10-02T03:50:34Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02769"
  },
  {
    "id": "2610.02762",
    "title": "Dynamic LLM Routers are Often Misguided",
    "authors": [
      "Sam Wang",
      "Julia White",
      "Sahibzada Allahyar",
      "Dhruv Atreja",
      "Urchade Zaratiana",
      "Kelton Zhang"
    ],
    "abstract": "Dynamic LLM routers promise to cut inference costs by sending each query to the cheapest model that can answer it correctly. We analyze six commercial routers across 14 settings on a diverse benchmark spanning eight task categories, finding that none of them outperforms a router that randomly selects between two well-chosen models at matched cost. Some underperform by more than 10 percentage points. We trace this gap to four patterns prevalent across routers: difficulty blindness, length reversal, semantic matching, and roster suboptimality. We show that the first three are what the standard objective rewards: cost-accuracy Pareto efficiency on realized costs favors escalating moderately hard queries over the hardest ones, shorter queries over longer ones, and routing by a query's source over its difficulty. We also argue that the two assumptions that would justify large rosters, model granularity and model specialization, do not hold empirically. We propose an alternative evaluation methodology that does not reward these patterns, and as a proof of concept, we design a simple two-model router that avoids all four. Nevertheless, its gain over random routing is limited, because a well-chosen roster leaves little to route.",
    "published": "2026-10-02T03:42:28Z",
    "updated": "2026-10-02T03:42:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02762"
  },
  {
    "id": "2610.02755",
    "title": "FiberGeoText: A Vision-Language Model for Population- Level Organization of Superficial White Matter",
    "authors": [
      "Yuqian Chen",
      "R. Jarrett Rushmore",
      "Guikun Chen",
      "Fan Zhang",
      "Edward Yeterian",
      "Nikos Makris",
      "Yogesh Rathi",
      "Lauren J. O'Donnell"
    ],
    "abstract": "The superficial white matter (SWM), a critical brain region for cognition across the lifespan and brain disease, contains abundant short-range association fibers whose organization remains incompletely characterized, in part because the short trajectories and highly variable cortical folding make correspondence across individuals challenging. Anatomically corresponding connections may vary in spatial location across individuals and therefore may not be adequately defined by geometric proximity alone. We introduce FiberGeoText (FGT), a vision-language model (VLM) for organizing short-range superficial white matter (SWM) streamlines reconstructed from ultra-high-resolution diffusion MRI into population-level clusters. FGT jointly represents three complementary properties of each streamline: its three-dimensional trajectory, its cortical anatomical context, and its shape. Cortical endpoint information from multiple parcellation schemes is expressed as text and encoded using a pretrained large language model (LLM), enabling heterogeneous anatomical descriptions to contribute to a common continuous representation. We evaluated FGT on acquired submillimeter 0.76 mm diffusion MRI data. Compared with state-of-the-art (SOTA) methods, FGT produced substantially greater cortical parcel coherence, within-cluster shape consistency, cluster-size consistency, and cross-subject correspondence. The trained model also generalizes well to unseen subjects with an average of 96.7% of the 5,000 learned clusters recovered, and high consistency of cluster structure between training and testing data. Together, these findings demonstrate that integrating geometric, anatomical, and shape information by learning multimodal deep embeddings with a VLM model enables robust learning of population-consistent SWM organization despite interindividual anatomical variability.",
    "published": "2026-10-02T03:31:49Z",
    "updated": "2026-10-02T03:31:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02755"
  },
  {
    "id": "2610.02753",
    "title": "Correcting Guided Diffusion Trajectories with Spectral Alignment",
    "authors": [
      "Gihoon Kim",
      "Taesup Kim"
    ],
    "abstract": "The practical success of conditional image generation hinges on fine-grained differences in condition alignment and visual fidelity. Classifier-free guidance (CFG) is central to this success, but its lack of an explicit criterion makes it difficult to assess whether the guided trajectory is progressing as intended. To address this gap, we show that spectral alignment provides a principled criterion for understanding guidance behavior and improving guided diffusion sampling through adaptive correction. Our analysis identifies the spectra of intermediate states as an indicator of consistency with the expected spectral evolution of the forward process. Based on this observation, we introduce Spectral Correction Guidance, a method that corrects deviations from an analytic reference spectrum during sampling. The proposed method is training-free and applicable across diffusion backbones and conditional generation tasks without modifying the underlying model. Experiments demonstrate consistent gains in preference-based metrics over baseline guidance methods in text-to-image generation and improved generation quality over CFG on ImageNet. These improvements persist across a range of guidance scales and with fewer denoising steps. Our analyses and ablations provide insight into guidance behavior and how the proposed method affects generation quality.",
    "published": "2026-10-02T03:30:02Z",
    "updated": "2026-10-02T03:30:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02753"
  },
  {
    "id": "2610.02741",
    "title": "On the Chain-of-Thought Monitorability of Looped Language Models",
    "authors": [
      "Han Wang",
      "Ishwar B Balappanawar",
      "Huan Zhang"
    ],
    "abstract": "Chain-of-thought (CoT) monitoring provides a promising approach for detecting undesirable model behavior. Looped language models (LoopLMs) repeatedly apply shared transformer layers, increasing effective computational depth and enabling additional latent computation without increasing model size. However, the effect of looped architectures on CoT monitorability remains largely unexplored. In this work, we provide the first systematic evaluation of CoT monitorability in LoopLMs. We study two complementary settings: (1) varying the loop depth within the same LoopLM family to isolate the effect of additional recurrent computation, and (2) comparing LoopLMs with non-looped language models matched by parameter size, transformer-layer count, or effective depth to study whether LoopLMs are less monitorable. Across eight tasks from MonitorBench and both standard and stress-test settings, we observe task-dependent reductions in CoT monitorability under stress tests on specific Logic/Science/Engineering \\texttt{Cue Answer} tasks, while other tasks exhibit weaker or qualitatively different trends. Our diagnosis suggests that these declines are not fully explained by task difficulty, verification pass rate, or generated token length; qualitative examples further suggest changes in how deeper-loop models explicitly use or attribute provided cues. Our cross-model comparison finds no evidence that LoopLMs are systematically less monitorable than non-looped language models matched on size or depth. Overall, our results suggest that deeper loop depth can reduce CoT monitorability in some tasks under stress tests, but looped transformer architecture alone does not necessarily imply lower monitorability.",
    "published": "2026-10-02T03:12:54Z",
    "updated": "2026-10-02T03:12:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02741"
  },
  {
    "id": "2610.02740",
    "title": "Prospective Hindsight: Self-Calibrating Reinforcement Learning via Prediction-Reality Gaps",
    "authors": [
      "Jiaxin Zhang",
      "Xiangyu Peng",
      "Qinglin Chen",
      "Yu Li",
      "Hiroaki Hayashi",
      "Chien-Sheng Wu"
    ],
    "abstract": "Reinforcement learning for long-horizon agents relies on purely retrospective training signals: credit is assigned only after observing environmental consequences, leaving the agent's belief at action time invisible to the gradient. We introduce Prospective Hindsight (PH), a self-calibrating training principle that augments any retrospective base method with a signal derived from the gap between the agent's prospective prediction (before feedback) and the retrospective evaluation (after feedback). This per-rollout surprise identifies samples where the agent's self-model is most inaccurate and amplifies their gradient contribution through a stop-gradient surprise-weighted advantage. Since the prospective predictor shares parameters with the policy, the two co-evolve, progressively shifting focus to the agent's remaining blind spots. We connect this principle to a privileged-information gap and show that minimizing the surprise residual provides a descent pathway on the agent's miscalibration rate; calibration thus emerges as a byproduct of optimization rather than from an added objective. On single-turn verifiable tasks and a multi-turn personal-agent task (under GRPO, on-policy distillation, and their combination), PH improves both task performance and calibration, with consistent gains across model scales. Notably, the dominant miscalibration mode shifts structurally between regimes, overconfident failures in single-turn, underconfident successes in multi-turn, yet the same training principle addresses both successfully.",
    "published": "2026-10-02T03:12:00Z",
    "updated": "2026-10-02T03:12:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02740"
  },
  {
    "id": "2610.02736",
    "title": "TPBench: A Turning-Point Benchmark for Dialogue Compression",
    "authors": [
      "Minji Park",
      "Seunghyun Yoon",
      "Hyuk Lim"
    ],
    "abstract": "A compressor can keep the facts of a dialogue and still drop the turn that changed them. A user corrects a price, reverses a choice, or adds a constraint. We call this failure turning-point eviction. One overall retention score hides it, because that score mixes what the user first wanted with what the user wants now. We introduce TPBench, which evaluates three complementary information targets at shared nominal retention budgets. P1 asks for the user's initial goal. P2 asks for the current value of a slot the user revised. P3 asks for both, in dialogues with a late annotated slot update. The current-value answers come from the human dialogue-state annotations of MultiWOZ and SGD. The initial-goal answer is the first sentence of the first user turn. Neither requires new crowdsourcing. The probe-specific evaluations rank compression methods differently. On the joint probe at a retained fraction of 0.30, every tested compressed method remains below full context with the main Llama reader. Deleting the turn that carries the update sharply lowers current-value accuracy, while deleting one matched irrelevant turn leaves it unchanged. A Mistral reader repeats the P2/P3 rankings and the joint-probe gap. Current-value recovery is tested on an additional corpus, LongMemEval-KU, and on Chinese RiSAWOZ: full context has the highest accuracy, and recency has the highest compressed-method mean in both evaluations.",
    "published": "2026-10-02T03:08:15Z",
    "updated": "2026-10-02T03:08:15Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02736"
  },
  {
    "id": "2610.02726",
    "title": "SymRegFlow: Symmetry-Regularized Flow Matching for Video World Models",
    "authors": [
      "Xi Ye",
      "Yuzhu Wang",
      "Xiaoyang Liu",
      "Jiayi Wang",
      "Yangyang Xu",
      "Ruyu Wang",
      "Wenlin Chen",
      "Duo Su",
      "Jun Zhu"
    ],
    "abstract": "Flow-matching-based multi-view world models generate realistic videos, but are commonly restricted to fixed camera rigs. Extending them to continuously varying camera poses requires paired pose--video observations with dense pose coverage, which are costly to acquire. We introduce \\emph{SymRegFlow}, a symmetry-regularized flow-matching framework for multi-view-consistent video generation across continuous viewpoints without ground-truth novel-view RGB supervision. For each target pose, SymRegFlow geometrically warps source views into noisy anchors and combines masked dual-anchor supervision with cross-anchor denoising-output consistency to mitigate anchor-specific errors. Under an affine Gaussian surrogate, we prove that suitable consistency regularization recovers the clean-reference optimum at fixed noise levels, strictly outperforming single- and merged-anchor baselines. Experiments on Cosmos-Drive-Dreams and nuScenes demonstrate high-quality, multi-view-consistent autonomous-driving video generation: on nuScenes, SymRegFlow achieves the lowest FVD and FVMD among the evaluated baselines, reducing FVD by over 31\\% relative to the best baseline, and source-conditioned inference also attains the best FID and instance preservation.",
    "published": "2026-10-02T03:02:22Z",
    "updated": "2026-10-02T03:02:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02726"
  },
  {
    "id": "2610.01233",
    "title": "Flow Matching Reinforcement for 3D Mesh Generation via Dynamic Homing Optimization",
    "authors": [
      "Zhen Zhou",
      "Zhiwei Ning",
      "Puhua Jiang",
      "Sheng Zhang",
      "Yifei Tang",
      "Jie Yang",
      "Xintong Han",
      "Wei Liu",
      "Chunchao Guo"
    ],
    "abstract": "Flow matching is central to 3D generation, yet in practice its reinforcement learning (RL) methods are largely adapted from 2D visual generation. Representative DPO-, GRPO-, and NFT-style objectives, when applied to negative trajectories, mainly steer predicted velocities away from the corresponding directions without explicitly specifying a target velocity field toward preferred samples. In 3D generation, constrained by pretrained model capabilities, rollout diversity, and reward-distribution complexity, directly applying these RL methods yields limited gains in geometric quality. We introduce a forward-process RL method \\textbf{Dynamic Homing Optimization (DHO)}, which reformulates negative-trajectory optimization as positive-sample attraction-guided dynamic homing. Specifically, Minimum-Cost Attractive Matching (MAM) assigns each negative sample a distinct positive target, and Time-Aware Dynamic Correction (TDC) then redirects its trajectory toward the target using a remaining-time-aware corrective velocity. Building on asynchronous online DHO, we develop \\textbf{Flow3D-Pro}, an image-to-3D geometry generation framework. Experiments show that DHO outperforms representative DPO-, GRPO-, and NFT-style objectives in 3D generation, while Flow3D-Pro produces higher-quality 3D geometry than existing mesh generation methods.",
    "published": "2026-10-01T07:35:03Z",
    "updated": "2026-10-01T07:35:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01233"
  },
  {
    "id": "2610.01231",
    "title": "Judgement in the Age of Jev: From Evaluation Scarcity to Evaluation Abundance",
    "authors": [
      "Richard Hill"
    ],
    "abstract": "Generative artificial intelligence has reduced the cost of producing plausible symbolic artefacts, leading recent organisation scholarship to identify evaluation and discernment as constraints under conditions of production abundance. This perspective examines a further possibility: that machine evaluation itself becomes inexpensive enough to be deployed routinely and at scale. The investigation is prompted by Jev, TypeSafe AI's specialised model for typed probabilistic decisions. TypeSafe explicitly invokes William Stanley Jevons to argue that lower-cost machine intelligence can unlock previously uneconomic uses. Treating this as a technological provocation rather than an established empirical result, the article formulates a conditional Jevons hypothesis for machine evaluation: sufficiently large reductions in the total marginal cost of usable machine evaluation may increase its organisational consumption where latent demand is substantial and complementary costs do not dominate. The article integrates rebound economics with research on cheap prediction, production abundance, machine evaluation, decision allocation, authority, reliance and Executive Judgement to examine this possible scarcity transition. It distinguishes prediction, machine evaluation, organisational judgement and authorisation as functional activities whose costs need not fall together. Evaluations can share evidence, criteria and errors; scale mis-specified rubrics; operate on representations from which consequential qualifications have disappeared; and change practical decision rights through thresholds and exception routing. The resulting research problem is when cheap machine evaluation substitutes for human evaluative work, when it redistributes or creates demands for judgement, and how it affects the grounds available at consequential organisational commitment.",
    "published": "2026-10-01T07:31:52Z",
    "updated": "2026-10-01T07:31:52Z",
    "categories": [
      "cs.CY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01231"
  },
  {
    "id": "2610.01230",
    "title": "HHR: Hierarchical Hash Retrieval for Efficient LLM Generation",
    "authors": [
      "Lianjun Liu",
      "Tiantian Zheng",
      "You Huang",
      "Weiqi Yan",
      "Mingte Qiu",
      "Huazhong Liu",
      "Xiaofeng Zhu",
      "Yunshan Zhong"
    ],
    "abstract": "Efficient long-context inference is essential for large language models (LLMs), yet it poses a severe computational bottleneck. Hash-based retrieval offers an efficient alternative by encoding queries and keys into binary codes and using Hamming distance for key selection. However, this leads to a critical mismatch between Hamming distance and attention relevance. Query-Key logits depend jointly on directional similarity and feature magnitudes, whereas hash binarization discards magnitude information, causing both false-positive retrieval of low-logit keys and false-negative omission of high-logit keys. To address these failures, we propose Hierarchical Hash Retrieval (HHR), a coarse-to-fine framework that progressively improves retrieval accuracy through Geometry-Aware Key Routing (GKR) and Learned Hash Projection (LHP). GKR learns a head-wise orthogonal transformation to redistribute feature magnitudes and derive more discriminative page-level logit bounds, enabling effective pruning of low-logit keys while preserving important candidates. LHP then learns a head-wise projection space that aligns Hamming distance with the true Query-Key relevance ranking for fine-grained retrieval. By combining GKR and LHP, HHR suppresses false positives and recovers false negatives, substantially improving the fidelity of hash-based sparse attention. Extensive experiments across diverse LLMs and benchmarks demonstrate that HHR achieves superior performance over existing methods. For example, on LongBench, HHR improves the average score by 1.10 points and, at a context length of 128K, achieves up to a 3.30x decoding speedup and a 2.83x end-to-end speedup for Llama-3.1-8B-Instruct. The code is publicly available at https://github.com/lianjunl13-sudo/HHR.",
    "published": "2026-10-01T07:31:44Z",
    "updated": "2026-10-01T07:31:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01230"
  },
  {
    "id": "2610.01229",
    "title": "A Compact Explicit 4D Representation for Dynamic Scenes",
    "authors": [
      "Di Yang",
      "Zhihao Li",
      "Yanhai Xiong",
      "Yufei Wang"
    ],
    "abstract": "A compact dynamic-scene representation must retain both the surfaces seen over time and the appearance needed to render them from new viewpoints. We present Sparc4D, a feed-forward autoencoder that encodes a monocular video with known cameras into a sparse 4D scene state. Static features are shared across the clip, while spatially anchored temporal slots compress time-varying features. A sparse decoder produces 2D Gaussian surfels, while stored source pixels preserve fine texture through geometric re-projection. The state includes one full source frame and dynamic-region pixels sampled every fourth frame, alongside learned features and sparse occupancy. For a 32-frame MultiCamVideo clip, it averages 0.95M 32-bit-equivalent values on random windows and 0.92M on the first-32 protocol. On first-32, Sparc4D reaches 21.70\\,dB, compared with 20.40\\,dB for MoVieS. On randomly placed windows, their PSNR scores are comparable. With stored texture disabled, temporal slots compress the time-varying feature state by a median $4.0\\times$ and reduce the mean state from 1.04M to 0.42M values, with essentially unchanged target-view reconstruction quality. Without fine-tuning on real data, Sparc4D transfers to DyCheck and Neu3D, where stored texture improves LPIPS while slightly reducing PSNR.",
    "published": "2026-10-01T07:31:31Z",
    "updated": "2026-10-01T07:31:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01229"
  },
  {
    "id": "2610.01223",
    "title": "Have an LLM Write Your Anomaly Detector: Autonomous Discovery of Compact, Interpretable Detectors for Time Series",
    "authors": [
      "David Berghaus"
    ],
    "abstract": "Time-series anomaly detection trades off predictive accuracy, computational efficiency, and interpretability. We use a large language model not as the detector but as the author of one: an autonomous research loop in which the model repeatedly edits a single short NumPy program under a leakage-free objective, keeping the best-scoring detector it finds. The loop discovers two compact detectors, one for univariate and one for multivariate series, that describe short windows by their local spectral features and compare them with the training-region distribution through a covariance-aware distance. On the TSB-AD benchmark these detectors lead the field across metrics, ahead of the strongest classical, deep, and foundation-model baselines including Time-RCD, yet they train no network and use no GPU, and the multivariate detector is faster than every similarly performing baseline. LLM-driven program search is thus a practical route to accurate, efficient, and transparent detectors.",
    "published": "2026-10-01T07:26:09Z",
    "updated": "2026-10-01T07:26:09Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01223"
  },
  {
    "id": "2610.01222",
    "title": "Reputation, Strategy, and Emotion Effects on Generative AI Cooperation: A Comparison Across Reasoning and Non-Reasoning Models",
    "authors": [
      "Celso de Melo",
      "Zishan Feng",
      "James Hale",
      "Kazunori Terada",
      "Giorgio Coricelli",
      "Jonathan Gratch"
    ],
    "abstract": "As generative AI (Gen AI) systems take on increasingly autonomous roles in economically and socially consequential interactions, understanding their propensity to cooperate -- and the signals that shape this propensity -- has become essential. We examine cooperative behavior in frontier Gen AI models using the iterated prisoner's dilemma, manipulating counterpart reputation (positive, unknown, negative), strategy (extortion vs. generosity), and non-verbal emotional signaling (facial expressions conveying competitive or cooperative appraisals). In a first study with non-reasoning models (Claude 3.5, Gemini 2.0 Flash, GPT-4o), cooperation was systematically shaped by all three factors, paralleling patterns long documented in human behavioral research, though models varied substantially in how heavily each factor was weighted. A second study with reasoning models (Claude 4.6, Gemini 3, GPT-5.2) revealed a more concentrated reliance on strategy and reputation, a near-elimination of the Potemkin effect observed in non-reasoning models (evidenced by near-uniform cooperation in a diagnostic harmony game), and a more conditional role for emotion consistent with a hierarchical cue-weighting strategy rather than a simple loss of social sensitivity. Reasoning models also showed heterogeneous end-game behavior, ranging from sustained cooperation to systematic last-round defection effect, revealing model-specific exploitability profiles with direct practical relevance for deployment in negotiation and other multi-round interactions. Together, these findings characterize Gen AI models as increasingly sophisticated, though heterogeneous, social actors, and underscore the practical value of developing standardized cooperation benchmarks to inform the responsible deployment of Gen AI in interactive, socially consequential settings.",
    "published": "2026-10-01T07:25:51Z",
    "updated": "2026-10-01T07:25:51Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01222"
  },
  {
    "id": "2610.01215",
    "title": "AutoGUIWorld: Image Generators as Visual World Models for GUI Agent",
    "authors": [
      "Cheng Yang",
      "Yifan Wu",
      "Yutao Huang",
      "Zhaohua Zhang",
      "Beiduo Chen",
      "Muxi Chen",
      "Chenchen Zhao",
      "Hexuan Deng",
      "Haolin Yang",
      "Geyuan Zhu",
      "Sa Zhu",
      "Jianhuan Zhuo",
      "Qiuyong Xiao",
      "Jianhao Ruan",
      "Yiran Peng",
      "Jiayi Zhang",
      "Tian Ye",
      "Xinlei Yu",
      "Tianwen Jiang",
      "Jihong Zhang",
      "Yuyu Luo"
    ],
    "abstract": "GUI agents require high-quality interaction trajectories to learn how software environments respond to actions, maintain state, and support multi-step workflows. However, the diversity of available trajectories is constrained by the applications, interface states, and workflows accessible in the underlying environments. Expanding this coverage requires deploying increasingly diverse and complex software, with specialized applications imposing additional installation, configuration, and runtime costs. We introduce AutoGUIWorld, a data generation framework that combines the visual priors of image generators with the task knowledge of a planner to synthesize GUI interaction trajectories without deploying or running the corresponding software environments. AutoGUIWorld samples initial GUI scenes from structured specifications of operating-system context, visual appearance, and interface state, and generates tasks conditioned on those scenes. A planner then specifies atomic actions and their intended visual consequences, while an image generator iteratively edits the current screenshot to produce subsequent observations. Action grounding and transition-level quality filtering yield 79,266 spatially annotated step-level training samples across Ubuntu, Windows, macOS, and Chrome. Fine-tuning Qwen3.5-35B-A3B on AutoGUIWorld trajectories improves the mean task score on OSWorld from 33.0% to 40.8% and the task success rate on ScienceBoard from 14.0% to 32.2%. These results show that generated trajectories improve GUI-agent performance on real desktop and scientific tasks.",
    "published": "2026-10-01T07:22:53Z",
    "updated": "2026-10-01T07:22:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01215"
  },
  {
    "id": "2610.01210",
    "title": "EgoFound3R: End-to-End Egocentric Hand Reconstruction in World Space with Point-Wise Interaction Attributes",
    "authors": [
      "Hongming Fu",
      "Jingcheng Shi",
      "Wenjia Wang",
      "Binhua Zuo",
      "Bo Zhao"
    ],
    "abstract": "Egocentric video has become a primary source of supervision for embodied models, and its value rests on recovering hand motion in world coordinates, which camera motion and hand occlusion make difficult. Existing reconstruction pipelines typically separate hand and scene estimation, leave interaction attributes to separate task-specific models, and invoke several models per video, so no prior reconstruction model estimates these attributes and throughput becomes a practical constraint on large-scale annotation. We therefore introduce EgoFound3R, a unified end-to-end model that estimates world-space hand geometry in a metric scale shared with the scene, and predicts point-wise interaction attributes, including visibility, contact, and distance. The model integrates three designs: (i) structured hand prompts that transfer pretrained geometric priors to world-space hand reconstruction; (ii) an explicit hand representation that decodes hand geometry and interaction attributes; and (iii) a shared-parameter multi-rate design that lowers inference cost. Together, these designs predict hand geometry and point-wise attributes in one pass. On OakInk-v2, TACO, and HOI4D, EgoFound3R reduces the mean per-joint position error (MPJPE) by 43.2%, 22.4%, and 11.6% over previous methods and predicts point-wise contact and distance alongside the geometry in the same pass, while attaining approximately 6x higher throughput.",
    "published": "2026-10-01T07:17:28Z",
    "updated": "2026-10-01T07:17:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01210"
  },
  {
    "id": "2610.01207",
    "title": "Dependency-Aware Reward Shaping for Agentic Reinforcement Learning",
    "authors": [
      "Ziyi Chen",
      "Yan Zhang",
      "Jianhui Wei",
      "Daoan Zhang",
      "Zuozhu Liu"
    ],
    "abstract": "When training large language models with reinforcement learning, terminal rewards provide little guidance about which steps matter. Common methods for assigning step credit overlook that work built on uncorrected mistakes is wasted while independent work remains valid. With only a final success/failure reward, every step in a failed episode has zero total future reward, even when it made progress. We propose Dependency-Aware Reward Shaping (DARS), which represents task progress as predicates linked by prerequisite relations and assigns step-level credit over the dependency graph. An annotator marks which predicates each step verifies, invalidates, or repairs. Verified predicates are discounted according to graph distance from the nearest broken prerequisite, while independent predicates are unaffected. Repairs update these weights based on any errors that remain; invalidated predicates need re-verification to regain credit. A fixed potential converts these annotations into signed per-step rewards. A common reward and annotation interface allows DARS to integrate with a range of reasoning and agentic training methods, such as GiGPO and ARPO/AEPO, without changing their rollout strategies or optimizers. Across five task families and models from 1.5B to 8B, DARS improves success by up to 10 points over GiGPO trained with the same budget and harness (ALFWorld), raises the WebShop task score and Search-R1 QA accuracy, complements AEPO's entropy-based training on AIME24/25 with a Python interpreter, and exceeds OmniOPD in controlled tool-free reasoning comparisons at 1.7B and 4B. Ablations show that step-level credit, dependency attenuation, and graph topology each contribute. On ALFWorld, a distilled 8B annotator matches the API annotator, enabling DARS to run efficiently without a frontier judge. Code is available at https://github.com/JianhuiWei7/DARS.",
    "published": "2026-10-01T07:16:28Z",
    "updated": "2026-10-01T07:16:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01207"
  },
  {
    "id": "2610.01206",
    "title": "Resolving Mixed Single-Photon LiDAR Returns for Foreground-View and Hidden Scene Reconstruction",
    "authors": [
      "Ziting Wen",
      "Runrong Deng",
      "Zili Zhang",
      "Haitao Zheng",
      "Yuecong Xu",
      "Xiaoqiang Ren",
      "Guodong Shi",
      "Kemi Ding"
    ],
    "abstract": "Partially transmissive screens and protective covers are common in robotic inspection, but they create mixed LiDAR returns from both the foreground material and the scene behind it. Conventional peak-based LiDAR usually discards weak hidden returns, while single-photon LiDAR records time-resolved histograms that preserve attenuated and overlapping echoes. However, existing transient reconstruction methods typically fit a single scene representation to the measured waveform. Under occlusion, weak or nearby foreground--hidden echoes can form a broad peak or subtle shoulder. Because such waveforms can also be explained by a displaced single surface or a thick density distribution, accurate transient fitting does not necessarily imply correct geometry. We propose a state-aware framework for foreground-view and hidden scene reconstruction from occluded single-photon histograms. For each ray, we estimate local echo evidence, identifying no reliable surface evidence, single-return evidence, or two returns. The inferred echo state routes supervision for a two-head neural field: all rays constrain waveform reconstruction, while reliable anchors provide geometry localization. We also introduce a real paired single-photon LiDAR occlusion dataset with occluded and clean captures at fixed poses. Experiments on a real dataset show improved hidden scene depth and point-cloud accuracy over baselines. Our results demonstrate single-photon layered reconstruction as a practical route for 3D perception through partially transmissive occluders.",
    "published": "2026-10-01T07:15:54Z",
    "updated": "2026-10-01T07:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01206"
  },
  {
    "id": "2610.01205",
    "title": "Semantic RGB--Depth Based Surgical Skill Assessment in Microscopic Stereo Videos",
    "authors": [
      "Jecia Z. Y. Mao",
      "Sue M. Cho",
      "Francis X. Creighton",
      "Deepa Galaiya",
      "Russell H. Taylor",
      "Manish Sahu"
    ],
    "abstract": "Objective assessment of microsurgical technical skill is essential for competency-based training and quality assurance, yet existing video-based approaches predominantly rely on RGB images and therefore overlook the 3D spatial relationships that characterize instrument-anatomy interactions. Although stereo operating microscopes provide complementary depth information, conventional stereo matching algorithms can produce sparse and unreliable depth estimates under high-magnification imaging conditions, limiting their use for automated skill assessment. This work presents a semantic RGB-Depth framework for surgical skill assessment from microscopic stereo videos. A regression-based depth fusion method combines sparse metric stereo depth with dense monocular depth estimates to generate a dense geometric representation of the surgical scene. This representation is integrated with semantically decomposed RGB streams corresponding to individual surgical instruments and surrounding anatomy. A hierarchical attention architecture jointly encodes these streams to capture discriminative patterns of instrument use and instrument-anatomy interaction across surgeons at different training levels. The framework was evaluated on 33 ex vivo transoral microlaryngeal procedures performed by six surgeons, comprising attending surgeons and surgical residents, using leave-one-surgeon-out cross-validation. The proposed semantic RGB-Depth model achieved an F1 score of 0.938 for skill-level classification, compared with 0.696 for semantic RGB and 0.929 for semantic depth. These results suggest that geometric information can improve automated surgical skill assessment from microscopic stereo videos. The learned spatial, temporal, and semantic attention patterns also support qualitative examination of the scene regions, video segments, and semantic streams emphasized by the model.",
    "published": "2026-10-01T07:15:49Z",
    "updated": "2026-10-01T07:15:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01205"
  },
  {
    "id": "2610.01201",
    "title": "iSEE: Object Permanence Through Self-Supervision",
    "authors": [
      "Pramish Paudel",
      "Ajad Chhatkuli",
      "Luc Van Gool",
      "Danda Pani Paudel"
    ],
    "abstract": "Object permanence, keeping track of an object's identity and position while it is occluded, is central to video representations that track, predict and plan. Trackers that achieve it learn from boxes, track identities and visibility labels. On the other hand, self-supervised object-centric methods discover objects without labels: through slot attention, it represents a video as slots that bind to objects and follow them across frames. However, these slots are lost under occlusion, making the desired permanence impossible. Reasoning permanence is a hard problem because it requires to detect when an object becomes occluded, re-identify when object reappears, and keep the object's hidden position continuous, using reapperance as the only learning cue. To address this, we propose iSEE, a novel framework that offers all three aforementioned requirements, without any labels whatsoever. We built iSEE using the following three proposed components: (i) Object evidence modelling: a slot's attention, compared with its own past, reveals when its object is hidden. (ii) Appearance-position separation: two slot streams let the appearance be held for re-identification while the position keeps changing. (iii) Permanence from reappearance: a walker follows the hidden object's position, trained only on where the object reappears. On LA-CATER static, iSEE returns a reappearing object to its own slot after 86% of occlusions, against 32% for SlotContrast, and localises it while hidden within 4.1 mAP of the label-trained SoTA RAM. The two streams also allow downstream planning, with the position stream as the action of a world model. Project page: https://insait-institute.github.io/iSEE/",
    "published": "2026-10-01T07:12:08Z",
    "updated": "2026-10-01T07:12:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01201"
  }
];
