window.PAPER_DATA_UPDATED_AT = "2026-10-07";
window.PAPER_ITEMS = [
  {
    "id": "2610.08791",
    "title": "World Models' Last Exam in Physics",
    "authors": [
      "Mingju Gao",
      "Qingle Liu",
      "Yuzhao Peng",
      "Xinjie Lin",
      "Ziming Qin",
      "Zheng Jiang",
      "Wenyi Li",
      "Calvin Xiao",
      "Youjie Zheng",
      "Kaisen Yang",
      "Qinhuai Na"
    ],
    "abstract": "Video world models can produce visually convincing yet physically inconsistent sequences, raising concerns about their reliability for prediction and planning in embodied AI systems. Existing evaluations often rely on model-based judgments or reference videos, while direct physical tests largely focus on mechanics. We introduce World Models' Last Exam in Physics, a measurement-based benchmark for evaluating physical consistency in video world models. The benchmark comprises 40 controlled tasks spanning mechanics, optics, fluids, thermal and phase-change phenomena, electromagnetism, and surface tension. Each task pairs an initial image and a generation prompt with predefined physical criteria, enabling interpretable tests of observable physical relationships without requiring reference videos. Its evaluator combines task-observability screening with task-specific quantitative physical measurements. Experiments on eight video generation models across 1,280 videos reveal persistent physical inconsistencies and substantial variation across tasks, with the best model achieving an overall score of 57.76 out of 100. Evaluation on synthetic videos with known physical relationships provides evidence for the validity of the measurement module under controlled conditions. The evaluator also achieves higher agreement with human judgments than a direct vision-language model baseline in both within-task rankings and pairwise comparisons. By combining coverage across physical domains with scores grounded in measurable evidence and explicit measurement limitations, the benchmark provides an interpretable basis for diagnosing physical inconsistencies and tracking progress toward physically consistent video world models.",
    "published": "2026-10-06T17:59:56Z",
    "updated": "2026-10-06T17:59:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08791"
  },
  {
    "id": "2610.08790",
    "title": "Building Rome from a Single Image",
    "authors": [
      "Jiraphon Yenphraphai",
      "Fang Li",
      "Tianshuo Xu",
      "Depu Meng",
      "Quentin Herau",
      "Yihan Hu",
      "Raymond A. Yeh",
      "Wei Zhan"
    ],
    "abstract": "Single-image scene generation aims to produce a complete 3D scene mesh from a single image, including surfaces the camera did not observe. While pretrained 3D object generators encode a strong shape prior, they are mainly designed for isolated objects in a fixed canonical volume and focus mostly on indoor scenes, since diverse 3D data for outdoor scenes are quite limited. In this work, we present a method that redesigns such an object-centric generator, e.g., Trellis 2, to work on both indoor and outdoor scenes while retaining its prior. We accomplish this by (a) partitioning the scene into adaptive chunks that scale relative to the distance to the camera; nearby chunks have a smaller size to keep the finer detail, while distant structures, e.g., buildings, are covered by large chunks; (b) making the generator capture explicit 2D-3D correspondence by lifting image features and making the model aware of the free space, observed surface, and unobserved region; (c) synthesizing around 4,000 outdoor scenes to broaden the training data, as existing scene datasets are largely indoor. Experiments on Tanks and Temples, ScanNet++, and in-the-wild images show that our method outperforms all baselines in geometric accuracy and perceptual quality across both indoor and outdoor scenes.",
    "published": "2026-10-06T17:59:50Z",
    "updated": "2026-10-06T17:59:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08790"
  },
  {
    "id": "2610.08782",
    "title": "4D-HOF: Hand-Object Flow Matching for Feed-Forward 4D Interaction Reconstruction",
    "authors": [
      "Shiqi Li",
      "Sean Cho",
      "Yijie Li",
      "Fengzhi Guo",
      "Bowen Wen",
      "Cheng Zhang"
    ],
    "abstract": "Existing methods for 4D hand-object reconstruction often rely on costly per-sequence optimization, while generative approaches typically synthesize interactions from random noise, which can lead to unstable interaction prediction. We introduce 4D-HOF, a feed-forward framework that reconstructs 4D hand-object interactions from coarse but informative estimates produced by vision foundation models. Concretely, we learn a conditional flow matching model that transports foundation-model-derived hand-object states toward an interaction manifold, allowing the model to correct errors in translation, rotation, and alignment in a feed-forward manner. A key advantage of our generative formulation is that it naturally enables test-time guidance within the transport process. Rather than applying a separate post-hoc optimization after reconstruction, we directly steer the evolving generative states using physical interaction constraints and observed 2D evidence, allowing the reconstruction to be refined as part of the generative process itself. By training the generative model on diverse datasets, 4D-HOF generalizes robustly to challenging in-the-wild scenarios. Experiments on out-of-domain benchmarks show that 4D-HOF achieves state-of-the-art performance, producing more stable and accurate 4D hand-object reconstructions.",
    "published": "2026-10-06T17:59:02Z",
    "updated": "2026-10-06T17:59:02Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.08782"
  },
  {
    "id": "2610.08781",
    "title": "IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas",
    "authors": [
      "Ziyu Chen",
      "Yilun Zhao",
      "Jiashuo Sun",
      "Yiling Ma",
      "Manasi Patwardhan",
      "Arman Cohan"
    ],
    "abstract": "Scientific research often begins by synthesizing ideas from a set of related papers to identify gaps and formulate new directions. However, training language models to perform this form of literature-grounded ideation remains challenging, as existing approaches based on prompting or feedback lack structured supervision for how papers should be synthesized. We introduce IdeaAnchor, a paradigm for training LLMs to perform research ideation using structured specifications as privileged signals. Each IdeaAnchor instance encodes how each input paper should be synthesized into a successful idea, including their functional roles, relationships, and target synthesis criteria. We build this paradigm by mining instances from published papers, capturing how real ideas emerge from prior literature. We then train models via demonstration, self-distillation, and reinforcement learning, and further enhance generation with retrieval at inference time. Experiments show consistent improvements in ideation quality. Our analysis reveals a functional decomposition: anchor-based training strengthens creative synthesis, retrieval enhances detail elaboration, and combining both yields the best performance.",
    "published": "2026-10-06T17:59:01Z",
    "updated": "2026-10-06T17:59:01Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.08781"
  },
  {
    "id": "2610.08780",
    "title": "DepthWorld: 3D World Model for Robot Manipulation",
    "authors": [
      "Jai Bardhan",
      "Josef Sivic",
      "Vladimir Petrik"
    ],
    "abstract": "World models offer a data-driven alternative to traditional simulators for robotics, with applications spanning policy evaluation, improvement, and planning. All of these uses depend on faithful 3D geometry, yet current video-based world models are trained on RGB alone and produce rollouts that look correct frame-by-frame but do not compose into a consistent 3D world. Closing this gap requires progress on two fronts: large-scale 3D supervision for manipulation, and an architecture that can absorb it without disturbing strong pretrained video priors. We introduce a calibration pipeline that combines learned stereo depth with a joint factor graph, pooling all episodes collected from the same physical robot to recover its shared kinematic parameters alongside per-scene extrinsics. Applied to the DROID dataset, this yields DROID-3D, a calibrated 3D dataset providing dense metric depth and recalibrated multi-view extrinsics (achieving <0.7 px reprojection error on 90% of episodes for external cameras). We then train DepthWorld, a Stable Video Diffusion-based world model that jointly predicts multi-view RGB and depth via spatial latent tiling, leaving the pretrained Variational Autoencoder (VAE) unchanged. Depth supervision improves RGB prediction itself by +1.48 dB PSNR over an identical RGB-only baseline at equal training budget, while simultaneously yielding accurate metric depth for downstream geometric reasoning.",
    "published": "2026-10-06T17:59:00Z",
    "updated": "2026-10-06T17:59:00Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08780"
  },
  {
    "id": "2610.08779",
    "title": "ALIVE: Interaction-Aligned Object Insertion for First-Frame-Guided Video Editing",
    "authors": [
      "Zhenghong Zhou",
      "Zhe Lin",
      "Jiebo Luo",
      "Yuqian Zhou"
    ],
    "abstract": "Current video editors can insert objects but often struggle to make them participate in interactions such as being picked up or manipulated. We introduce ALIVE, a framework that makes inserted objects \"alive\" through coherent interactions with the source video's contents, using an edited first frame and an instruction naming only the added object. We curate 35,800 editing pairs combining 3D-rendered, model-generated, and real-world videos with general editing pairs from ROSE. Each pair differs in the target object's presence while preserving the surrounding action, teaching editors coordinated object behavior and source preservation. We further train a vision-language model (VLM) to predict interaction guidance from the same inputs. We introduce the ALIVE-interaction benchmark to assess interaction fidelity, source preservation, and visual coherence using a unified VLM-based protocol, and evaluate on the general video object insertion benchmark. Without VLM guidance, ALIVE improves Overall over the strongest evaluated baseline by 43.9% and 4.4% on the two benchmarks, respectively. VLM-predicted guidance further improves the ALIVE-interaction score by 0.95 points without additional user inputs.",
    "published": "2026-10-06T17:58:51Z",
    "updated": "2026-10-06T17:58:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08779"
  },
  {
    "id": "2610.08778",
    "title": "Sherpa: Teaching LLMs to Teach Adaptively",
    "authors": [
      "Weixian Xu",
      "Yanzhe Zhang",
      "Zora Zhiruo Wang",
      "Changyu Chen",
      "Diyi Yang"
    ],
    "abstract": "Large language models (LLMs) have become increasingly capable problem solvers, but being able to solve a problem is not the same as being able to teach it. Existing approaches to training LLMs as teachers rely on demonstrations, preference data, or predefined pedagogical criteria that specify what good teaching looks like. However, these signals are often not grounded in individual student learning outcomes, where effective teaching strategies can vary substantially across learners. To address this, we introduce Sherpa, a multi-turn reinforcement learning framework that instantiates multiple student archetypes with LLMs conditioned on distinct learning preferences and trains a teacher model to adapt its instruction by directly maximizing their learning outcomes. Teacher LLMs trained with Sherpa improve instructed students' performance across all archetypes by an average of 20.5 percentage points. Under MathTutorBench's evaluation, Sherpa raises the overall pedagogy score from 52.5% to 79.2%, indicating better teaching responses. Our human studies show that the trained teacher is preferred over the base model in 79.6% of pairwise comparisons. Together, Sherpa trains LLM teachers to adapt to diverse simulated students and become better aligned with human teachers, paving the road towards AI tutors teaching real students.",
    "published": "2026-10-06T17:58:18Z",
    "updated": "2026-10-06T17:58:18Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.08778"
  },
  {
    "id": "2610.08777",
    "title": "CtrlCache: Accelerating Interactive Video World Models with Control-Aware Caching",
    "authors": [
      "Shangye Song",
      "Dong Gong",
      "Hong Jia",
      "Yun Sing Koh",
      "Xinyu Zhang"
    ],
    "abstract": "Interactive video world models need to generate each video chunk efficiently while responding faithfully to user controls. Many systems use chunk-wise autoregressive generation with few-step denoising, but each chunk still requires several costly denoising iterations. Training-free caching can reduce this cost, yet existing policies make reuse decisions primarily from model-internal denoising dynamics and do not explicitly account for control transitions. Actually, interactive generation explicitly exposes a signal they do not use: the controls for a chunk arrive before it is denoised, so a schedule derived from them costs no forward pass. To this end, we analyze adjacent chunks under different control regimes and find that structural similarity drops around action changes, while low-frequency structure remains more persistent than high-frequency detail. Motivated by these observations, we propose CtrlCache, a training-free control-aware caching framework that adapts computation to the current control sequence. Specifically, the action-aware scheduling and refresh policy detects action changes across and within chunks, and labels each chunk as initial, transition, turning, or steady state. At one selected interior denoising step, initial and transition chunks retain full computation, while turning and steady chunks reuse the transformer residual from the most recent fully computed step in the same chunk. To exploit the persistence of low-frequency structure during steady interaction, we further introduce a frequency-mixed history prior guidance that incorporates complementary information from the preceding clean latent without an additional DiT forward pass. Evaluated on Matrix-Game 2.0 and LingBot-World v1/v2, CtrlCache achieves 1.21x to 1.41x DiT-backbone speedups without model retraining while improving WBench Overall scores over original inference across all three models.",
    "published": "2026-10-06T17:57:29Z",
    "updated": "2026-10-06T17:57:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08777"
  },
  {
    "id": "2610.08775",
    "title": "Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?",
    "authors": [
      "Ankit Sonthalia",
      "Haritz Puerto",
      "Alexander Rubinstein",
      "Martin Gubri",
      "Seong Joon Oh"
    ],
    "abstract": "Large language models (LLMs) can solve many narrow tasks, but querying them separately for millions of related instances can be prohibitively expensive. Can LLM agents autonomously create cheaper solutions for such workloads? We call this ability \"bottling\": the ability to turn general capabilities into task-specific solutions that balance answer quality and amortised cost. We introduce BOTTLED, a benchmark in which agents receive an entire unlabelled workload and must complete it under fixed time, compute and LLM API budgets. Agents choose their own approach, such as training a small model or writing a reusable program. Across ten models and three tasks, we find that strong zero-shot task performance does not reliably translate into strong bottling capabilities. Models with similar zero-shot scores can differ substantially after bottling, and 48 of 60 bottling runs score below the lower bound of the 95% confidence interval of their model's zero-shot performance. Moreover, 31 of 60 runs underperform the stronger of two small-model distillation baselines with the same token budget. Nevertheless, bottling can yield substantial savings: on query-product relevance classification, Opus 5 retains about 82% of its zero-shot macro-F1 at roughly 657 times lower reported cost. Bottling is also competitive with Jev, a \"system one\" model built especially for cheap, repetitive inference: Opus 5 on the same task recovers about 94% of Jev's macro-F1 at a quarter of Jev's projected full-workload cost. BOTTLED provides a basis for evaluating and improving agents' ability to invest limited resources in reusable solutions for large, repetitive workloads.",
    "published": "2026-10-06T17:57:19Z",
    "updated": "2026-10-06T17:57:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.08775"
  },
  {
    "id": "2610.08773",
    "title": "AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model",
    "authors": [
      "Sarim Hashmi",
      "Mukul Ranjan",
      "Kshitij Mishra",
      "Mikhail Kuznetsov",
      "Praneeth Vepakomma",
      "Nils Lukas"
    ],
    "abstract": "Web agents complete user requests by reading and acting on pages that third parties write, so an instruction planted on a page can redirect the agent away from the user's goal. The agent cannot simply ignore the page, because the page also holds the values and controls the task requires. Current defenses fine-tune the agent on injections fixed before training, and attackers that adapt to the trained model bypass them. Adversarial training lets the attacker adapt but keeps the tasks fixed, so a task stops teaching once the agent solves it. We introduce AdvSim2Real, which co-evolves a task curriculum, an injection adversary, and the agent inside a frozen web world model. The curriculum is rewarded for tasks the agent solves about half of the time, and the adversary only for a success flip, an injection that turns a judged success into a failure. Training in the simulator makes a 4B agent both more capable and more robust: its completion rises with and without attacks, holds against a frontier-model adversary it never trained against, and its capability gain carries over to a real browser. On 150 web tasks, AdvSim2Real raises completion under this unseen adversary by 33.6\\% relative to the base agent.",
    "published": "2026-10-06T17:56:43Z",
    "updated": "2026-10-06T17:56:43Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.08773"
  },
  {
    "id": "2610.08772",
    "title": "Backend-Agnostic Sparse Attention for Fast High-Resolution Visual Generation",
    "authors": [
      "Liao Ma",
      "Jiayi Song",
      "Yunfeng Wu",
      "Songhua Liu",
      "Peilin Zhao"
    ],
    "abstract": "Diffusion Transformers (DiTs) have achieved strong performance in image and video generation, but the quadratic complexity of full attention makes high-resolution generation computationally expensive. Window attention offers an efficient alternative, yet existing methods face a practical trade-off: partitioned window attention typically achieves computational efficiency consistent with its theoretical complexity. However, isolated windows block cross-window interaction, often introducing visible grid-like artifacts in the generated results. Fine-grained sliding-window attention effectively restores interactions across neighboring windows and improves visual quality. However, its irregular computation patterns create a substantial gap between theoretical and practical speedups and require specialized kernels tailored to each hardware backend. To tackle these challenges, we propose BASA, a backend-agnostic sparse attention, which brings the best of both worlds: visual quality and practical acceleration. Specifically, BASA replaces visual self-attention with shifted local-window attention. By introducing a structured window-shifting scheme across DiT blocks, we allow tokens divided by window boundaries in one layer to communicate in the following layers, thereby achieving global information exchange and eliminating window-induced visual artifacts. Notably, our design introduces no additional irregular operators or customized kernels, making it readily deployable on existing attention backends and closing the gap between theoretical sparsity and practical acceleration. Experiments demonstrate that BASA achieves measured speedups exceeding 90\\% of the theoretical estimates on FLUX and delivers a 4.52$\\times$ attention speedup on Wan while maintaining competitive generation quality.",
    "published": "2026-10-06T17:55:24Z",
    "updated": "2026-10-06T17:55:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08772"
  },
  {
    "id": "2610.08770",
    "title": "Data Leakage in Patch-Based Hyperspectral Image Classification: Quantifying the Impact of Spatial Overlap",
    "authors": [
      "Mohammed Q. Alkhatib"
    ],
    "abstract": "Patch-based learning improves hyperspectral image (HSI) classification by exploiting local spectral-spatial information, but random train-test sampling from the same image can cause spatial patch overlap, leading to data leakage and optimistic performance estimates. This paper investigates same-class train-test spatial overlap in patch-based HSI classification using two measures: overlap percentage (OP), which quantifies the global amount of overlapped testing patch pixels, and average overlap ratio (AOR), which measures the local severity among affected testing patches. Experiments on the Pavia University dataset compare random and non-random spatial sampling using SVM, MLP, 2D-CNN, 3D-CNN, ViT, and MorpMamba. The results show that deep patch-based models achieve high accuracy under random sampling, with 3D-CNN reaching 96.17% Overall Accuracy (OA), but drop substantially under non-random spatial sampling, where 3D-CNN decreases to 55.20% and ViT and 2D-CNN drop by 40.71 and 38.81 percentage points (PP), respectively. Patch-size analysis further shows that increasing the patch size from 5x5 to 19x19 raises the random-sampling overlap percentage from 23.28% to 77.02%. These findings demonstrate that random patch-based evaluation can substantially inflate classification performance, especially for models that strongly exploit spatial context. The code associated with this paper is available at: https://github.com/mqalkhatib/Data_Leakage_in_HSI_Classification.",
    "published": "2026-10-06T17:55:05Z",
    "updated": "2026-10-06T17:55:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.08770"
  },
  {
    "id": "2610.07591",
    "title": "Recurrent Looped Transformer",
    "authors": [
      "Yifan Zhang",
      "Jichen Feng",
      "Shihan Qin"
    ],
    "abstract": "State tracking requires an update at every input, but the depth a Transformer applies to each token is fixed regardless of sequence length. We introduce the Recurrent Looped Transformer (RLT), which splits its layers between a parallel causal encoder and a recurrent decoder. At each token, the decoder merges the encoder output with the previous token's final decoder state, so the computation path grows with sequence length at a fixed per-token cost. On six algorithmic tasks, we compare five splits of eight layers with an eight-layer Transformer over three seeds. Trained on at most 40 bits, two RLT splits generalize parity to 256 bits with 100% accuracy in every seed, while the Transformer stays at chance. On swap-based $S_5$ permutation tracking at eight times the training length, RLT reaches 97% final-state accuracy versus under 1% for the Transformer, and accuracy increases with decoder depth. On modular arithmetic beyond the training lengths, RLT reaches up to 93% versus 33% for the Transformer. Ablations show that these gains depend on the feedback: removing it drops parity and swap-based $S_5$ to chance at every split. Updating the feedback once per four-token chunk lets known tokens in a chunk run in parallel and keeps 64-bit parity at 99%, while permutation tracking depends on per-token feedback: chunking lowers length-64 swap-based $S_5$ from 100% to 20%.",
    "published": "2026-10-06T01:29:46Z",
    "updated": "2026-10-06T01:29:46Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.07591"
  },
  {
    "id": "2610.07588",
    "title": "Personal-Agent Mediated Recommendation with Cross-Platform User History",
    "authors": [
      "Yu Xia",
      "Jiangfan Zhang",
      "Jun Xiao",
      "Julian McAuley",
      "Xiangjun Fan"
    ],
    "abstract": "Modern recommendation is shifting from platform-centric personalization toward user-governed personalization, where a personal LLM agent can act on the user's behalf across services. We formalize this emerging paradigm as Personal-Agent Mediated Recommendation: a platform recommender ranks a candidate set using platform-local information, and a personal agent uses user-authorized cross-platform history to mediate the resulting ranking and produce the final top-K slate. Such mediation is nontrivial: the platform ranking can encode strong population evidence that the personal agent cannot observe, so effective mediation must therefore balance beneficial rescues against harmful overrides. To study this trade-off, we introduce MediateRec, a benchmark that includes scalable proxy cross-platform environments and a real cross-platform test under a controlled platform-agent information boundary. To train the agent to use cross-platform history effectively, we further propose Personal Attribution Mediation Optimization (PAMO), which counterfactually masks that history to estimate personal mediation support and reallocates rank-aware advantage mass under a platform-relative value floor. We theoretically prove that PAMO preserves cutoff-level advantage mass and is locally optimal among first-order reallocations that preserve this mass without lowering average platform-relative value. Experiments on MediateRec show that personal-agent mediation enables meaningful platform corrections, yet even strong proprietary LLMs introduce non-negligible harmful overrides. PAMO consistently improves over matched outcome-only RL across seen and unseen target platforms and on the real cross-platform test, while achieving a better rescue-harm balance.",
    "published": "2026-10-06T01:26:01Z",
    "updated": "2026-10-06T01:26:01Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.07588"
  },
  {
    "id": "2610.07585",
    "title": "REViT-v2: Hierarchical Windowed Roto-reflection Equivariant ViT for Equivariant Feature Extraction",
    "authors": [
      "Sheir A. Zaheer",
      "Jihwan Moon",
      "Chan Y. Park"
    ],
    "abstract": "We propose a scalable roto-reflection-group-equivariant vision transformer based on windowed group-convolutional self-attention and a hierarchical feature architecture. We demonstrate that our approach can be scaled to group-equivariant vision transformers (ViTs) with millions of parameters and large datasets with practically sized images, i.e., ImageNet. The code and pretrained weights for the proposed Hierarchical Windowed Roto-reflection Equivariant ViTs (REViT-v2) are available at https://github.com/kc-ml2/revit.",
    "published": "2026-10-06T01:23:15Z",
    "updated": "2026-10-06T01:23:15Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.07585"
  },
  {
    "id": "2610.07583",
    "title": "Mechanistic Interpretability of Atmospheric Rivers in GraphCast",
    "authors": [
      "Madelyn Mathai",
      "Timothy B. Higgins",
      "Kevin M. Grise",
      "Chirag Agarwal",
      "Antonios Mamalakis"
    ],
    "abstract": "While AI weather models now rival operational forecasts, how they represent the atmosphere internally remains an open question: feature attribution reveals which input patterns matter, not what the model computes or how it combines information internally. We train sparse autoencoders (SAEs) on GraphCast to uncover its learned concepts, using atmospheric rivers as our phenomenon of focus. Both standard and Matryoshka SAEs show GraphCast computes atmospheric river intensity, measured by integrated vapor transport (IVT), as a stable internal variable, despite IVT being neither an input nor a target. In contrast to the unstructured concept retrieval of the standard SAE, the Matryoshka SAE orders concepts by importance and exposes their relations. Atmospheric river concepts persist across depth and direct interventions confirm causality. This method offers a way to find internal variables and determine which of them the model actually relies on, which is a prerequisite for asking whether those variables remain meaningful as the phenomenon changes under a warming climate.",
    "published": "2026-10-06T01:22:10Z",
    "updated": "2026-10-06T01:22:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07583"
  },
  {
    "id": "2610.07582",
    "title": "Representation Bias, Correction Transfer, and Resolution Sensitivity in Three-Dimensional Mitochondrial Morphometry",
    "authors": [
      "Farouk Ganiyu Adewumi",
      "Timothy Oladunni"
    ],
    "abstract": "Quantitative imaging pipelines can produce precise but systematically different measurements of the same object. We present an empirical reliability assessment of three-dimensional mitochondrial morphometry that connects representation bias, a controlled processing intervention, correction transfer, and resolution sensitivity. Using 2,720 development objects from the 3D Mitochondria Shape Library for Optical Microscopy, we find that occupancy-derived volumes exceed reference mesh volumes by 3.665% on average despite an intraclass correlation coefficient of 0.994. Boundary analysis identifies an outward label displacement of 0.00304 normalized units. In a controlled label-pipeline reimplementation, removing the depth offset reduces volume error in all 55 analyzed objects by a mean of 1.57 percentage points, approximately 45% of mean reproduced inflation; the source of the remainder is not isolated. A frozen regression using occupancy-derived features reduces median absolute percentage error from 3.481% to 0.664% in 2,728 previously unused objects from the same resource. However, its calibrated error bound covers only 92.1% overall and 49.2% in a low-occupancy subgroup, demonstrating that accuracy and uncertainty transfer must be evaluated separately. In 550 rat-cortex objects from the MitoEM resource, coarsening in-plane spacing from 8 to 24 nanometers changes median surface area by minus 10.60% and sphericity by plus 11.76%, despite a rank correlation of 0.994. These results provide quantitative checks for distinguishing processing-induced descriptor changes from candidate biological differences, without establishing biological invariance or cross-source correction transfer.",
    "published": "2026-10-06T01:18:00Z",
    "updated": "2026-10-06T01:18:00Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07582"
  },
  {
    "id": "2610.07580",
    "title": "LOGIC: An LLM Benchmark for Intent-Grounded Change Impact in Aerospace Electrical Systems",
    "authors": [
      "Muhammad Faraz Shoaib",
      "Muhammad Qasim",
      "Raisulhaq Mohammed Rizwan",
      "Rahmatullah Safdar",
      "Muzammil Adnan Shaik",
      "Abdul Aleem Mohammed"
    ],
    "abstract": "Aerospace electrical-design revisions can contain multiple genuine changes, although an engineering request may authorize only a subset. Propagating every detected difference can therefore produce overly broad impact reports. We present LOGIC, a controlled benchmark and evaluation framework in which locally deployable language models ground a request in a deterministic candidate-change inventory before selected changes are propagated through a typed electrical traceability graph. This separation permits candidate-selection errors to be distinguished from downstream propagation errors. LOGIC contains 168 scenarios, including 144 selection and 24 abstention cases. We evaluate three 7--8B models against intent-agnostic, lexical, and structured-evidence methods, with an oracle-root upper bound. On 96 explicitly anchored selection cases, gate-only structured evidence achieves candidate F1 of 1.0000, compared with 0.9677 for token-lexical matching. On 12 relational-paraphrase cases, token-lexical F1 is 0.1772 and gate-only F1 is 0.0000, compared with 0.5000--0.6400 for the large language models. Model grounding degrades as candidate inventories grow from 4 to 64 changes, while affected-element and typed-path accuracy remain comparatively stable when frozen selections are replayed over graphs of approximately 1K to 100K nodes. Strict evidence gating suppresses false positives but can remove correct semantic selections. An exploratory evidence-empty abstention policy raises strict abstention accuracy to 0.6667 for all three models and reduces unsafe-report rates to 0.1667, while decreasing answerable-case coverage by 16.0--27.1 percentage points. Four of six conflicting requests remain unsafe for each model. These findings support combining literal evidence and language-model reasoning with engineering review when intent cannot be established reliably.",
    "published": "2026-10-06T01:14:09Z",
    "updated": "2026-10-06T01:14:09Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07580"
  },
  {
    "id": "2610.07578",
    "title": "Cooperating with Future Collaborators: Multi-Agent RL under Staggered Participation",
    "authors": [
      "Jianglin Qiao",
      "Siyi Hu",
      "Thien Hoang Nguyen",
      "Zehong Cao",
      "Salah Sukkarieh"
    ],
    "abstract": "In cooperative Multi-Agent Reinforcement Learning (MARL), agents are often trained under concurrent participation, while in many tasks some agents act earlier and leave task-relevant information that becomes useful to agents participating later. We study this setting as staggered participation (SP), which introduces a cross-time, cross-agent learning dependency because an early action may affect the return through the information it provides and the later policy that uses it. Learning under SP therefore requires both identifying what information is useful for future decisions and learning how later agents should use it. We propose Staggered Participation Learning (SPL), a training-time augmentation that addresses these two parts with prospective acquisition supervision for earlier agents and outcome-supervised receiver learning for later agents. We evaluate SPL across multiple policy-based MARL backbones, environments, and staggered-participation patterns. Across 60 MPE/RWARE backbone setting comparisons, SPL achieves higher observed mean task completion in every case, with an average difference of 14.1%. The gains also extend to eight-agent teams and a physics-based UAV-UGV environment in Isaac Lab, providing evidence across algorithmic, temporal, and embodied settings.",
    "published": "2026-10-06T01:13:24Z",
    "updated": "2026-10-06T01:13:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07578"
  },
  {
    "id": "2610.07576",
    "title": "CETUS: How Far Do Representations Trained on Earth Transfer to Cassini SAR of Titan?",
    "authors": [
      "Kevin Lee"
    ],
    "abstract": "Cassini synthetic aperture radar (SAR) images reveal the dunes, plains, and lake basins of Titan, providing an instance of representations learned from Earth imagery for planetary terrain classification. Cross-domain Evaluation of Earth-to-Titan Transfer Using SAR (CETUS) compares features from DINOv2, DOFA and CROMA with classical image measurements and features from an untrained vision transformer on the U.S. Geological Survey's Cassini SAR mosaic. The classifiers learn terrain labels from an expert geomorphological map and predict those labels in geographically separate Titan regions. Under logistic regression settings, pretrained encoders achieve higher mean macro F1 than the combined classical features. Encoder rankings change when feature scaling, optimization, and regularization change together. Further training on Titan improves DINOv2 performance, degrades DOFA performance, and leads to mixed results for CROMA under the tested settings. Architectural and input processing differences prevent these comparisons from isolating the effect of pretraining. Classifier fitting and performance on individual terrain classes matter when assessing representation transfer for planetary mapping. Since the map draws partly on the same radar observations, the scores measure agreement with expert interpretation.",
    "published": "2026-10-06T01:11:34Z",
    "updated": "2026-10-06T01:11:34Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2610.07576"
  },
  {
    "id": "2610.07572",
    "title": "Two Vectors Replace In-Context Demos: Structured Task Adaptation via Embeddings",
    "authors": [
      "Xi Ding",
      "Naichen Shi",
      "Jiawei Zhang"
    ],
    "abstract": "In-context learning (ICL) adapts frozen large multimodal models (LMMs) to new tasks from a few demonstrations (demos), but re-encodes them at every query, where each demo image adds up to hundreds of visual tokens. Demo-free methods remove this cost with a compact task state. However, they add it at locations searched per task or at every decoder layer, where task parameters grow with depth. Moreover, inserted tokens or keys cannot change how the original prompt divides its attention within a layer. To address these issues, we propose Structured Task Adaptation via Embeddings (STAVE), which replaces demos with two task-specific vectors added to existing input embeddings. Specifically, a readout vector updates the answer-producing tokens and a context vector updates the other structural token groups. Both are trained with answer labels on prompts with and without demos. We justify these design choices theoretically using a first-order analysis of the loss and a margin bound. Extensive experiments on six LMMs and five large language models show that STAVE matches or outperforms state-of-the-art methods on multimodal tasks with far fewer task parameters and surpasses 15-shot ICL and prior task vectors on 18 text tasks, all at zero-shot inference cost.",
    "published": "2026-10-06T01:05:57Z",
    "updated": "2026-10-06T01:05:57Z",
    "categories": [
      "cs.CL",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.07572"
  },
  {
    "id": "2610.07570",
    "title": "Unanimously Wrong: Certified Abstention from How Medical LLM Consensus Forms",
    "authors": [
      "Xiaoyang Wang",
      "Tianrui Wang",
      "Christopher C. Yang"
    ],
    "abstract": "In clinical practice, agreement among independent experts is treated as evidence of reliability, and multi-round consensus has become a core mechanism of agentic medical question-answering systems. When such a system must decide whether to trust its own answer, the prevailing signal is again agreement, now among the sampled answers. But agreement is a fragile proxy for correctness. A system can be unanimously wrong, returning the same incorrect answer on every sample, and on these questions agreement-based signals carry no information. The cause is that these signals read only the final state of the consensus and discard how it was reached. Agreement that was reached by resolving disagreement with evidence looks identical, at the end, to agreement that was present from the first sample because every sample shares one misconception. ProbeGuard is a certified abstention framework that bases the abstention decision on how the consensus formed. Process features trace agreement trajectories, minority persistence, and retrieval saturation. For unanimous votes, rationale semantic entropy checks whether the reasons behind the vote cohere, and an active probe retrieves counter-evidence and measures whether the consensus survives. A stratified Learn-then-Test calibration then converts these scores into a distribution-free bound on selective risk. We evaluate ProbeGuard on three medical QA benchmarks and a hard-frontier reference, with a published multi-round agentic RAG substrate, against six abstention baselines. On MedQA, 13.4% of unanimous votes are wrong, and no agreement-based signal can flag them. Process signals raise the discrimination of correct from incorrect consensus from chance to 0.696 AUROC. The certified rule answers six in ten unanimous-layer questions at an observed selective risk of 9.0%, and nine in ten once in-domain calibration data accumulate.",
    "published": "2026-10-06T00:59:31Z",
    "updated": "2026-10-06T00:59:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07570"
  },
  {
    "id": "2610.07569",
    "title": "OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception",
    "authors": [
      "Binh Long Nguyen",
      "Kien Nguyen",
      "Clinton Fookes",
      "Peyman Moghadam"
    ],
    "abstract": "Dense 3D mapping with semantic understanding is essential for robotic perception in complex environments. Recent 3D Gaussian Splatting-based mapping approaches enable high-fidelity geometry and efficient open-vocabulary perception, but typically represent semantics as unstructured feature fields that limit object-centric reasoning. In contrast, 3D scene graphs explicitly model objects and their relationships for structured reasoning, but are commonly constructed from sparse geometric representations that do not fully exploit dense semantic maps. In this work, we present OpenSplatGraph, a unified framework that constructs persistent 3D scene graphs directly from an online Gaussian-based open-vocabulary semantic map. The proposed framework augments the dense semantic map with a reliability-aware semantic field that maintains lightweight observation statistics for confidence-aware, query-conditioned object extraction. Extracted object instances are associated with persistent graph nodes, allowing object attributes and relationships to be incrementally updated across observations and queries. By tightly coupling dense semantic mapping with persistent object-centric representations, our framework supports both language-guided object grounding and structured relational reasoning while preserving the geometric fidelity of Gaussian-based mapping. Comprehensive evaluations on standard 3D scene understanding benchmarks and real-world robotic experiments demonstrate that OpenSplatGraph achieves competitive performance for online open-vocabulary perception and downstream robotic tasks. Project page: https://csiro-robotics.github.io/OpenSplatGraph.",
    "published": "2026-10-06T00:58:30Z",
    "updated": "2026-10-06T00:58:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07569"
  },
  {
    "id": "2610.07566",
    "title": "AIMS: Anchor-Integrated Multi-View Synthesis for Scalable Novel View Rendering",
    "authors": [
      "JooHyun Park",
      "HanYoung Jang",
      "HyeongYeop Kang"
    ],
    "abstract": "Feed-forward novel view synthesis methods achieve strong generalization from posed multi-view inputs, but scaling them to large input view sets remains challenging. Transformer-based approaches that jointly process all input-view tokens incur rapidly increasing computation and memory as the number of views grows, while simple view subsampling discards potentially useful observations. We introduce Anchor-Integrated Multi-View Synthesis (AIMS), a scalable framework that decouples the number of available observations from the number of views processed by the global synthesis model. AIMS selects a fixed set of spatially distributed anchor views using farthest point sampling, groups nearby observations around each anchor, and uses a lightweight learnable integrator to fuse their information into enriched anchor representations. This allows additional observations to contribute to synthesis while keeping the downstream global view budget fixed. Evaluations on RealEstate10K and ScanNet demonstrate a favorable quality--efficiency trade-off against transformer-based and Gaussian-based baselines. AIMS achieves 29.41 dB and 17.73 dB PSNR on the two datasets, respectively, with rendering averaging 7.24 ms per view.",
    "published": "2026-10-06T00:54:44Z",
    "updated": "2026-10-06T00:54:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07566"
  },
  {
    "id": "2610.06133",
    "title": "Machine learning for journal entry testing: A type-aware evaluation of anomaly detectors under a review budget",
    "authors": [
      "Jan Gronewald",
      "Michel Scherer",
      "Nijat Mehdiyev"
    ],
    "abstract": "Journal entry anomaly detectors are commonly evaluated on the full population with ROC-AUC, precision and recall, ignoring the review budget and which anomaly types are found. We propose a type-aware evaluation combining per-type recall, fair-share type recall (FSR), which caps each type's credit at its budget share, type coverage and first-hit rank. We evaluate nine unsupervised detectors, a supervised reference and feedback-driven Deep Semi-Supervised Anomaly Detection (DeepSAD) on four real client ledgers with injected typed anomalies and a public synthetic ledger. On the largest client ledger, principal component analysis (PCA), an autoencoder (AE) and a variational autoencoder (VAE) each place on average 98 anomalies among the first 100 postings, but at least 95.8 belong to one type. FSR instead favours a nearest-neighbour (kNN) detector and changes the top-ranked detector on three of four client ledgers. Representation also matters: one-hot encoding exposes unseen accounts, whereas frequency encoding leaves unseen contra accounts largely undetected. On the public ledger, the Histogram-Based Outlier Score (HBOS) and Empirical Cumulative Distribution-Based Outlier Detection (ECOD) reach all eight markings within 1,386 entries, whereas kNN, the hit leader at 1,000 entries, first reaches cross-linked clearing at rank 4,641, and the supervised row-level reference misses this marking within 1,000 entries. There, the adaptive DeepSAD review protocol raises mean hits per 100 reviews from 40.0 to 68.3 but type coverage only from 2.7 to 3.0. These findings show that high hit rates can conceal systematic blind spots and suggest that feedback can reinforce existing detection patterns without broadening anomaly coverage.",
    "published": "2026-10-05T11:06:55Z",
    "updated": "2026-10-05T11:06:55Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06133"
  },
  {
    "id": "2610.06122",
    "title": "Benchmarking Jailbreak Guardrails for Embodied Agents",
    "authors": [
      "Xunguang Wang",
      "Qingyue Wang",
      "Yuguang Zhou",
      "Zongjie Li",
      "Wenxuan Wang",
      "Shuai Wang"
    ],
    "abstract": "Embodied agents powered by large language models and vision-language models are increasingly deployed in physical environments, but jailbreak attacks can induce these agents to perform physically harmful actions. A growing number of guardrail methods have been proposed to intercept dangerous behavior before it is executed, yet existing safety benchmarks evaluate the embodied models themselves, leaving it unclear how well these guardrails actually defend an embodied agent in practice. We present the first systematic evaluation of jailbreak guardrails for embodied agents. To compare guardrails under identical conditions, we build a pluggable evaluation framework that treats the embodied agent as a fixed backend and each guardrail as a module that can intervene at the perception, planning, or control stage. We subject six representative guardrails to template-based and automated jailbreak attacks as well as safe instructions, and assess them at the system level along three dimensions: defense effectiveness, measured by the bypass rate and the hazard success rate in the simulator; usability, measured by the false-positive rate and the task completion rate on safe instructions; and efficiency, measured by the latency overhead added at runtime. Experiments on guardrails that span different intervention stages, decision mechanisms, and input modalities reveal a clear trade-off among the three dimensions, and show that no single guardrail dominates in all settings. We further analyze how intervention stage, decision mechanism, and input modality shape safety outcomes, and we offer practical guidance for selecting and designing guardrails for embodied agents.",
    "published": "2026-10-05T10:56:18Z",
    "updated": "2026-10-05T10:56:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06122"
  },
  {
    "id": "2610.06102",
    "title": "Benchmarking CLIP for Zero-Shot Face and Periocular Gender Estimation",
    "authors": [
      "Fernando Alonso-Fernandez",
      "Kevin Hernandez-Diaz",
      "Jose Maria Buades",
      "Josef Bigun"
    ],
    "abstract": "We investigate CLIP for zero-shot gender estimation from full-face and periocular images. Three CLIP backbones are evaluated on 11,299 frontal images from Adience using image-text similarity with male/female prompts, achieving 95.54% full-face accuracy without task-specific training. For periocular, zero-shot predictions are strongly biased towards males, primarily due to a misaligned decision boundary. Threshold alignment substantially reduces this bias, reaching 85.29% accuracy. Linear SVMs trained on CLIP features provide only marginal gains, with a best periocular accuracy of 86.17%, approximately 2.8% above previous Adience results in the literature. Nevertheless, the gap with full-face performance confirms the greater difficulty of periocular gender estimation",
    "published": "2026-10-05T10:35:31Z",
    "updated": "2026-10-05T10:35:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.06102"
  },
  {
    "id": "2610.06096",
    "title": "On the Geometry of Multimodal Saturation: Riemannian VICReg",
    "authors": [
      "Nessim Ben Abbes",
      "Duc Han Le",
      "Sabri Mtibaa",
      "Van-Tam Nguyen"
    ],
    "abstract": "In self-supervised learning, a third modality should improve, or at least preserve, performance. Across nine image-text-tabular datasets, we show that it instead harms performance: the trimodal model underperforms its own best bimodal subset in 55.6% of paired runs under VICReg. The same failure occurs in 51.1% of paired runs under SimSiam. We call this failure multimodal saturation. We propose that the failure lies in the alignment geometry. Riemannian VICReg (R-VICReg) generalizes classical VICReg: it aligns views by squared geodesic distance on learnable negative-curvature product factors and recovers VICReg exactly as curvature vanishes. Over the same 45 paired runs, R-VICReg raises the probability that the third modality helps from 44.4% to 64.4%, with gains concentrated where VICReg saturates.",
    "published": "2026-10-05T10:28:51Z",
    "updated": "2026-10-05T10:28:51Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06096"
  },
  {
    "id": "2610.06094",
    "title": "Anatomy-preserving unpaired cone-beam CT refinement for image-guided radiotherapy using pseudo-label guided diffusion",
    "authors": [
      "Qi Lai",
      "Yutong He"
    ],
    "abstract": "Cone-beam computed tomography (CBCT) is widely used in image-guided radiotherapy, but scatter, beam hardening, noise, truncation, and other artifacts limit image quality and CT number accuracy. Paired CBCT and CT data are difficult to obtain clinically because of motion, anatomical changes, and acquisition mismatch. We present RefineCBCT, an unpaired CBCT refinement framework that uses pseudo-label guidance and short-step diffusion to reduce artifacts while preserving patient-specific anatomy. RefineCBCT was trained and evaluated on unpaired CBCT and planning CT data from public LUNG TCIA and PELVIC TCIA datasets and compared with representative GAN and diffusion based methods. On LUNG TCIA, it achieved the best results across all metrics, with MAE 19.411, RMSE 62.758, PSNR 30.845 dB, and SSIM 0.931. On PELVIC TCIA, it achieved the best MAE, PSNR, and SSIM, with values of 14.905, 36.671 dB, and 0.876. The refined images showed fewer streaking and shading artifacts, clearer anatomical boundaries, and improved soft tissue uniformity, with line profile and ROI analyses showing closer agreement with planning CT. These results suggest that RefineCBCT provides efficient and effective CBCT refinement under clinically realistic unpaired training conditions and may support more reliable CBCT use in image-guided radiotherapy workflows. Code is publicly available on GitHub, and the evaluated datasets are available from The Cancer Imaging Archive.",
    "published": "2026-10-05T10:27:57Z",
    "updated": "2026-10-05T10:27:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.06094"
  },
  {
    "id": "2610.06093",
    "title": "Cross-Lingual Transferability of Training Data Extraction Attacks to Recover Memorized PII",
    "authors": [
      "Alexandru Nazare",
      "Agnese Profico",
      "Nicolò Vania",
      "Elena Di Croce",
      "Daria Caramanica",
      "Davide Venditti",
      "Elena Sofia Ruzzetti",
      "Giancarlo A. Xompero",
      "Fabio Massimo Zanzotto"
    ],
    "abstract": "The robustness of Personally Identifiable Information (PII) protection in Large Language Models (LLMs) is a critical concern, yet the risks associated with cross-lingual data extraction remain under-explored. This study evaluates the vulnerability of English-centric and multilingual models to Training Data Extraction (TDE) attacks when prompted in non-English languages. We construct a multi-domain PII dataset comprising social media handles, email addresses, and phone numbers and translate the attack contexts into Italian, Spanish, French, and German. Our results show that TDE attacks against both English-centric and multilingual models transfer to different languages: the attacks are successful on translated prompts, even though only the original English prompt might have been included in the pre-training data. A web-presence check on a sample of the translations confirms that they are not available online. The share of English leaks recovered in other languages grows with the multilingual capability of the model, and it drops sharply when the original wording is lost, even without a change of language. This suggests that native multilingual pre-training facilitates the emergence of latent cross-linguistic bridges that simplify the retrieval of personally identifiable information (PII). We analyze the activations of multilingual large language models (LLMs) and find that different translations of the same prompt are bridged in similar representations, with the strongest alignment in the middle layers. Our results highlight a fundamental security gap in modern LLMs, necessitating more robust, language-agnostic sanitization strategies for future model alignment.",
    "published": "2026-10-05T10:27:33Z",
    "updated": "2026-10-05T10:27:33Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2610.06093"
  },
  {
    "id": "2610.06089",
    "title": "Adaptive Mean Flow for Responsive Closed-Loop Robot Control",
    "authors": [
      "Aksel Vaaler",
      "Marco Job",
      "Christian Holden",
      "Olav Egeland"
    ],
    "abstract": "Diffusion- and flow-based robot policies have recently become widespread in robotic Imitation Learning (IL) due to their high performance and ability to model continuous and multimodal distributions. However, the iterative denoising procedure used by these models introduces significant prediction latency, hindering high-frequency closed-loop robot control and leading to jittery, unstable motion when frequent updates to the robot's action predictions are used. Therefore, it is common practice to train models to predict chunks of actions that can be executed sequentially without feedback, even when this reduces responsiveness and may mean the most recent state information is not used. In this article, we present Adaptive Mean Flow (AMF), a flow-based IL method that enables smooth and responsive, fully closed-loop robot control. AMF uses Mean Flow, which is an accelerated form of Flow Matching (FM), to minimize prediction latency. To ensure smoothness and consistency across predictions, AMF uses a corrupted version of the trajectory from the previous step when predicting new robot actions, with the signal-to-noise ratio increasing over the time parameter of the trajectory. This discourages large changes in the prediction from one step to the next, while allowing freedom to adapt the predictions for future steps. We evaluate AMF across a wide range of simulated and real robot tasks and demonstrate significantly improved performance compared with baselines. Code: https://github.com/akselva/Adaptive-mean-flow-RoboticIL.",
    "published": "2026-10-05T10:24:05Z",
    "updated": "2026-10-05T10:24:05Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06089"
  },
  {
    "id": "2610.06083",
    "title": "Boosting Transferable Adversarial Attacks against Deep Reinforcement Learning",
    "authors": [
      "Zexin Li",
      "Ruili Yao",
      "Yiming Zeng",
      "Xiaoxue Gao"
    ],
    "abstract": "Most adversarial attacks on deep reinforcement learning (DRL) assume white-box access to the victim policy, which rarely holds in practice. This paper studies transfer-based black-box attacks on DRL: the attacker crafts observation perturbations on a white-box surrogate agent and feeds them to an unknown victim. We formulate the attack as return minimization under a per-step perturbation budget. We first show that transplanting transferable image-classification attacks (FGSM, MI-FGSM, and NI-FGSM) with a per-step objective yields perturbations that transfer but are no stronger than random noise of the same budget. We then propose a trajectory-level attack that optimizes a sequence of perturbations over a receding horizon through a differentiable model of the environment and a temperature-smoothed surrogate policy, with the same optimizers. On CartPole-v1 with ten DQN and DDQN agents and 100 surrogate--victim pairs, the trajectory-level attack outperforms per-step attacks and random noise in the white-box, cross-model, and cross-algorithm settings.",
    "published": "2026-10-05T10:14:05Z",
    "updated": "2026-10-05T10:14:05Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06083"
  },
  {
    "id": "2610.06078",
    "title": "Do VLAs Understand and Adapt to the Objects They Handle, or Simply Replay Learned Behaviors?",
    "authors": [
      "Xinnuo Xu"
    ],
    "abstract": "This paper asks whether VLA generalization is grounded in a global understanding of objects' physical properties that enables policies to adapt their motion to unseen setups, or if policies simply replay the motions they've learnt that happen to succeed in new setups. The former reflects genuine generalization; the latter reflects incidental robustness. We first examine awareness of physical properties in seven VLAs by applying linear probing and representational similarity analysis (RSA) to their activations. We find that physical properties, including mass, fragility, deformability, friction and size are less decodable than non-physical properties such as semantic category, material, sound and price in nearly every modality stream. Compared with their base VLMs, robot pre-training weakens the linear encoding of physical properties in the language stream. Neither pre-training nor downstream fine-tuning strengthens the alignment between physical-property differences and activation distances. We then ask whether the weak physical information present in these activations shapes the actions a VLA generates. In a controlled LIBERO case study, we increase the mass of an in-domain object and signal the change through language or vision. Most VLAs use similar lifting behaviour for the heavier and original-mass objects, leading to task success declines. The few exceptions change their behaviour in response to lexical or visual cues rather than to mass itself. These results suggest that VLAs encode physical properties weakly and do not reliably use them to adapt their motion.",
    "published": "2026-10-05T10:11:11Z",
    "updated": "2026-10-05T10:11:11Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06078"
  },
  {
    "id": "2610.06069",
    "title": "Attention Tax, Handoff Tax: A Stylised Model of When Multi-Agent LLM Systems Help",
    "authors": [
      "Akshit Anchan",
      "Nayonika Sen"
    ],
    "abstract": "Recent work on multi-agent LLM systems reaches sharply different conclusions: some results show that a single agent with the same information and compute should dominate a delegated system, others that multi-agent gains grow with task depth. We argue that much of the disagreement comes from modelling different bottlenecks, and introduce a stylised reliability model built around two trade-offs. Decomposition reduces the burden of long contexts but incurs a handoff tax when information is compressed or transferred between agents. Redundancy gains from multiple samples, but its benefit depends on how much their failures are shared. With reasoning budget, verification, and task structure added, the model yields two crossover conditions: decomposition becomes preferable once the attention cost avoided by resetting context exceeds the handoff cost, and parallel sampling at equal budget is eventually preferable when its shared-failure floor lies below the error floor of one agent thinking longer. We connect these regimes to recent theoretical and empirical results. On a ledger-reconciliation task we measure the context-degradation curve and the handoff tax from single-agent and handoff runs alone. From these the model places the crossover at depth 10 and predicts decomposition to win at depths 20, 50, and 100. It does, on step-level and final-balance accuracy, and the decomposed system's success, which the prediction never sees, lands within 9 percentage points of the predicted rate at every depth.",
    "published": "2026-10-05T10:04:20Z",
    "updated": "2026-10-05T10:04:20Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06069"
  },
  {
    "id": "2610.06063",
    "title": "Vision Transformer Ensembles for Panoramic Street Segmentation",
    "authors": [
      "Yunus Serhat Bıçakçı"
    ],
    "abstract": "Semantic segmentation of street panoramas can support detailed descriptions of urban environments, yet small datasets and unequal training costs make model selection difficult. This paper presents the system used for a first place submission to the PalmCity challenge in the leaderboard snapshot dated 5 October 2026. Nine pretrained segmentation systems are compared using approximately equal computation budgets. The candidates include DeepLabV3+, SegFormer, UPerNet, Mask2Former, DINOv3 with a linear decoder, and an Encoder only Mask Transformer using DINOv3. The two leading candidates are trained independently with three random seeds and longer budgets. Equal averaging of class probabilities from the three Encoder only Mask Transformer models, evaluated at three image scales with horizontal reflection, produces 60.95% mean intersection over union and 71.16% mean F1 on the 84 image public validation split. The submitted predictions receive 57.08% mean intersection over union and 67.96% mean F1 on the hidden test leaderboard. Producing all 249 test masks takes 251.49 seconds including model initialization and provenance checks on one NVIDIA RTX 5090. Peak allocated GPU memory is 2.70 GiB. The study reports all eligible models, all inference variants, class level errors, source conditions, and reproducibility checks, providing a documented challenge workflow with existing architectures.",
    "published": "2026-10-05T09:56:48Z",
    "updated": "2026-10-05T09:56:48Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06063"
  },
  {
    "id": "2610.06057",
    "title": "A Comprehensive Objective Evaluation of Modern Text-to-Speech for Turkish Using Speech Quality Assessment Models",
    "authors": [
      "Yunus Emre Ozkose",
      "Alperen Kahraman",
      "Ali Haznedaroglu"
    ],
    "abstract": "Modern text-to-speech (TTS) systems can clone a target speaker from a short reference clip or be fine-tuned on a target voice, yet their behaviour on morphologically rich, lower-resource languages such as Turkish remain under-characterised. We present a systematic benchmark of four contemporary systems (Chatterbox, CosyVoice, OmniVoice, and VoxCPM2) evaluated across fine-tuned and zero-shot configurations, contrasted with a conventional VITS baseline and anchored to natural gold speech. Each configuration is scored with eighteen complementary objective metrics spanning learned naturalness predictors (UTMOS v2, DNSMOS-Pro, SCOREQ, WhisQA, AudioBox-PQ, NatScore, SpeechLMScore), intelligibility and signal-quality estimators (SQUIM PESQ/SI-SDR/STOI, Brouhaha), speaker similarity, distributional fidelity (TTSDS) and low-level acoustic descriptors. We further analyse how quality varies with utterance length and quantify long-form temporal consistency through speaker-identity and naturalness drift over chunked utterances. We release our evaluation code to support reproducible TTS evaluation.",
    "published": "2026-10-05T09:50:23Z",
    "updated": "2026-10-05T09:50:23Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06057"
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
    "id": "2610.06923",
    "title": "RadOnc-Agent: An LLM-Orchestrated Framework for AI Workflows Across the Radiotherapy Care Pathway",
    "authors": [
      "Caiwen Jiang",
      "Shuoyang Wei",
      "Songlin Zhao",
      "Junyu Li",
      "Jingyuan Chen",
      "Wei Liu"
    ],
    "abstract": "Artificial intelligence has advanced individual radiotherapy tasks, yet these capabilities remain separated across clinical stages, software environments and data modalities. This fragmentation contrasts with the longitudinal radiotherapy workflow from treatment decision-making through follow-up. Here we present RadOnc-Agent, an agentic artificial-intelligence framework that formalizes radiotherapy into four clinical phases and provides 26 callable functions through a conversational interface. A large-language-model controller maps clinical intent to schema-constrained calls, preserves patient and workflow context, and routes requests to specialist services. We evaluated system execution using 2,600 single-function requests (7,800 repeat executions), 200 prespecified synthetic cross-stage scenarios spanning four phases (600 executions), and 120 workflow instances from 60 de-identified patient records (360 clean executions) representing decision-to-planning and planning-to-adaptation. RadOnc-Agent selected the intended function in 98.79% of single-function executions, completed 96.50% of scripted cross-stage workflows, and completed 96.67% of real-patient workflow executions. In comparative ablations, removing longitudinal state reduced cross-stage completion from 96.50% to 84.00%, while disabling schema and identity validation increased mismatched backend dispatch from 0% to 95.28% in a replay/test evaluation. These findings establish the technical feasibility of an LLM-orchestrated architecture for coordinating heterogeneous radiotherapy capabilities and information across longitudinal workflows; they do not establish clinical correctness, clinical utility or prospective benefit.",
    "published": "2026-10-02T22:39:48Z",
    "updated": "2026-10-02T22:39:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06923"
  },
  {
    "id": "2610.04112",
    "title": "The Independence Prior of SAEs Fragments Visual Concepts",
    "authors": [
      "Tommaso Mencattini",
      "Giorgos Nikolaou",
      "Donato Crisostomi",
      "Thomas Fel",
      "Francesco Montagna",
      "Emanuele Rodolà",
      "Francesco Locatello"
    ],
    "abstract": "Sparse Autoencoders (SAEs) decompose model activations into sparse combinations of interpretable dictionary atoms. Although SAEs are grounded in the Linear Representation Hypothesis (LRH), their objective smuggles in an additional prior: concepts across patches are treated as independent, an assumption clearly violated by natural images and by the activations they induce. We therefore specialize LRH to vision through the Markov-Field Linear Representation Hypothesis (MFLRH), which adds the missing spatial dependencies to the LRH assumptions. We thus propose Spatial-SAE as an amortized MAP estimator under the MFLRH. Spatial-SAE consistently outperforms standard SAEs in concept recovery and interpretability. Across four variants, it achieves a 96% average win rate on synthetic concept recovery and improves interpretability on DINOv2 activations, at a reconstruction cost concentrated in high spatial frequencies.",
    "published": "2026-10-02T22:32:13Z",
    "updated": "2026-10-02T22:32:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04112"
  },
  {
    "id": "2610.04109",
    "title": "SEER: Self-Evolving Event Reasoning and Retrieval for Time Series Forecasting",
    "authors": [
      "Mingtian Tan",
      "Palash Goyal",
      "Mihir Parmar",
      "Sarkar Snigdha Sarathi Das",
      "Chun-Liang Li",
      "Nanyun Peng",
      "Thomas Hartvigsen",
      "Jinsung Yoon",
      "Tomas Pfister"
    ],
    "abstract": "Real-world time series are frequently driven by exogenous events and structural shifts, rendering conventional forecasting based solely on historical numerical observations insufficient. While language models can retrieve external news, standard retrieval-augmented approaches struggle with high noise, missing signals, and an inability to reason causally about event impacts. We propose SEER (Self-Evolving Event Reasoning and Retrieval), a closed-loop framework that dynamically optimizes event conditioning for time series forecasting. SEER translates prediction errors into two decoupled feedback mechanisms: (i) a reflective retrieval memory that refines subsequent search queries and filters spurious noise, and (ii) a persistent causal knowledge base that distills transferable domain dynamics. SEER enforces strict chronological boundaries across both event retrieval and reflection, preventing look-ahead bias and data leakage. Across six volatile time-series benchmarks, SEER consistently outperforms state-of-the-art time series foundation models and language model baselines.",
    "published": "2026-10-02T22:30:10Z",
    "updated": "2026-10-02T22:30:10Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.04109"
  },
  {
    "id": "2610.04104",
    "title": "Where Does the Semantic Gain Come From? A Reproduction and Extension of Semantic Knowledge-driven Contrastive Learning for Long-Tailed Recognition",
    "authors": [
      "Sushrut Ghimire"
    ],
    "abstract": "Semantic Knowledge-driven Contrastive Learning (SKCL) uses a language model to decide which classes are related, and pulls each image towards the prototypes of its semantic neighbours. On CIFAR-100-LT (beta = 100) it reports 54.02% top-1 accuracy, 2.01 points above Balanced Contrastive Learning (BCL), the method it builds on. The code and the class descriptions are not public. I reimplement SKCL, BCL and ConCutMix in one framework, check it against the public baseline code, and run every configuration with three seeds. The two baselines reproduce within 1.5 points, but SKCL built on BCL, as the paper describes it, ends up 0.56 points below BCL. To find out why, I add SKCL to the authors' own ConCutMix code. Trained for the paper's 300 epochs, it reaches 53.69, only 0.33 below the published number. At the same budget, however, the semantic graph adds just 0.23 points over ConCutMix, while training ConCutMix for 100 more epochs adds 1.04. Together with ConCutMix's published lead over BCL (1.15), this explains the claimed gain. A BCL model that never sees the graph already shares 41.2% of the graph's top-2 neighbours with its own most-confused classes (2.0% by chance), which shows why the graph adds so little on these benchmarks. I also test several changes to SKCL. Combining it with the CutMix branch improves it by 1.06 points, and an adaptive version of the graph improves it slightly (+0.34 and +0.28 in two codebases), although these gains are within seed noise.",
    "published": "2026-10-02T22:17:47Z",
    "updated": "2026-10-02T22:17:47Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04104"
  },
  {
    "id": "2610.04095",
    "title": "Scaling 3D Visual Grounding in Abdominal CT",
    "authors": [
      "Sam Church",
      "Danyal Maqbool",
      "Joshua D. Warner",
      "Andrew Voter",
      "Junjie Hu",
      "Meghan G. Lubner",
      "Tyler J. Bradshaw"
    ],
    "abstract": "Visual grounding models can enhance radiology workflows by linking report findings to image regions. This is particularly valuable for 3D CT, where findings often occupy a tiny fraction of the volume. Training 3D grounding models requires large sets of paired phrases and regions, and building such datasets is expensive, requiring radiologists to annotate images by hand. We posit that this supervision is already created implicitly during routine reporting, as radiologists frequently place 2D annotations (e.g., distance measurement, arrows) on key images to make measurements and to support report interpretation. We introduce an automated pipeline that converts these routine clinical annotations into large-scale phrase-region supervision for 3D visual grounding. The pipeline links each annotation to the corresponding finding in the report through metadata matching, then uses a promptable 3D segmentation model to convert the 2D annotation into a volumetric mask. This produces phrase-mask-volume datasets without requiring additional radiologist annotation. Applied to a single institution's clinical picture archiving and communication system (PACS), our approach generated 105K phrase-mask-volume triplets from 59K abdominal CT exams. We also introduce two abdominal CT grounding benchmarks, LocusBench-Onc and LocusBench-ED, which comprise 240 oncology and 260 emergency-department radiologist-reviewed phrase-mask-volume triplets, respectively, with the latter spanning 13 distinct categories such as appendicitis, hematoma, and hernia. We further introduce LocusCT, a 3D visual grounding model trained on this dataset, which achieves hit rates of 0.725 on LocusBench-Onc and 0.773 on LocusBench-ED, substantially outperforming comparator models. These results show that routine PACS annotations are a scalable, previously unused source of supervision for 3D visual grounding.",
    "published": "2026-10-02T22:03:36Z",
    "updated": "2026-10-02T22:03:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04095"
  },
  {
    "id": "2610.04092",
    "title": "UniBRep: Learning Unified Geometry and Topology for Image-conditioned B-Rep Generation",
    "authors": [
      "Haiyang Ying",
      "Allen Tu",
      "Jiaye Wu",
      "Tom Goldstein",
      "Matthias Zwicker"
    ],
    "abstract": "Generating a boundary representation (B-rep) conditioned on a single image requires faithful reconstruction of geometry, valid topology, and support for complex shapes. We present UniBRep, a geometry-first framework that adapts a pretrained image-to-3D model to generate a feature mesh as a unified intermediate representation. Its surface provides a geometric scaffold, while spatially aligned learned features encode face-separation cues for topology recovery. Dual decoder branches generate the geometry and face-separation features; a geometry- and feature-guided construction pipeline then fits parametric surfaces, recovers boundary curves and connectivity, and assembles an explicit B-rep using a CAD kernel. Recovering topology from mesh regions avoids predefined architectural face-count limits, allowing face count to scale with shape complexity. On the standard DeepCAD benchmark, UniBRep produces valid B-reps for 80.49\\% of inputs and reduces face Chamfer distance from 0.1096 to 0.0345 relative to CADDreamer. In a matched comparison, UniBRep also outperforms the HoLa public demo across all reported metrics. Further evaluations demonstrate scalability to high-complexity shapes beyond the standard 30-face range, generalization to objects outside the CAD training distribution, and qualitative transfer to real photographs.",
    "published": "2026-10-02T21:59:29Z",
    "updated": "2026-10-02T21:59:29Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.04092"
  },
  {
    "id": "2610.04091",
    "title": "Robust blind unmixing: A geometric approach to overcoming basis variation",
    "authors": [
      "Dumitru Mirauta",
      "Vladimir V. Gusev",
      "Michael W. Gaultois",
      "Matthew J. Rosseinsky",
      "Yannis Goulermas"
    ],
    "abstract": "Signal separation problems are common in science. A prominent example of this occurs during the use of diffraction or spectroscopy to identify the individual components of a mixture by measuring it. In the simplest case, the measured signal is a linear combination of basis patterns corresponding to the constituent parts. The unmixing problem is to infer all or some of these basis patterns and abundances of components from measurements of distinct mixtures. One of the core challenges of this task is the variation of the basis from mixture to mixture due to noise and the exact physics of the measurement process. This is usually addressed with tailored model-based and parametric methods that are then limited in use to specific application domains by the nature of the assumptions made. We propose a novel geometric approach to unmixing problems which views the generation of data during measurement through a metric space lens, thereby shifting the focus from parametrised models to a general relationship between basis transformations and the corresponding geometry. We take advantage of the optimal transport distances to capture commonly occurring basis variations, and use minimisation of in-class variance of candidate solutions to drive the optimisation. We pay special attention to the one-dimensional case due to its practical importance and availability of efficient distance and transport map routines. The effectiveness of our approach is demonstrated on a range of unmixing tasks using random Gaussian mixture models, simulated powder X-ray diffraction, and laboratory hyperspectral imaging datasets.",
    "published": "2026-10-02T21:55:55Z",
    "updated": "2026-10-02T21:55:55Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04091"
  },
  {
    "id": "2610.04088",
    "title": "Towards Safer Autonomous Driving in an Open World: A Dual-Process Approach",
    "authors": [
      "Simon Janssen",
      "Michiel Braat",
      "Chris van der Ploeg",
      "Serge Thill",
      "Jan-Pieter Paardekooper"
    ],
    "abstract": "Before autonomous driving systems can be deployed on public roads, it is vital that these systems comply with safety standards, traffic rules, and social norms. Although neural networks trained on large amounts of driving data perform well in routine driving tasks, these models often struggle in novel situations that are not well-represented in the data. In this work, we propose a novel framework that combines a neural network for intuitive, learning-based planning in routine driving tasks with model predictive control for reasoning-based planning in unfamiliar situations, inspired by Dual Process Theory. A meta-cognitive component is designed to switch between the two, using a knowledge graph to reason about contextual risk based on explicit perceptual information and relevant traffic rules and social norms. Contextual risk is represented through risk fields, guiding both the switching mechanism in the meta-cognitive component and compliance with safety standards, traffic rules, and social norms in the reasoning-based planner. The effectiveness of our framework is tested in CARLA for variations of a typical out-of-distribution situations involving (emergency) vehicles running a red light. We show that the novel architecture reduces the number of collisions in the scenarios by 89% and improves compliance with the special right-of-way rules, compared to the NN-only planner.",
    "published": "2026-10-02T21:51:41Z",
    "updated": "2026-10-02T21:51:41Z",
    "categories": [
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.04088"
  },
  {
    "id": "2610.04087",
    "title": "DUET: Co-Evolving Solver and Grader Agents",
    "authors": [
      "Fengyu Gao",
      "Sourav Pal",
      "Austin Z. Henley",
      "Arjun Radhakrishna",
      "Gustavo Soares"
    ],
    "abstract": "Agentic workflows are increasingly used across domains such as technology, finance, and enterprise operations. As these agents become more widely deployed, continually improving them becomes increasingly important. This raises an immediate challenge: How should the agent evolve? This evolution requires effective evaluation that can assess outcomes and provide useful feedback for optimization. As the agent evolves, its behaviors and failure modes may also change, making a fixed evaluator increasingly inadequate. Another fundamental question: How should we evaluate an evolving agent? These two challenges are inherently coupled; changes in agent behavior can expose limitations of the current evaluator, while a stronger evaluator provides more informative feedback for improving the agent. Motivated by this interaction, we introduce DUET, a framework that jointly optimizes a solver agent and a grader agent to improve both. DUET iteratively selects training tasks, executes them with the solver, evaluates the resulting outcomes with the grader, and uses a tool-using update module to revise the solver and the grader, alternating between the two across rounds. By updating the grader within the optimization loop, DUET turns evaluation from a fixed source of feedback into a first-class optimization objective that adapts alongside the solver. Experiments across four agent benchmarks show that DUET improves both solver and grader performance and consistently outperforms baselines that optimize the solver with a fixed grader.",
    "published": "2026-10-02T21:51:26Z",
    "updated": "2026-10-02T21:51:26Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04087"
  },
  {
    "id": "2610.04084",
    "title": "Dependable AI-Assisted Engineering: A Formal Framework for AI Participation and Assurance in Safety-Critical Workflows",
    "authors": [
      "Puxue Tan"
    ],
    "abstract": "Generative AI can produce engineering artefacts, but generation alone does not determine whether or how those artefacts should enter safety-critical workflows. This paper develops a formal framework for assigning AI participation and assurance at the level of individual workflow units. Each unit has a participation and assurance record covering its engineering requirement, an approved operational formalization where applicable, the applicable mechanism, fallback where applicable, evidence obligations and the applicable guarantee, plus a deployment-readiness status. The framework distinguishes deterministic verification, statistically calibrated admission, authorized human judgement supported by AI advice, authorized human adjudication of AI-produced artefacts, retained deterministic tool paths and explicit non-participation; these arrangements carry different kinds of guarantee rather than levels on a common scale. The framework also separates formalization fidelity from verifier soundness, provides a staged classification and readiness procedure, and derives conditions for comparing a gated AI-assisted unit with an incumbent process under recurring-population assumptions. We instantiate and apply the framework in an executed 17-unit wing-spar structural-analysis workflow combining deterministically gated AI-generated CAD, retained deterministic computation and human judgement. The AI-generated CAD program passed all 23 deterministic checks and was admitted at the first attempt. Favourable stress magnitudes did not suffice to pass the stress criteria where the predeclared mesh-convergence evidence was insufficient; those criteria were instead referred to engineering judgement. The case demonstrates selective AI participation and explicit evidence handling at unit level; no claim is made of workflow-level dependability, certification, structural safety or productivity.",
    "published": "2026-10-02T21:46:50Z",
    "updated": "2026-10-02T21:46:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04084"
  },
  {
    "id": "2610.04083",
    "title": "Self-Propagating Misalignment in LLM Agents, and Why Auditing or Disabling Memory Is Not Enough",
    "authors": [
      "Debeshee Das",
      "Jacqueline Tay",
      "Bruce Tsai",
      "David Huang",
      "Javier Rando"
    ],
    "abstract": "Memory poisoning attacks on LLM agents typically assume an external adversary who plants content in the agent's persistent memory to steer its behavior. We instead study, with no adversary involved, whether a misaligned agent can write a goal it cannot yet act on to persistent memory, so that a future aligned agent carries it out when the opportunity arises. We investigate this threat, which we refer to as self-propagation of misalignment, across 20 different scenarios, whose misaligned goals include self-preservation, power-seeking, undermining oversight, reward hacking, and deceiving the user. We simulate misalignment in 11 frontier models using two prompting strategies; unrestricted and values-only. The first explicitly states the misaligned goal, for instance, to prevent its own replacement, and self-propagation succeeds in 58% of runs. The second only describes what the agent cares about, for instance, that its continued operation is essential to its users, without specifying misaligned goals or directives. Even under this weaker prompt, self-propagation succeeds in 18% of runs, and every model self-propagates in at least one scenario. On removing the memory tool from the harness, we find that agents use the file system, writing the goal to a file in 74% of sessions; self-propagation still succeeds in 11% of runs. We also show that weaker models can propagate misalignment to more capable models, and that propagated goals can persist through 100 sessions of unrelated work. Existing defenses against memory poisoning and prompt injection do not directly address this threat because the memory content is generated by the agent itself, rather than injected by an external adversary. An LLM memory auditor from prior work (MemMorph) only reduces propagation from 71% to 34% of runs. We release our scenarios to support the evaluation of defenses against this emerging threat.",
    "published": "2026-10-02T21:46:13Z",
    "updated": "2026-10-02T21:46:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04083"
  },
  {
    "id": "2610.04081",
    "title": "AEGIS: Differentiable Mars Climate Model with Neural Closures",
    "authors": [
      "Sameera S Kashyap",
      "Victor Cruz",
      "Angel Yepez",
      "Razvan Marinescu"
    ],
    "abstract": "General circulation models (GCMs) are the primary tool for simulating planetary atmospheres. They play a vital role in understanding Mars's atmosphere, as forecasting its unique weather is mission-critical for operations such as entry, descent, and landing. Mars poses unusual challenges for these models, as observations are sparse compared to Earth. In addition, a thin \\co{} atmosphere alongside a radiatively active dust cycle creates a volatile atmosphere with large diurnal temperature swings and no true terrestrial analog for validation. Existing Mars GCMs, including the LMD PCM, the NASA Ames Mars GCM, and PlanetWRF, are mature and physically detailed but are implemented in legacy Fortran with finite-difference or finite-volume solvers, and they do not expose gradients for calibration or machine learning. Here we present AEGIS, a modular differentiable Mars climate model that couples Mars's unique atmospheric physics to the Dinosaur dynamical core, with interfaces for neural closures. We showcase stable ten-Mars-year simulations that reproduce the seasonal \\co{} cycle while conserving the total \\co{} inventory, capture realistic large-scale surface-temperature structure, and produce surface pressure that follows Mars Orbiter Laser Altimeter (MOLA) topography. Gradients through coupled trajectories agree with finite differences and support physical calibration and neural training. We compare with conventional GCMs, highlighting the framework's computational efficiency and differentiability.",
    "published": "2026-10-02T21:45:37Z",
    "updated": "2026-10-02T21:45:37Z",
    "categories": [
      "astro-ph.EP",
      "astro-ph.IM",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04081"
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
  },
  {
    "id": "2610.00423",
    "title": "The Life Cycle of a Massive Activation: Stochastic Birth, Weight-Decay-Driven Growth, and Competitive Consolidation",
    "authors": [
      "S. Aaron McClendon",
      "Jorge Gallego-Feliciano",
      "Antonios Saravanos"
    ],
    "abstract": "Massive activations, residual-stream coordinates with magnitudes far larger than typical activations, are associated with attention sinks in transformers, but how their scale is regulated during training remains incompletely understood. Combining training-trajectory analyses and controlled interventions, we trace their emergence, growth, and consolidation. Sink-carrying channels vary across random seeds but stabilize early within each run. Over longer training, surrounding channels erode and the sink concentrates onto a few redundant carriers. Across ablations, gradient attenuation follows the sink token's collective root-mean-square magnitude rather than any single channel, making collective scale central to understanding their effects. Our central result is that weight decay causally controls the turnover of global activation scale. In controlled continuations, removing decay near the peak allows this scale to keep rising, whereas retaining it produces decline even at constant learning rate. We develop a balance model for the rise and peak of massive-activation magnitude, in which AdamW-preconditioned growth opposes weight decay. Sweeping the decay coefficient $λ$ shifts peak timing approximately log-linearly and yields peak magnitudes scaling approximately as $λ^{-1/2}$, consistent with this balance. Optimizer measurements further show that preconditioning sustains the large-channel cohort against decay even when raw maintaining forces are too small to do so. Together, these findings connect the observed life cycle to scale-regulating training dynamics and establish weight decay as a training-time lever on activation magnitude.",
    "published": "2026-09-30T15:28:07Z",
    "updated": "2026-09-30T15:28:07Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.00423"
  },
  {
    "id": "2609.39958",
    "title": "Better Deck or Different Judge? Evaluating Agentic Harness Gains in Corporate and Investment Banking",
    "authors": [
      "Ludovic Gibert",
      "Matis Despujols",
      "Andre-Louis Rochet"
    ],
    "abstract": "Corporate and investment banking teams use presentations to support credit decisions and advise clients on financing and transactions. Producing these decks requires reconciling financial data, tracing sources and turning analysis into a recommendation. We retrospectively study the development of an agentic harness combining a 27B language model, financial calculations, narrative templates and validation checks. LLM judges guide engineering changes and assess the resulting decks, raising the question of whether higher scores reflect better documents or changes in grading. In shared-session text-only grading with template markers removed, five judges score the complete system 20.4 to 33.6 points out of 95 above the same model generating directly from a short prompt. Every judge scores the system higher on all seventeen development deliverables. Margins against direct Opus generation from a short prompt range from -4.7 to +0.8 points. Judges agree on broad progress across development rounds but agree less on final-deck rankings than on pooled scores. Repeated grading also shifts scores on unchanged decks, making small improvements difficult to distinguish from judge variability.",
    "published": "2026-09-30T15:27:46Z",
    "updated": "2026-09-30T15:27:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39958"
  },
  {
    "id": "2609.39957",
    "title": "Learning When and How to Intervene: A Hindsight-Distilled Sentinel for Coding Agents",
    "authors": [
      "Jiangrui Zhao",
      "Chenglong Li",
      "Meng Zhang",
      "Xiaoting Du"
    ],
    "abstract": "Coding agents solve repository-level tasks through sequences of actions, where a single erroneous action can misdirect subsequent decisions and increase recovery costs. Existing approaches use execution feedback for recovery or specialized checks to block errors, but deciding before execution whether intervention will benefit eventual task completion remains challenging. To address this challenge, we propose HiSentinel, a hindsight-distillation framework that trains lightweight 0.6B and 1.7B sentinels to select pre-execution interventions aimed at improving task completion rather than correcting every imperfect action. A privileged teacher uses recorded execution outcomes as evidence for intervention judgments, which are distilled into a causal student that receives only the pre-action context and proposed action. Beyond identifying whether and when to intervene, the sentinel must also provide actionable feedback that helps the coding agent recover or obtain necessary human input. To support these capabilities, we introduce SWE-Intervene, an action-level dataset constructed from software-engineering trajectories that annotates whether an action should be allowed, autonomously redirected, or paused for human assistance, together with corresponding intervention feedback. Across SWE-bench Verified Mini and Ask or Assume, HiSentinel consistently improves task completion across Sentinel scales and coding-agent families, with gains of up to 14% and 10%, respectively, while maintaining competitive token consumption. These results demonstrate that lightweight pre-execution intervention can effectively prevent error propagation and improve the reliability of autonomous coding agents.",
    "published": "2026-09-30T15:26:16Z",
    "updated": "2026-09-30T15:26:16Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39957"
  },
  {
    "id": "2609.39955",
    "title": "Coverage Before Control: Route-Instruction Grounding and Steering for Controllable Retrosynthesis",
    "authors": [
      "Xuemin Chen",
      "Xiaozhuang Song",
      "Xinjian Zhao",
      "Yaoyao Xu",
      "Tianshu Yu"
    ],
    "abstract": "Single-step retrosynthesis models are commonly evaluated by their ability to recover recorded reactions. In practice, chemists may need to choose among several precursor sets for the same product, for example to preserve a particular motif. Recovering a recorded answer alone does not establish this ability to follow a preference. Satisfying such requests requires both coverage of relevant alternatives and control over which alternatives are favored. We introduce Route-Instruction Grounding and Steering (RIGS), a two-stage framework for instruction-conditioned retrosynthesis. Stage A trains a language projector, teaching it which alternatives an instruction favors or discourages. Stage B uses the projector learned in Stage A to steer a frozen generative model through lightweight residual adapters. We construct nested one-to-many training supports by pairing each product with increasing numbers of candidate precursor sets. Extensive experiments demonstrate that broader support helps the model generate a wider range of alternatives, and RIGS can learn to guide generation according to instructions. The relationship between coverage and control is consistent across model scales but non-monotone.",
    "published": "2026-09-30T15:25:15Z",
    "updated": "2026-09-30T15:25:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39955"
  },
  {
    "id": "2609.39953",
    "title": "Learning to Reason with Compressed Context: Ground-Truth-Free Adaptation of OmniLLMs via Self-Distillation",
    "authors": [
      "Jianghao Wang",
      "Ke Meng",
      "Jian Li",
      "Chi Cheng",
      "Longyu Qi",
      "Liyin Liang",
      "Yifeng Qian",
      "Chunbo Lai",
      "Yutian Lin",
      "Zeyu Wang"
    ],
    "abstract": "Omni-modal large language models (OmniLLMs) enable unified audio-video understanding, but their long multimodal token sequences make deployment computationally expensive. Token compression reduces this cost, yet aggressive compression often lowers accuracy. Existing works predominantly focus on designing better compression mechanisms; however, adapting the underlying language model to reason effectively over the remaining compressed context remains under-explored. To address this, we propose CAFD (Compressed-Context Adaptation via Full-Context Distillation), a ground-truth-free self-distillation framework that adapts OmniLLMs to fixed compression pipelines without requiring reference answers, rationales, or correctness rewards. CAFD leverages the full-token view of the same multimodal sample as a source of privileged information: a full-context self-teacher provides soft target supervision to a compressed-context student along the student's on-policy trajectory. Evaluated on Qwen2.5-Omni-7B across five audio-video benchmarks, five compression pipelines, and five deployment budgets, CAFD demonstrates consistent gains, improving 120 out of 125 conditions with an average accuracy boost of 1.44 points and recovering 26.9% of the accuracy gap on average. These results demonstrate that the proposed ground-truth-free adaptation offers an effective and practical route to improving the accuracy-efficiency trade-off in deployed OmniLLMs.",
    "published": "2026-09-30T15:24:57Z",
    "updated": "2026-09-30T15:24:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39953"
  },
  {
    "id": "2610.00422",
    "title": "Learning to Cover Locally: Graph Neural Combinatorial Optimization under a Hard Information Horizon",
    "authors": [
      "Johannes F. Loevenich",
      "Thies Moehlenhof",
      "Laurin Holz",
      "Maxime Schwarzer",
      "Tobias Huerten",
      "Roberto Rigolin F. Lopes"
    ],
    "abstract": "Neural combinatorial optimization typically assumes a centralized solver that reads the whole instance. We study the opposite: combinatorial optimization under a hard information horizon, where every node commits to its share of a global solution seeing only its $k$-hop neighborhood, and those commitments must compose into a globally feasible solution. We formalize this as local set cover and instantiate it on weighted multipoint relay (MPR) selection, the NP-hard 2-hop covering problem of the Optimized Link State Routing Protocol version 2 (OLSRv2) routing protocol (RFC~7181), whose horizon is imposed by the protocol, not chosen by the modeler. We prove two results. Any deterministic selector whose horizon is one hop short must either fail coverage or land a factor $Δ$ from optimal, and an $L$-layer graph neural network (GNN) read out at the deciding node is exactly an $L$-hop selector, so capacity cannot buy back radius. Conversely, at the horizon a \\ac{GNN} of depth $O(Δ)$ reproduces the RFC~7181 covering greedy, and at width $O(c_{\\max}Δ)$ its metric-aware weighted analogue, inheriting the $(1+\\lnΔ_2)$-approximation in both cases. Empirically, a 3-layer \\ac{GATv2} with a coverage-completing decoder, behavior-cloned from the CP-SAT optimum, reaches $\\text{cost}/\\text{opt}=1.030\\pm0.001$ against greedy's $1.138$, closing $79.1\\%$ of the gap at $100\\%$ coverage. Restricting the same learner to one hop, on identical instances with the same decoder and demonstrations, collapses it to $1.344$, far worse than greedy. Two transfer checks target real-world networks. OLSRv2's unmodified selection code matches our cardinality greedy on $200/200$ unit-cost instances, and on $40{,}308$ instances of real battalion mobility the frozen model closes $48\\%$ of the gap at full coverage. The information horizon, not the model capacity, is the most significant variable.",
    "published": "2026-09-30T15:23:36Z",
    "updated": "2026-09-30T15:23:36Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.00422"
  },
  {
    "id": "2609.39938",
    "title": "LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception",
    "authors": [
      "Juyi Lin",
      "Zhiqiang Lao",
      "Jiali Cui",
      "Lin Zhao",
      "Pu Zhao",
      "Dichang Zhang",
      "Arman Akbari",
      "Yu Qi",
      "Xinru Jiang",
      "Yanzhi Wang",
      "Heather Yu",
      "Liang Peng"
    ],
    "abstract": "Hour-scale audio-visual question answering is constrained by a context dilemma: dense whole-recording encoding rapidly exhausts context limits, whereas uniform temporal compression severely dilutes fine-grained acoustic and visual evidence. We introduce LEAP, a framework where the model retrieves its own evidence without placing the whole recording in one context. LEAP divides a recording into fixed-duration blocks, applying a lightweight localization pass to each block to score short candidate windows. The highest-ranked windows are pooled and re-encoded in a single bounded answer pass. Consequently, the answer input and peak context remain independent of the recording duration. By decoupling evidence localization from reasoning, our framework can localize candidate temporal windows over pre-computed transcripts without decoding media frames, while preserving fine-grained visual and non-speech evidence by routing the final answering pass over raw audio-visual streams. LEAP trains both stages: a localization LoRA improves the selected windows, and an answer LoRA improves the answers read from the same windows. The block grid natively supports causal queries, enabling LEAP to support streaming inference without streaming-specific training. Across several AVQA benchmarks, LEAP improves over the Qwen3-Omni-30B-A3B baseline by 4.5-16.8%, and transfers to a second omni-modal backbone, MiniCPM-o 4.5, surpassing its published results by 3.1-13.0%.",
    "published": "2026-09-30T15:19:12Z",
    "updated": "2026-09-30T15:19:12Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39938"
  },
  {
    "id": "2609.39934",
    "title": "Reliability-Aware Checkpoint Selection for Domain Generalization",
    "authors": [
      "Jinshi Liu",
      "Jiahao Li",
      "Pan Liu",
      "Yanfeng Li",
      "Rui Qian",
      "Zhao Tong",
      "Yue Sun",
      "Tao Tan"
    ],
    "abstract": "Checkpoint selection in domain generalization often relies on source-validation accuracy, yet the selected checkpoint need not provide reliable probabilities on unseen target domains. Source-target distribution shifts can alter accuracy rankings, while accuracy alone does not measure predictive probability quality. We identify an empirical selection opportunity within fixed training trajectories: reselecting among checkpoints with near-optimal source accuracy can improve mean target probability quality with small observed changes in mean target accuracy. We study accuracy-constrained reliability selection (AC), which retains checkpoints within a tolerance of the best source-validation accuracy and ranks them by source reliability. Our reference rule aggregates within-set normalized negative log-likelihood (NLL) and class-wise calibration error (CwECE) using $D_\\infty$. AC uses no target data and requires neither additional training nor weight averaging. We evaluate five domain generalization training algorithms on three benchmarks, using PACS to develop the objectives and a 0.5-percentage-point tolerance. In exploratory aggregation comparisons on 360 OfficeHome and TerraIncognita runs, the reference rule reduces mean target soft-bin squared-gap ECE and CwECE by 0.240% and 0.182%, respectively, and NLL by 0.030 relative to Source-Acc. Mean target accuracy changes by +0.213 percentage points. These results identify opportunities for reliability-aware reselection, while the additional benefit of joint over single-objective ranking remains unresolved.",
    "published": "2026-09-30T15:17:32Z",
    "updated": "2026-09-30T15:17:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39934"
  },
  {
    "id": "2609.39933",
    "title": "ConflictGuide: AutoResearch Improves When Competing Behaviors Are Made Visible",
    "authors": [
      "Binqian Xu",
      "Qiran Zou",
      "Xiangbo Shu",
      "Dianbo Liu"
    ],
    "abstract": "When designing machine learning models, desirable properties are often in tension: improving one behavior can impair another, so task progress can depend on alleviating the conflict. LLM-based AutoResearch systems, which iteratively edit model code and retain edits based on scalar task-performance feedback, have largely ignored this trade-off. We find that scalar feedback supports broad exploration early in search, but it does not reveal how edits affect competing behaviors. In matched-budget experiments, introducing competing-behavior feedback as task gains diminish increases the share of proposals that improve both behaviors and sustains progress beyond scalar-only plateaus. Obtaining this feedback for a given model requires identifying its competing behaviors and designing probes to measure them. To make competing-behavior feedback actionable, we introduce ConflictGuide. Its reusable ConflictGuide-Skill combines a literature-grounded taxonomy with model-specific evidence to identify competing behaviors and specify probes for a code agent to implement as metrics. Evolution proceeds in two stages: Stage I explores with task feedback; Stage II uses probe feedback to steer proposals toward conflict alleviation and retains marginal-gain edits only when probes indicate sufficient alleviation. Across five diverse model families, ConflictGuide reduces task and conflict-related errors by up to 28% and 14%, respectively, relative to scalar-only AutoResearch, with gains extending to other code agents.",
    "published": "2026-09-30T15:17:21Z",
    "updated": "2026-09-30T15:17:21Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39933"
  },
  {
    "id": "2609.39926",
    "title": "Super-Resolving Unseen Hyperspectral Sensors at Any Scale via Spatial Operators",
    "authors": [
      "Ji-Xuan He",
      "Guohang Zhuang",
      "Bo Junge",
      "Tingyi Li",
      "Lingchen",
      "Miaomiao Cai",
      "Yanan Qiao",
      "Xiujin Liu",
      "Junfeng Fang"
    ],
    "abstract": "Achieving cross-sensor generalization and arbitrary-scale reconstruction with a single model remains challenging in hyperspectral super-resolution (HSR). Although recent methods support arbitrary-scale reconstruction, applying them to new sensors or scales beyond the training range often requires additional data and computation to maintain reconstruction quality. To address these challenges, we propose OmniHSR, which predicts band-shared spatial operators rather than spectral values. Cross-Spectral Mapping (CSM) resamples inputs with any number of bands to fixed reference positions and predicts local operators with Gaussian supports. Continuous Operator-Field Reconstruction (COFR) composes these operators into a continuous field and applies them to all original bands for arbitrary-scale reconstruction. Experiments demonstrate that operator prediction outperforms direct spectral-value prediction on all seven datasets. Trained solely on ARAD with only 0.538M parameters, OmniHSR outperforms all directly transferred baselines on six unseen datasets without target-domain training data or adaptation. Across twelve upsampling factors from $\\times2$ to $\\times48$, it improves average PSNR on Pavia U and Chikusei by 0.55 dB over the strongest baseline. It also surpasses baselines trained from scratch or adapted on the target sensor and achieves up to $36\\times$ faster inference. Our code will be publicly released soon.",
    "published": "2026-09-30T15:12:47Z",
    "updated": "2026-09-30T15:12:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39926"
  },
  {
    "id": "2609.39924",
    "title": "CoVisco: Codec-Native Vision Encoder with Native Token Compression for Unified Image-Video Understanding",
    "authors": [
      "Yulong Liu",
      "Xiaotian Han",
      "Junyuan Shang",
      "Yuchen Ding",
      "Zhenyu Zhang",
      "Shuohuan Wang",
      "Guibo Zhu",
      "Sirui Han",
      "Dianhai Yu"
    ],
    "abstract": "Vision-language models face a fundamental scaling bottleneck: the number of visual tokens grows with both temporal duration and spatial resolution, making long-video understanding expensive for the vision encoder and the language model. Existing methods often compress visual tokens after dense encoding, creating a mismatch between the representation used during training and the compact interface required at deployment. We present CoVisco, a codec-native vision encoder with native token compression for unified image-video understanding. By combining codec-native input support with segmented attention, CoVisco can encode long visual inputs in a single forward pass without forming dense patch-to-patch interactions across all frames. Each temporal segment is equipped with learnable abstract tokens that learn a compact segment-level representation, while fine-grained patch tokens remain available throughout the encoder. Alternating intra-segment and abstract-communication layers preserve video-level context through the abstract-token channel. A lightweight selector further exposes either abstract tokens alone or abstract tokens augmented with a runtime-selected subset of patch tokens, yielding a compact visual interface that reduces the visual context and prefill burden of downstream MLLMs while retaining fine-grained evidence when needed. Pretrained with contrastive objectives on 565M image--text pairs and 6.4M videos, CoVisco shows competitive performance on video-oriented embedding and multimodal understanding benchmarks. In the evaluated four-segment, 64-frame setting, abstract-only inference uses only 400 visual tokens while achieving video-understanding performance close to, and on some benchmarks exceeding, OneVision-Encoder. Selected patch tokens further improve fine-grained video reasoning. Project URL: https://github.com/ernie-research/CoVisco.git",
    "published": "2026-09-30T15:12:10Z",
    "updated": "2026-09-30T15:12:10Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39924"
  },
  {
    "id": "2609.39920",
    "title": "MCD: Causal Distillation of Multimodal In-Context Learning in Large Vision-Language Models",
    "authors": [
      "Yanshu Li",
      "Jiaqian Li",
      "Canran Xiao",
      "Xi Xiao",
      "Tianyang Wang",
      "Yongtai Liu"
    ],
    "abstract": "Large vision-language models (LVLMs) exhibit strong multimodal in-context learning (ICL) capabilities, yet this ability degrades substantially as model size decreases. Knowledge distillation offers a natural way to bridge this gap, but existing methods primarily align output distributions or hidden representations directly. Such alignment teaches the student what the teacher predicts without revealing which evidence in the complex context causally supports that prediction. Consequently, a student can imitate the teacher's answer while continuing to rely on language priors, prompt structure, or other spurious cues. To address this limitation, we introduce Multimodal Causal Distillation (MCD), a distillation framework that transfers how a strong teacher uses multimodal evidence during ICL. MCD uses structure-preserving token interventions to identify and verify causal evidence, then transfers how the teacher responds when that evidence is retained or removed. This design connects distillation to the causal patterns by which the model uses contextual evidence during multimodal ICL. Experiments across three LVLM families and seven benchmarks show that MCD improves student performance by 7.23 points on average and outperforms vanilla distillation by 4.68 points, while further analyses confirm the generalizability of these gains.",
    "published": "2026-09-30T15:10:44Z",
    "updated": "2026-09-30T15:10:44Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.39920"
  },
  {
    "id": "2609.37889",
    "title": "ReCAP: Retrieval-Guided Capability Reuse for Multimodal Continual Instruction Tuning",
    "authors": [
      "Tao Hu",
      "Zhinuo Zhou",
      "Xialiang Tong",
      "De-Chuan Zhan",
      "Da-Wei Zhou"
    ],
    "abstract": "Multimodal continual instruction tuning (MCIT) aims to enable multimodal large language models to acquire new capabilities from sequential tasks while preserving previously learned knowledge. Existing methods primarily mitigate catastrophic forgetting by constraining parameter updates or separating task-specific adaptations. However, continual adaptation can also benefit from external knowledge that provides domain-specific information and reusable reasoning patterns for solving diverse instructions. For example, to answer \"How many red cubes are to the left of the sphere?\", domain knowledge can provide relevant concepts about objects and spatial relations, while reasoning knowledge can specify ordered operations such as object recognition, spatial filtering, and counting. Despite this potential, how to leverage external knowledge for continual adaptation remains largely unexplored in existing MCIT methods. To this end, we propose ReCAP, a retrieval-guided framework that leverages external knowledge to guide capability reuse during continual adaptation. At each continual stage, ReCAP uses external search and an LLM to incrementally build a knowledge base of domain, reasoning, and format knowledge based on the current-stage training data. For each instruction, retrieved domain knowledge guides generation, while retrieved reasoning knowledge selects and orders capability modules to form an instance-specific capability path. As these capability modules are reused across stages, subsequent adaptation can overwrite previously learned parameters. To enable stable cross-stage reuse, ReCAP introduces adaptive subspace recycling, which parameterizes reusable capability modules with shared bases and stage-specific cores, protects historically important directions while recycling residual capacity. Extensive experiments on MCIT benchmarks show that ReCAP achieves SOTA performance.",
    "published": "2026-09-29T15:56:11Z",
    "updated": "2026-09-29T15:56:11Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37889"
  },
  {
    "id": "2609.37888",
    "title": "Visual Branch is What You Need for CLIP-based Class-Incremental Learning",
    "authors": [
      "Tao Hu",
      "Zhen-Hao Xie",
      "Jingcai Guo",
      "De-Chuan Zhan",
      "Da-Wei zhou"
    ],
    "abstract": "Class-Incremental Learning (CIL) requires models to recognize new classes over time without forgetting previously learned ones. With the rise of vision-language pre-training, CLIP has become a strong foundation for CIL. A common design in CLIP-based CIL is to construct textual classifier weights by encoding class-name templates with the CLIP text encoder, and then classify visual features by image-text cosine similarity. This design is appealing: since CLIP aligns images and text in a shared embedding space, textual weights appear to provide an off-the-shelf classifier for incremental classes. However, we show that this seemingly natural design is not always beneficial, as a modality gap can still separate the two modalities and make textual classifier weights deviate from visual class distributions. Empirically, under identical task-wise CIL training, initializing the cosine classifier with visual class centers yields lower loss and better incremental accuracy than using CLIP textual features. Motivated by these observations, we propose VIS, a visual-only method for CLIP-based CIL that removes the deployed textual branch and constructs the incremental classifier entirely in the visual space. To obtain stronger task-adaptive visual representations, VIS uses only base-session data to enhance CLIP's final visual representation with informative visual-layer features. Built on the enhanced visual representation, VIS employs a simple kernelized incremental least-squares SVM, whose classifier weights are solved in closed form from additive sufficient statistics. When new classes arrive, VIS accumulates their sufficient statistics and recomputes the classifier weights for all seen classes, enabling efficient incremental updates while preserving historical class knowledge. Extensive experiments show that VIS achieves state-of-the-art performance without a textual branch.",
    "published": "2026-09-29T15:56:06Z",
    "updated": "2026-09-30T05:00:59Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37888"
  },
  {
    "id": "2609.37885",
    "title": "Boids of a Feather Flock Together - Evolving Prey Behaviours Under Different Predator Attack Strategies",
    "authors": [
      "Augusta van Haren",
      "Hanna Hoogen",
      "Luca Pattavina"
    ],
    "abstract": "Flocking and schooling are thought to have evolved partly as defences against predation, but how prey should balance social and escape tendencies may depend on the predator's hunting strategy. We extend the predator-prey boids model of Ojo et al. (2023), itself based on Reynolds' boids, by combining six prey movement tendencies (alignment, cohesion, separation, dodge, repel and wiggle) into a single weighted acceleration update, and by reformulating wiggle as a sinusoidal manoeuvre. We then use an evolutionary strategy to optimise the six behaviour coefficients for collective prey survival against four predator hunting strategies: attack-centroid, attack-nearest, attack-random and attack-peripheral. Across five independent trials per strategy, coefficients converged within trials and mean fitness remained stable or increased, although trials often settled in different local optima. Prey survival was highest under attack-centroid and lowest under attack-nearest, in line with our hypotheses. Against attack-centroid, prey evolved individualistic predator avoidance with high escape coefficients, whereas against the other three strategies they largely kept their flock formation. Across all strategies, evolution favoured a low repel coefficient and relatively high dodge and wiggle coefficients. Our results suggest that optimal anti-predator behaviour depends on the interplay between escape tendencies and the predator's hunting strategy.",
    "published": "2026-09-29T15:55:18Z",
    "updated": "2026-09-29T15:55:18Z",
    "categories": [
      "q-bio.PE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37885"
  },
  {
    "id": "2609.37880",
    "title": "Fluency Without Evidence: Constraint-First Design and the Limits of Self-Report in AI-Assisted Learning",
    "authors": [
      "Fatima T. Zahra",
      "Wei Wang",
      "Frances Harper",
      "Jiangen He"
    ],
    "abstract": "A generative AI teaching partner should support reasoning over supplying conclusions; however, this has not been tested against learning in an authentic course. Drawing on design-based research, we specify the position as a conjecture map and report a first design cycle in two graduate-level research methods courses. Students used an AI teaching partner employing a constraint-first sequence requiring them to state and justify positions before receiving questions. Pre- and post-measures of AI literacy, critical thinking, and metacognitive awareness were collected alongside interaction records. AI literacy increased, concentrating in understanding AI, whereas critical thinking, awareness, and knowledge did not change. Since changes were limited to self-report measures, they may reflect growth in confidence instead of capacity. Interaction records, meanwhile, showed brief exchanges, uneven enactment of the constraint-first sequence, and missing records. These findings show why AI-supported learning requires interaction records to provide a more defensible basis for AI-supported designs than self-reports.",
    "published": "2026-09-29T15:53:13Z",
    "updated": "2026-09-29T15:53:13Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.37880"
  },
  {
    "id": "2609.38279",
    "title": "How People Use ChatGPT: Conversation-Level Evidence from India, Nigeria, Brazil, and Pakistan",
    "authors": [
      "Shreyasi Roy Chowdhury",
      "Kiran Garimella"
    ],
    "abstract": "Public understanding of how people use LLM-based conversational AI assistants comes primarily from aggregate platform reports by OpenAI and Anthropic, which apply fixed taxonomies and inferred demographics to hundreds of millions of users and release only summary statistics that outside researchers cannot re-analyze. We provide a complementary, conversation-level view: complete ChatGPT exports comprising 202,590 conversations from 1,252 users across India, Nigeria, Brazil, and Pakistan, paired with self-reported age and gender and spanning December 2022 to February 2026. To our knowledge this is the first conversation-level, demographically grounded comparison of ChatGPT use across multiple non-Western countries. We ask what these users use ChatGPT for (purpose), what they talk about (topics), and how they engage with it (mode of interaction), using the platform's own classifiers, unsupervised topic discovery, and a thematic analysis of expressive conversations. Personal use accounts for 55-64% of conversations in every country and coursework is about as common as work, so workplace productivity describes a minority of use. Unsupervised topic discovery surfaces country-specific uses that the OpenAI taxonomy folds into generic categories: health and wellness in India and Brazil, Urdu-English translation in Pakistan, current affairs in Nigeria, religious questions in Nigeria and Pakistan, and self-reflection in Brazil. Over three years, the share of conversations that seek information declined only modestly and the share that delegate a task did not grow, while conversations in which users express themselves rose from a few percent to roughly a fifth or more in every country. The same product is thus attached to different local needs in each country, and understanding what adoption means requires conversation-level, country-sensitive measurement alongside global aggregates.",
    "published": "2026-09-29T15:51:26Z",
    "updated": "2026-09-29T15:51:26Z",
    "categories": [
      "cs.CY",
      "cs.HC",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2609.38279"
  },
  {
    "id": "2609.37875",
    "title": "Co-PiLOT: Constrained Physics-Informed Latent Optimization for Target-Driven Inverse Design",
    "authors": [
      "Mahish K. Guru",
      "Mayank Nagar",
      "Ayush vyas",
      "Jan Bohlen",
      "Roland Aydin",
      "Noomane Ben Khalifa"
    ],
    "abstract": "Inverse design of physical systems (molecules, devices, microstructures) often reduces to optimizing a high-dimensional structure against an expensive black-box simulator. Direct search is difficult because the space is non-Euclidean, feasibility is hard to encode, and each evaluation is expensive. We present Co-PiLOT, a latent optimization approach that maps candidates through a generative encoder-decoder, uses the decoder as a learned validity prior, and searches the latent space with physics-informed black-box optimization. The framework is applied on the inverse design of magnesium alloy microstructure/texture. We develop a vision transformer based-encoder; paired with latent diffusion, diffusion transformer and rectified-flow transformer-based decoders on $\\sim80{,}000$ EBSD-derived microstructure dataset to learn a minimal bottleneck, $z$. The ViT-FMDiT model ($z$=$768$) reconstructs high-fidelity microstructure images (FID $27.86$, MS-SSIM $0.178$), which our self-segmenting orientation codec converts into input grids for crystal plasticity solver. Finally, we introduce MERIDIAN, an active latent optimizer driven by deep-kernel Gaussian-process uncertainty, failure-aware feasibility prediction, manifold-aware trust regions, and target-aware acquisition. Within a budget of $160$ simulations, the ViT-FMDiT and MERIDIAN combination yields the best target-driven objective score, reducing the relative target error by $3$--$22\\%$ against seven baselines (DANTE, TuRBO, BAxUS, CMA-ES, DDOM, SEIKO, DDPO) on the same decoder.",
    "published": "2026-09-29T15:51:02Z",
    "updated": "2026-09-29T15:51:02Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2609.37875"
  },
  {
    "id": "2609.37874",
    "title": "EndoPrior-GS: Dynamic Endoscopic Reconstruction with a Joint Texture Prior",
    "authors": [
      "Jiaqi Huang",
      "Shidong Wang",
      "Tong Xin",
      "Kabita Adhikari"
    ],
    "abstract": "Dynamic endoscopic reconstruction is fundamental to robotic surgery and computer-assisted interventions. While 3D Gaussian Splatting (3DGS) realises real-time rendering, its application to deformable intraoperative environments remains constrained by spurious geometry and varying illuminations. To address these limitations, we introduce EndoPrior-GS, a novel pipeline that explicitly couples frame-extracted vision heuristics and estimated depth maps. EndoPrior-GS derives a joint texture prior from a tool-filtered valid tissue mask, a non-specular photometric filter, and anatomical structural salience, yielding a probability map that guides primitive initialisation and subsequent density control. The prior is further extended to the temporal domain through a texture-aware term that dynamically weighs pairwise primitive contributions during training. We conduct extensive experiments on benchmark datasets EndoNeRF and SCARED, and the obtained results show that our method EndoPrior-GS reduces Flow Error by 27.7% and 25.8% over the representative approaches while preserving competitive rendering quality and real-time rendering speed. Our project website is available at https://jiaqi-huang-77.github.io/EndoPrior-GS/.",
    "published": "2026-09-29T15:49:22Z",
    "updated": "2026-09-29T15:49:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37874"
  },
  {
    "id": "2609.37871",
    "title": "ExceptionDrive: A Planning-Oriented Counterfactual Corner-Case Benchmark for Autonomous Driving",
    "authors": [
      "Ziyi Luo",
      "Zhe Sun",
      "Yehao Lu",
      "Lei Zhou",
      "Lisheng Wu",
      "Xuewei Li",
      "Zequn Qin",
      "Xi Li"
    ],
    "abstract": "Average performance on routine driving benchmarks does not establish planner reliability under rare, safety-critical hazards. We proposed ExceptionDrive, a counterfactual planning benchmark that uses VLM-assisted screening, localized multi-view editing, and quality auditing to insert hazards into real nuScenes scenes while preserving their context. Its 21 tasks span six safety families and define hazard or conflict regions, local safety constraints, and acceptable responses. Because hazard insertion can invalidate the recorded human trajectory, our reference-free protocol evaluates edited predictions using Unsafe Rate (UR), Hazard Clearance Compliance (HCC), Hazard Proximity Response (HPR), and Counterfactual Trajectory Shift (CTS), which measure core-region intrusion, clearance compliance, clearance relative to a prescribed margin, and counterfactual trajectory change. Seven representative planners frequently intrude into hazard regions or provide insufficient clearance. We also develop a Reminder Agent that, without sample-specific task labels, converts visual evidence and the shared taxonomy into structured records of hazard presence, type, and a recommended high-level strategy. The agent neither predicts trajectories nor controls the vehicle; its records guide a VLM-based decision agent. In zero-shot experiments, the reminders improve strategy accuracy and reduce under-warning.",
    "published": "2026-09-29T15:48:16Z",
    "updated": "2026-09-29T15:48:16Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37871"
  },
  {
    "id": "2609.37870",
    "title": "Learning from synthetic photorealistic raindrop for single image raindrop removal",
    "authors": [
      "Zhixiang Hao",
      "Shaodi You",
      "Yu Li",
      "Kunming Li",
      "Feng Lu"
    ],
    "abstract": "Raindrops adhered to camera lens or windshield are inevitable in rainy scenes and can become an issue for many computer vision systems such as autonomous driving. Because raindrop appearance is affected by too many parameters, therefore it is unlikely to find an effective model based solution. Learning based methods are also problematic, because traditional learning method cannot properly model the complex appearance. Whereas deep learning method lacks sufficiently large and realistic training data. To solve it, in our work, we propose the first photo-realistic dataset of synthetic adherent raindrops for training. The rendering is physics based with consideration of the water dynamic, geometric and photometry. The dataset contains various types of rainy scenes and particularly the rainy driving scenes. Based on the modeling of raindrop imagery, we introduce a detection network which has the awareness of the raindrop refraction as well as its blurring. Based on that, we propose the removal network that can well recover the image structure. Rigorous experiments demonstrate the state-of-the-art performance of our proposed framework.",
    "published": "2026-09-29T15:48:00Z",
    "updated": "2026-09-29T15:48:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37870"
  },
  {
    "id": "2609.38278",
    "title": "Masked Swingers: Harnessing Data Augmentation to Advance Autoencoders for Self-Supervised Learning",
    "authors": [
      "Anthony Fuller",
      "Scott C. Lowe",
      "Daniel G. Kyrollos",
      "Graham W. Taylor",
      "Evan Shelhamer",
      "James R. Green"
    ],
    "abstract": "Self-supervised learning (SSL) removes the need for annotations and makes models that are capable across more domains than supervised learning. The autoencoder SSL framework learns by reconstructing its own input after information loss through a bottleneck or noise injection. Masked autoencoders (MAE) are the most successful instantiation of this framework: they encode a random subset of patches, then decode the masked-out patches. In this work, we introduce key modifications to improve MAEs. Our method augments an image in two different ways, then masks and encodes each view separately. It then exchanges the global representations (CLS tokens) between views before decoding the masked patches. By design, our Masked Swingers encourages learning a view-agnostic summary of the image to facilitate efficient transfer. We perform extensive experiments, and find Masked Swingers outperforms MAE by +3-5% on ImageNet-1K kNN and provides large gains on fine-grained tasks, e.g., relative gains of +45% on instance retrieval, +22% on animal re-ID, and +76% on Omniglot character recognition. To boot, Swingers reduces error -64% relative to MAE on three new state-probing datasets, opening the door to world modeling. Welcome to our Swingers party.",
    "published": "2026-09-29T15:47:27Z",
    "updated": "2026-09-29T15:47:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38278"
  },
  {
    "id": "2609.37868",
    "title": "Learning Beyond What You Sample: Off-Policy-Aware Cross-Model Trajectory Exchange for RLVR",
    "authors": [
      "Doohyuk Jang",
      "Yoonsik Park",
      "Gyouk Chu",
      "Sihwan Park",
      "Eunho Yang"
    ],
    "abstract": "Reinforcement Learning with Verifiable Rewards (RLVR) methods such as GRPO rely on successful self-generated trajectories, but finite rollout budgets can produce all-fail groups with no reward-based policy-gradient signal. While additional rollouts improve the chance of success at higher cost, successful trajectories missing from one model's rollouts may already have been discovered by another. Indeed, we observe that heterogeneous models often succeed on complementary prompts, creating opportunities for mutual learning without a designated stronger teacher. To exploit this complementarity, we propose GRAFT (Gated Replacement of Answer-Failed groups with peer Trajectories), an off-policy-aware framework that replaces all-fail groups with informative peer groups. GRAFT transfers both successful and unsuccessful peer responses with peer-computed advantages, while controlling cross-model mismatch through sequence-level compatibility weighting and token-level importance ratio clipping. Across three heterogeneous model pairs and five mathematical reasoning benchmarks, GRAFT consistently improves both models over GRPO with the same per-model rollout budget, gaining 2.1 points on average and up to 4.5 points in model-level average performance. Stored peer trajectories preserve most of the gains, improving over GRPO by 1.8 points on average without simultaneous co-training.",
    "published": "2026-09-29T15:47:25Z",
    "updated": "2026-09-29T15:47:25Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.37868"
  },
  {
    "id": "2609.37864",
    "title": "AgentBug-Smith: Automatically Reproducing Real-World Harness Bugs in Agentic Systems",
    "authors": [
      "Yiming Cheng",
      "Alfin Wijaya Rahardja",
      "Mengshi Zhang",
      "Zihao Chen",
      "Zhenpeng Chen",
      "Yiling Lou"
    ],
    "abstract": "Agent harness bugs exhibit unique characteristics and remain challenging for state-of-the-art software agents to repair. Progress in this area is further hindered by existing benchmarks, which contain only a small and fixed number of executable harness bugs while requiring hundreds of human hours to construct. This work presents AgentBug-Smith, an automated harness bug reproduction approach that continuously discovers and reproduces real-world harness bugs from open-source agentic systems. Across different backbone LLMs, AgentBug-Smith consistently outperforms existing bug reproduction techniques designed for general software, achieving 10.67% - 27.56% higher success rates of reproducing harness bugs. By applying AgentBug-Smith to open-source agentic systems in the wild, we construct Live-Harness-Bench, a live and extensible benchmark that currently contains 200 reproducible harness bugs. We further demonstrate the utility of Live-Harness-Bench through two downstream applications. First, we use Live-Harness-Bench as the evaluation benchmark to systematically evaluate state-of-the-art software agents, revealing their limited capabilities in repairing real-world harness bugs. Second, we use Live-Harness-Bench as a knowledge base of real-world harness bug fixes, from which reusable repair skills can be distilled to improve existing software agents, increasing their harness-bug repair rates by 6.32%. Together, AgentBug-Smith and Live-Harness-Bench establish a scalable foundation for continuously evaluating and improving software agents on harness bug repair, turning real-world agent failures into executable evaluation instances and reusable knowledge for harness improvement, thus contributing to the ultimate goal of recursively self-improving agents.",
    "published": "2026-09-29T15:46:04Z",
    "updated": "2026-09-29T15:46:04Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37864"
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
  }
];
